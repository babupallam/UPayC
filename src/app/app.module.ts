import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import {AppService} from './App.service';
import {DataService} from './provider/data.service'

import {PaymentModule} from './payment/payment.module';
import {RegisterModule} from './register/register.module';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule,
    PaymentModule,
    RegisterModule
  ],
  providers: [AppService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
