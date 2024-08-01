// auth.service.ts

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('authenticated', 'true');
      this.notify.emit(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('authenticated');
  }

  isLoggedIn(): boolean {
    const isAuth: string | null = localStorage.getItem('authenticated');
    if(isAuth && isAuth === 'true') return true;
    else return false;
  }
}