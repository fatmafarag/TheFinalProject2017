import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";


import{MoneyListComponent} from './money-list/money-list.component';
import {MoneyRoutingModule} from './Money.routing';
import {commonModule} from '../common/common.module';
import {moneyservice} from './money-list/money.service';


@NgModule(
    {
    imports:[ BrowserModule,
              FormsModule,
              commonModule,
              HttpModule,              
              MoneyRoutingModule],    
    declarations: [MoneyListComponent],
    providers:[moneyservice]
    }
)

export class MoneyModule{}