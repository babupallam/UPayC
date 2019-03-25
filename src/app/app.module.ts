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
import {NgxPrintModule} from 'ngx-print';
import {WALLETModule} from './Wallet/Wallet.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    TestComponent,
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
    RegisterModule,
    NgxPrintModule,
    WALLETModule
  ],
  providers: [AppService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
