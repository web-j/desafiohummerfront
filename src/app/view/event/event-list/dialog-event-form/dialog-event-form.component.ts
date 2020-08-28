import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Event } from '../../event-model/event.model';
import { EventService } from '../../event-service/event.service';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { toast } from 'src/app/constant/constant-message';

@Component({
  selector: 'app-dialog-event-form',
  templateUrl: './dialog-event-form.component.html',
  styleUrls: ['./dialog-event-form.component.scss']
})
export class DialogEventFormComponent implements OnInit {

  public obj: Event = new Event();
  public loading: any;
  public edit = false;

  constructor(
    private service: EventService,

    public snack: MatSnackBar,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogEventFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event) { }

  ngOnInit(): void {
    if (this.data != null) {
      this.getOne(this.data);
    }
  }

  getOne(id: any) {
    this.loading = this.spinner();
    this.service.getOne(id).subscribe(res => {
      setTimeout(() => {
        this.loading.close();
        this.obj = res;
      }, 500);

      this.edit = true;
    });
  }

  saveOrUpdate() {
    if (this.edit) {
      this.service.update(this.obj).subscribe(
        success => {
          this.obj = success;
          this.toast(toast.event_update.message, toast.event_update.action);
          this.close();
        }, error => {
          this.toast(toast.error.message, toast.error.action);
        }
      );
    } else {
      this.service.save(this.obj).subscribe(
        success => {
          this.obj = success;
          this.toast(toast.event_save.message, toast.event_save.action);
          this.close();
        }, error => {
          this.toast(toast.error.message, toast.error.action);
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
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
