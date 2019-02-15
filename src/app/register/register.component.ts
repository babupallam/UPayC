import { Component, OnInit } from '@angular/core';
import { AppService } from '../App.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registrationService: AppService,
    private spinner: NgxSpinnerService, ) { }


  State = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'
  ];
  regDetails: any = { "user": { "balance": 1000, "firstName": "babu", "lastName": "pallam", "line1": "pallam", "line2": "pulamanthole", "line3": "Kerala", "line4": "India", "line5": "679323" }, "cre": { "cardNo": "8898678945678765", "cardExpiryMonth": "04", "cardExpiryYear": "19", "cardVerificationValue": "344" } }
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
          this.spinner.show(); setTimeout(() => { this.spinner.hide(); }, 2000);
        },
        (errorResponce) => {
          console.log("errorResponce");
        }
      );
  }

}
/**
 *  "user": { "balance": 1000, "firstName": "babu", "lastName": "pallam", "line1": "pallam", "line2": "pulamanthole", "line3": "Kerala", "line4": "India", "line5": "679323" }, "cre": { "cardNo": "8898678945678765", "cardExpiryMonth": "04", "cardExpiryYear": "19", "cardVerificationValue": "344" } }
 *
 */