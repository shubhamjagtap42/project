import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginformRoutingModule,RoutingComponent } from './loginform-routing.module';
import {ImageModule} from 'primeng/image';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    RoutingComponent
  ],
  imports: [
    CommonModule,
    LoginformRoutingModule,
    ImageModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,

  ]
})
export class LoginformModule { }

