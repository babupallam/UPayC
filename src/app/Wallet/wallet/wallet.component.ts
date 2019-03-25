import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from './../../provider/data.service';
import { AppService } from '../../App.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  //displayColumns: string[] = ['#', 'txnId', 'fromUser', 'toUser', 'amount', 'status', 'timestamp'];  
  displayColumns: string[] = ['txnId', 'fromUser', 'toUser', 'amount', 'status', 'timestamp'];
  error: any;
  payLogs: any = [];
  headers: string[];


  userWallet: any /*= {
    accountId: "81600002",
    balance: -1,
    workingcurrency: "INR"
  };*/
  paymentLog: any;
  private errorMessage;


  constructor(
    private fb: FormBuilder,
    private payLogService: AppService,
    private data: DataService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    this.userWallet = this.data.userDetails;

    console.log(this.userWallet)
  }
  ngOnInit(): void {
    this.showPayLogDetails();
  }

  showPayLogDetails() {
    this.payLogService.getPayLogDetails()
      .subscribe(
        (data: any) => {
          console.log(data)
          data.forEach(log => {
            if (log.fromUser == this.userWallet.accountId || log.toUser == this.userWallet.accountId) {
              this.payLogs.push(log);
            }
          });
          console.log(this.payLogs);
        },
        (errorResponce) => {
          console.log("errorResponce");
        }
      );
  }
  makeError() {
    this.payLogService.makeIntentionalError().subscribe(null, error => this.error = error);
  }

  logOut() {
    this.spinner.show();
    this.data.userDetails = [];
    this.userWallet =[];
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/']);
    }, 2000);

  }
}
