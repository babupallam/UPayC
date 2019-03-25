import { Component, OnInit, Injectable } from '@angular/core';
import { AppService } from '../App.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../provider/data.service';

import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient
} from "@angular/common/http";
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  /*txnDetails: any ={}*/
  txnDetails: any;/* = {
    metaData: {
      toAccount: '81600001', //from site
      customerName: 'babu pallam',
      amount: 225 //from site
    },
    credentials: {
      cardNo: '8898678945678765',
      cardExpiryMonth: '04',
      cardExpiryYear: '2019',
      cardVerificationValue: '300'
    }
  };*/

  txnResponse: any = [];
  errors: any = [];

  constructor(
    private txnService: AppService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService) {


  }
  ngOnInit() {
    /* this.route.params.subscribe(params => {
       console.log(params);
     });
     console.log(this.route.snapshot.data)
     console.log(this.route.queryParams)
     *//*
      receivedData = {
	     toAccount: 'EC_ACCOUNT_NO',
	     customerName: 'CUSTOMER_NAME',
	     amount: 1000,
	     redirectionLink: "http:\\=======.==\...."
    	}
    */
   this.loadData();
  }
  loadData(){
    var receivedData 
     this.route.queryParams.subscribe((params) => {
      receivedData = params['txn'];
      receivedData = window.atob(receivedData);
      receivedData = JSON.parse(receivedData);
      this.txnDetails = {
        metaData: {
          'toAccount': receivedData.toAccount, //from site
          'accountHolderName': receivedData.accountHolderName,
          'amount': receivedData.amount, //from site,
          'redirectionLink': receivedData.redirectionLink
        },
        credentials: {
          'customerName':'',
          'cardNo': '',
          'cardExpiryMonth': '',
          'cardExpiryYear': '',
          'cardVerificationValue': ''
        }
      };
      this.data.txnDetails = this.txnDetails;
    })
    console.log(this.txnDetails)
  }

  txnSubmit() {
    this.txnService.SubmitTxn(this.txnDetails)
      .subscribe(
        (data: any) => {
          this.txnResponse = data;
          this.spinner.show(); setTimeout(() => {
            this.spinner.hide();
            this.data.txnResponse = this.txnResponse;
            this.router.navigate(['res']);
          }, 2000);
          // console.log(this.txnResponse)
        },
        (errorResponce) => {
          console.log(errorResponce);
        }
      );
  }
}

/*
var details = {
  metaData: {
    toAccount: '11e27490-2eb6-11e9-a612-d108d6072963',
    customerName: 'A',
    amount: 130
  },
  credentials: {
    cardNo: '4243898868120318',
    cardExpiryMonth: 06,
    cardExpiryYear: 2022,
    cardVerificationValue: '275'
  }
}

*/