import {PreloadAllModules,RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

//import {TasksListComponent} from './Tasks/tasks-list/tasks-list.component';
import {NotFoundComponent} from './not-found.component';
import {HomeComponent} from './HomePage/home/home.component';


const routes: Routes= [
        {
            path:'',
            component: HomeComponent
          },
          {
            path:'**',
            component: NotFoundComponent
          }
];

@NgModule({
    imports:[RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}