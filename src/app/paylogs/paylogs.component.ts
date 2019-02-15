import { Component, OnInit } from '@angular/core';
import {AppService} from '../App.service';

@Component({
  selector: 'app-paylogs',
  templateUrl: './paylogs.component.html',
  styleUrls: ['./paylogs.component.scss']
})
export class PaylogsComponent implements OnInit {
  displayColumns: string[] = ['#', 'txnId', 'fromUser', 'toUser', 'amount', 'status', 'timestamp'];  
  error: any;
/*  payLogs: any = [
    {
      "id": 1,
      "txnId": "fe5b6880-2ec1-11e9-859a-7bfead257f43",
      "fromUser": 2,
      "toUser": 1,
      "amount": 130,
      "status": true,
      "createdAt": "2019-02-12T12:30:34.249Z",
      "updatedAt": "2019-02-12T12:30:34.249Z"
      }  
  ];
  */
  payLogs: any = [];
  headers: string[];

  constructor(private payLogService: AppService) { }
  
  ngOnInit() {
   // this.payLogs =[]
   this.showPayLogDetails()
  }

  showPayLogDetails() {
    this.payLogService.getPayLogDetails()
      .subscribe(
        (data: any) => {
          this.payLogs = data
          console.log(this.payLogs);
        },
        (errorResponce)=>{
          console.log("errorResponce");
        }
      );
  }
  makeError() {
    this.payLogService.makeIntentionalError().subscribe(null, error => this.error = error );
  }

}
