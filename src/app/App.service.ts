import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {serverURL} from './../environments/environment'
@Injectable()
export class AppService {
    configUrl = serverURL.serURL;
    responce: any;

    constructor(private http: HttpClient) { }

    registerNewUser(details: any):Observable<any> {
        return this.http.post(this.configUrl+ 'regnu', details)
        .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    getPayLogDetails() {
        return this.http.get(this.configUrl+'paylogs')
        .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
          );
    }

    getRegLogDetails() {
        return this.http.get(this.configUrl+'reglogs')
        .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
          );
    }

    SubmitTxn(details: any):Observable<any> {
        return this.http.post(this.configUrl+ 'payment', details)
        .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
    makeIntentionalError() {
        return this.http.get('not/a/real/url')
            .pipe(
                catchError(this.handleError)
            );
    }



}
