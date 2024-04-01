import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule,Routes } from '@angular/router';
import { firebaseConfig } from './firebase.config'; 
import {AppRoutingModule} from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component'

@NgModule({
    declarations: [
   
      DashboardComponent,
      // andere Komponenten hier deklarieren
    ],
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AppRoutingModule,   
      AppComponent,
    
    ],
    providers: [],
    bootstrap: []
  })


export class AppModule { }