import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
})
export class TaskDetailComponent implements OnInit {
  hasUnsavedChanges: boolean = false;
  taskId: number = 0;
  taskName: string = '';

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')!;
      const task = this.taskService.tasks.find(t => t.id == parseInt(id));
      if(task) {
        this.taskId = task.id;
        this.taskName = task.name
      }
    });
  }

  onChange(newValue: any) {
    if(this.taskName != newValue) {
      this.hasUnsavedChanges = true;
    }
  }

  saveChanges() {
    var tasks = this.taskService.tasks.filter(t => t.id !== this.taskId);
    tasks.push({id: this.taskId, name: this.taskName});
    this.taskService.tasks = tasks;
    this.hasUnsavedChanges = false;
    this.router.navigate(['/tasks']);
  }
}