import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";
import {RouterModule} from '@angular/router';

import {MoneyModule} from './Money/Money.module';
import {TasksModule} from './Tasks/Tasks.module';
import {HomePageModule} from './HomePage/Homepage.module'

import {AppRoutingModule} from './app.routing';
import {TasksListComponent} from './Tasks/Tasks-list/Tasks-list.component';
import { AppComponent } from './app.component';
import {NotFoundComponent} from './not-found.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainNavigationComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MoneyModule,
    TasksModule,
    HomePageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
