import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {task} from '../../common/tasks/tasks';

@Injectable()

export class Tasksservice{
    private tasksUrl=  'http://localhost:8081/api/tasks';
    private headers= new Headers({'Content-Type':'application/json'});

    constructor( private http:Http){}

    gettasks(): Promise<task[]>{
       return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response =>response.json() as task[])
            .catch(this.handleError);
        
}
   deletetask(thetask:task){
    let deleteUrl= `${this.tasksUrl}/${thetask.id}`;
    
      return this.http.delete(deleteUrl)
                    .toPromise()
                    .then(this.success)
                    .catch(this.handleError);
   }
   inserttask(thetask:task):Promise<task>{
       return this.http.post(this.tasksUrl, JSON.stringify(thetask),{headers:this.headers})
                    .toPromise()
                    .then(response => response.json() as task )
                    .catch(this.handleError);
    } 
   updatetask(thetask:task):Promise<any>{
         let updateUrl= `${this.tasksUrl}/${thetask.id}`;
         return this.http.put(updateUrl, JSON.stringify(thetask), {headers: this.headers})
                        .toPromise()
                        .then(this.success )
                        .catch(this.handleError);
       
   }

   private handleError(error: any){
        console.log('An error occurred',error);
        return Promise.reject(error.message||error);
   }

   private success(): Promise<any>{
       return Promise.resolve();
   }
}
