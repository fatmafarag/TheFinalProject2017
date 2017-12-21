import { Component, OnInit} from '@angular/core';

import {Tasksservice} from './Tasks.service';
import {task} from '../../common/tasks/tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent implements OnInit  {

  isNewForm: boolean;
  showForm: boolean;
  formTask: task;
  tasks: task[];


  constructor(private Tasksservice: Tasksservice){}

  ngOnInit(){
    this.Tasksservice.gettasks()
    .then (tasks=>this.tasks=tasks)
    .catch(error => console.log(error));
  }

  showtaskform (thetask:task){
    if(!thetask){
      thetask= new task();
      this.isNewForm=true;
    }
    this.showForm=true;
    this.formTask= thetask;
  }

  removeTask(thetask:task){
    this.Tasksservice.deletetask(thetask)
    .then(() => {
      var index=this.tasks.indexOf(thetask,0);
      if (index>-1){
        this.tasks.splice(index,1);
      }
    })
    .catch(error => console.log(error));
  }

  saveTask(thetask:task){
    if(thetask){
      if(this.isNewForm){
        this.Tasksservice.inserttask(thetask)
            .then((insertedtask) =>this.tasks.push(insertedtask))
              .catch(error => console.log(error));
        
      }
      else{
        this.Tasksservice.updatetask(thetask)
        .catch(error => console.log(error));
        
      }
    this.showForm=false;
    this.isNewForm=false;
    thetask=null;  
    }
  }
}

