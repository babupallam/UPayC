import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {DataService} from '../../provider/data.service';


@Component({
  selector: 'app-pay-res-dialog',
  templateUrl: './pay-res-dialog.component.html',
  styleUrls: ['./pay-res-dialog.component.scss']
})
export class PayResDialogComponent implements OnInit {
  txnDetails:any = {} ;
  constructor(
    private route:ActivatedRoute,
    private data: DataService) { 
      this.txnDetails = this.data.txnDetails;
    }

  ngOnInit() { 
 }

  printDoc(): void {
  }
}
