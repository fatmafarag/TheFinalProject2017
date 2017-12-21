
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";


import{TasksListComponent} from './tasks-list/tasks-list.component';
import {TasksRoutingModule} from './Tasks.routing';
import {commonModule} from '../common/common.module';
import {Tasksservice} from './tasks-list/Tasks.service';

@NgModule(
    {
    imports:[ BrowserModule,
              FormsModule,
             HttpModule,
             commonModule,
             TasksRoutingModule],    
    declarations: [TasksListComponent],
    providers:[Tasksservice],
    bootstrap: [TasksListComponent]
    
}
)

export class TasksModule{ }