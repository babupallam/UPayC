import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from '../../provider/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import $ from 'jquery'


@Component({
  selector: 'app-pay-res-dialog',
  templateUrl: './pay-res-dialog.component.html',
  styleUrls: ['./pay-res-dialog.component.scss']
})
export class PayResDialogComponent implements OnInit {
  txnDetails: any = {};
  txnResponse: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private data: DataService) {
    this.txnDetails = this.data.txnDetails;
    this.txnResponse = this.data.txnResponse;
  }

  ngOnInit() {
  }

  printInvoice() {
    window.print();
  }
  returnToECApp(){
    console.log(this.txnDetails.metaData.redirectionLink)
    this.spinner.show(); setTimeout(() => {
      this.spinner.hide();
      var b = window.btoa(JSON.stringify(this.txnResponse));
//      window.location.href =this.txnDetails.redirectionLink + b;
window.location.href =this.txnDetails.metaData.redirectionLink+'/?txn='+b;
    }, 2000);
//    this.router.navigate([this.txnDetails.redirectionLink],this.txnResponse);
  }
}
