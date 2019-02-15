import { Component, OnInit } from '@angular/core';
import { AppService } from '../App.service';

@Component({
  selector: 'app-reglogs',
  templateUrl: './reglogs.component.html',
  styleUrls: ['./reglogs.component.scss']
})
export class ReglogsComponent implements OnInit {
  displayColumns: string[] = ['#', 'Customer Name', 'Account Number', 'Balance', 'Address', 'Card Number', 'Card Expiry Month', 'Card Expiry Year', 'CVV'];
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
  regLogs: any = [];
  headers: string[];

  constructor(private regLogService: AppService) { }

  ngOnInit() {
    // this.payLogs =[]
    this.showregLogDetails()
  }

  showregLogDetails() {
    this.regLogService.getRegLogDetails()
      .subscribe(
        (data: any) => {
          //this.regLogs = data
          //console.log(this.regLogs);
          var users = data[0];
          var cres = data[1];
          users.forEach((i) => {
            var j = cres.find((obj, index, cres) => {
              return (obj.accountId == i.accountId)
            });
            i = this.jsonConcat(i, j);
            this.regLogs.push(i);
          });
        },
        (errorResponce) => {
          console.log(errorResponce);
        }
      );
  }
  makeError() {
    this.regLogService.makeIntentionalError().subscribe(null, error => this.error = error);
  }

  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }

}
