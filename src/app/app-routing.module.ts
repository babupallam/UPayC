import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import { PaylogsComponent } from './paylogs/paylogs.component';
import {ReglogsComponent} from './reglogs/reglogs.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, 
  {path:'pay', component: PaymentComponent},
  {path:'register', component: RegisterComponent},
  {path:'reglogs', component: ReglogsComponent},
  {path:'paylogs', component: PaylogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
