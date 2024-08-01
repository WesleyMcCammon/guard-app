import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.notify.subscribe(n => {
      this.isLoggedIn = n;
    });
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  title = 'Task Management App';
}