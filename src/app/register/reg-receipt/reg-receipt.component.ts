import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {DataService} from '../../provider/data.service';
@Component({
  selector: 'app-reg-receipt',
  templateUrl: './reg-receipt.component.html',
  styleUrls: ['./reg-receipt.component.scss']
})
export class RegReceiptComponent implements OnInit {
  regDetails:any = {} ;

  constructor(  private route:ActivatedRoute,
    private data: DataService) { 
      this.regDetails = this.data.regDetails;
  }
  ngOnInit() {
  }
  printDoc(): void {
  }

}
