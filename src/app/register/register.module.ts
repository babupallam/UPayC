import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ReglogsComponent } from './reglogs/reglogs.component';
import { RegisterComponent } from './register.component';


const routes: Routes = [
    {path:'register', component: RegisterComponent},
    {path:'reglogs', component: ReglogsComponent},
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        NgxSpinnerModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        RegisterComponent,
        ReglogsComponent,
    ],
    providers: [
    ]
})
export class RegisterModule { }