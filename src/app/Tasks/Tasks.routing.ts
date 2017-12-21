import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TasksListComponent} from './tasks-list/tasks-list.component';

const routes: Routes= [
    { 
        path:'Tasks',
        component: TasksListComponent
      },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TasksRoutingModule{

}