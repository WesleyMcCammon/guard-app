import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { Observable } from 'rxjs';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const canDeactivateGuard: CanDeactivateFn<TaskDetailComponent> = (
  component: TaskDetailComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  if (component.hasUnsavedChanges) {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
};