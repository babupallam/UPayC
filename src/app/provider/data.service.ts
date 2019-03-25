import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public txnDetails: any;
  public regDetails: any;
  public txnResponse: any;
  public userDetails: any;

  constructor() { }
}
