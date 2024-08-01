import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = new Array<Task>();

  constructor() { 
    this.tasks.push({id: 1, name: 'Task 1'});
    this.tasks.push({id: 2, name: 'Task 2'});
    this.tasks.push({id: 3, name: 'Task 3'});
    this.tasks.push({id: 4, name: 'Task 4'});
  }
}
