import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/security/auth-service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private serviceAuth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.serviceAuth.logout();
    this.router.navigate(['/login']);
  }

}
