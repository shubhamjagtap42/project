import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import { LoginformModule } from './loginform/loginform.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    LoginformModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
