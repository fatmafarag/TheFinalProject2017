import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {MoneyListComponent} from './money-list/money-list.component';

const routes: Routes= [
    { 
        path:'Money',
        component: MoneyListComponent
      },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MoneyRoutingModule{

}