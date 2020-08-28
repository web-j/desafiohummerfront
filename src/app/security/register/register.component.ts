import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Participant } from '../../view/participant/participant-model/participant.model';
import { RegisterService } from '../auth-service/register.service';
import { toast } from '../../constant/constant-message';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public obj: Participant = new Participant();

  public loading: any;

  constructor(
    private service: RegisterService,
    private router: Router,

    public snack: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.loading = this.spinner();
    this.service.save(this.obj).subscribe(
      success => {
        this.obj = success;

        setTimeout(() => {
          this.loading.close();
          this.goLogin();
          this.toast(toast.save_participant.message, toast.save_participant.action);
        }, 500);
      },
      error => {
        this.toast(toast.error.message, toast.error.action);
      });
  }

  goLogin() {
    this.router.navigate(['login']);
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
