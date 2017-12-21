import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import{HomeComponent} from './home/home.component';
import {HomePageRoutingModule} from './Homepage.routing';
import {commonModule} from '../common/common.module';

@NgModule(
    {
    imports:[ BrowserModule,FormsModule,commonModule,HomePageRoutingModule],    
    declarations: [HomeComponent]
    }
)

export class HomePageModule{}