import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WalletComponent } from './wallet/wallet.component';
import { WALLETComponent } from './Wallet.component';
import { AddCashComponent } from './add-cash/add-cash.component';
import { TransferCashComponent } from './transfer-cash/transfer-cash.component'
import {AppService} from './../App.service'
import{ LoginComponent } from './login/login.component';

const paymentRoutes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'wallet', component: WalletComponent },
  { path: 'addC', component: AddCashComponent },
  { path: 'transferC', component: TransferCashComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paymentRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    WALLETComponent,
    AddCashComponent,
    TransferCashComponent,
    WalletComponent,
    LoginComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AppService
  ],
})

export class WALLETModule { }
