import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { canActivateGuard, canDeactivateGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', 
        component: TaskListComponent, 
        canActivate: [canActivateGuard] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [canActivateGuard] },
    { 
        path: 'tasks', 
        component: TaskListComponent, 
        canActivate: [canActivateGuard] 
    },
    { path: 'task/:id', component: TaskDetailComponent, canActivate: [canActivateGuard], 
        canDeactivate: [canDeactivateGuard] },
    { path: '**', redirectTo: '/login' }
];
