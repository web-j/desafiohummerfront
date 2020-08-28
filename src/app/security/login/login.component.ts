import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../auth-service/auth.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { toast } from 'src/app/constant/constant-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  username: string;
  password: string;
  loading: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,

    public snack: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitCredentials() {
    this.loading = this.spinner();
    this.authService.login(this.username, this.password).pipe(first()).subscribe(
      success => {
        setTimeout(() => {
          this.loading.close();
        }, 500);

        this.router.navigate([this.returnUrl]);
        this.toast(toast.welcome.message, toast.welcome.action);
      }, error => {
        this.loading.close();
        this.toast(toast.error.message, toast.error.action);
      });
  }

  goRegister() {
    this.router.navigate(['login/register']);
  }

  toast(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  spinner() {
    return this.dialog.open(SpinnerComponent, {
      width: '100%',
      height: '100%',
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'panel',
    });
  }

}
