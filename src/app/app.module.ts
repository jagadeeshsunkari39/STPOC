import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './common/material/material/material.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common/services/common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './common/shared/side-nav/side-nav.component';
import { SharedModule } from './common/shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
