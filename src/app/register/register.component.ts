import { Component, OnInit } from '@angular/core';
import { AppService } from '../App.service';
import { NgxSpinnerService } from 'ngx-spinner';

import {Router, NavigationExtras } from '@angular/router';
import {DataService} from '../provider/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registrationService: AppService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private data: DataService ) { }


  State = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'
  ];
  regDetails: any = { "user": { "balance": 1000, "firstName": "", "lastName": "", "line1": "M.Tech", "line2": "CSED, MNNIT Allahabad", "line3": "Uttar Pradesh", "line4": "India", "line5": "211004" }, "cre": { "cardNo": "8000800080008000", "cardExpiryMonth": "04", "cardExpiryYear": "2019", "cardVerificationValue": "300" } }
  /*  regDetails: any = {
      "user": { "balance": 1000 },
      "cre": {}
    };
    */
  regResponse: any = [];
  errors: any = [];
  ngOnInit() {

  }
  regNewUser() {
    /** spinner starts on init */
    console.log(this.regDetails);
    this.registrationService.registerNewUser(this.regDetails)
      .subscribe(
        (data: any) => {
          this.regResponse = data; 
          this.spinner.show(); 
          setTimeout(() => { 
            this.spinner.hide(); 
            this.data.regDetails = this.regResponse;
            this.router.navigate(['receipt']);
          }, 2000);
        },
        (errorResponse) => {
          this.errors.push(
           errorResponse
          )
          console.log(this.errors);
        }
      );
  }

}
/**
 *  "user": { "balance": 1000, "firstName": "babu", "lastName": "pallam", "line1": "pallam", "line2": "pulamanthole", "line3": "Kerala", "line4": "India", "line5": "679323" }, "cre": { "cardNo": "8898678945678765", "cardExpiryMonth": "04", "cardExpiryYear": "19", "cardVerificationValue": "344" } }
 *
 */