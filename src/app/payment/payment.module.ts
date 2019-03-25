import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentService } from './shared/payment.service'
import { PaylogsComponent } from './paylogs/paylogs.component'
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PayResDialogComponent } from './pay-res-dialog/pay-res-dialog.component';
const paymentRoutes: Routes = [
    { path: 'pay', component: PaymentComponent},
    { path: 'res', component: PayResDialogComponent},
    { path: 'paylogs', component: PaylogsComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(paymentRoutes),
        HttpClientModule,
        FormsModule,
        NgxSpinnerModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        PaymentComponent,
        PaylogsComponent,
        PayResDialogComponent
    ],
    providers: [
        PaymentService
    ]
})
export class PaymentModule { }