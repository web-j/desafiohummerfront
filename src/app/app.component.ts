import { Component, OnInit } from '@angular/core';
import { AuthService } from './security/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private serviceAuth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  logout() {
    this.serviceAuth.logout();
    this.router.navigate(['/login']);
  }
}
