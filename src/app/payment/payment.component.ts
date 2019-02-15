import { Component, OnInit} from '@angular/core';
import { AppService } from '../App.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Router, NavigationExtras } from '@angular/router';
import {DataService} from '../provider/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  /*txnDetails: any ={}*/
  txnDetails: any = {
    metaData: {
      toAccount: '76ad4930-3047-11e9-892c-59218f25ed44', //from site
      customerName: 'A',
      amount: 225 //from site
    },
    credentials: {
      cardNo: '4632885445769070',
      cardExpiryMonth: '06',
      cardExpiryYear: '2022',
      cardVerificationValue: '100'
    }
  };

  txnResponse: any = [];
  errors: any = [];

  constructor(
    private txnService: AppService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private data: DataService) { }

  ngOnInit() {
  }
  txnSubmit() {
    this.txnService.SubmitTxn(this.txnDetails)
      .subscribe(
        (data: any) => {
          this.txnResponse = data;
          this.spinner.show(); setTimeout(() => { 
            this.spinner.hide();
            this.data.txnDetails = this.txnResponse;
            this.router.navigate(['res']);
          }, 2000);
         // console.log(this.txnResponse)
        },
        (errorResponce) => {
          console.log("errorResponce");
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