import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component'
import {PaymentModule} from './payment/payment.module';
import {RegisterModule} from './register/register.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'**', component: ErrorComponent} 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PaymentModule,
    RegisterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
