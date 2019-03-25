import { Component, OnInit, Injectable } from '@angular/core';
import { AppService } from './../../App.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from './../../provider/data.service';

import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient
} from "@angular/common/http";
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorResponse: any;
  loginSuccess: boolean = false;

  txnDetails: any = {
    credentials: {
      customerName: '',
      cardNo: '',
      cardExpiryMonth: '',
      cardExpiryYear: '',
      cardVerificationValue: ''
    }
  };
  /*
  txnDetails: any = {
    credentials: {
      customerName: 'A upay',
      cardNo: '8898678945678765',
      cardExpiryMonth: '04',
      cardExpiryYear: '2019',
      cardVerificationValue: '344'
    }
  };
  */

  txnResponse: any = [];
  errors: any = [];

  constructor(
    private txnService: AppService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService) {
    console.log(this.txnDetails)

  }
  ngOnInit() {

  }

  logInUsingCard(data: any) {
    var regDetails;
    //console.log(this.txnDetails);
    this.txnService.getRegLogDetails()
      .subscribe(
        (data: any) => {
          regDetails = data;
          this.spinner.show();
         // console.log(regDetails[0]);
          regDetails[0].forEach((reg, index) => {
           // console.log(reg.customerName)
            if (reg.customerName.trim() === this.txnDetails.credentials.customerName) {
              //console.log("Index " + index);
              //console.log("Account has been found, Checking Credentials");
              regDetails[1].forEach((cre) => {
                //console.log(cre)
                if (
                  cre.accountId == reg.accountId &&
                  cre.cardNo == this.txnDetails.credentials.cardNo &&
                  cre.cardVerificationValue == this.txnDetails.credentials.cardVerificationValue &&
                  cre.cardExpiryMonth == this.txnDetails.credentials.cardExpiryMonth &&
                  cre.cardExpiryYear == this.txnDetails.credentials.cardExpiryYear
                ) {
                  console.log("Credentials have been verified");
                  this.loginSuccess = true;
                  this.data.userDetails = {
                    'customerName': reg.customerName,
                    'balance': reg.balance,
                    'workingcurrency': "INR",
                    'accountId': reg.accountId,
                    'cardNo': cre.cardNo,
                    'cardVerificationValue': cre.cardVerificationValue,
                    'cardExpiryMonth': cre.cardExpiryMonth,
                    'cardExpiryYear': cre.cardExpiryYear
                  }
                  //console.log(this.data.userDetails);
                }
              });
            }
          });
          if (!this.loginSuccess) {
            //failed:
            setTimeout(() => {
              this.errorResponse = "Invalid! Enter valid credentials"
              this.spinner.hide();
            }, 1000);
          } else {
            setTimeout(() => {
              this.spinner.hide();
              this.router.navigate(['wallet']);
            }, 2000);
          }

          // console.log(this.txnResponse)
        },
        (errorResponce) => {
          console.log("errorResponce");
        }
      )
  }
}
