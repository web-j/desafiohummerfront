import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserEvent } from '../model/user-event.model';
import { UserEventService } from '../service/user-event.service';
import { toast } from 'src/app/constant/constant-message';

@Component({
  selector: 'app-dialog-user-event',
  templateUrl: './dialog-user-event.component.html',
  styleUrls: ['./dialog-user-event.component.scss']
})
export class DialogUserEventComponent implements OnInit {

  public obj: UserEvent = new UserEvent();

  constructor(
    private service: UserEventService,

    public snack: MatSnackBar,
    public dialogRef: MatDialogRef<DialogUserEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserEvent
  ) { }

  ngOnInit(): void {
  }

  update() {
    this.obj.eventId = this.data.eventId;
    this.obj.userId = this.data.userId;
    console.log(this.obj);
    this.service.save(this.obj).subscribe(
      success => {
        this.obj = success;
        this.toast(toast.event_participant.message, toast.event_participant.action);
        this.close();
      }, error => {
        this.toast(toast.error.message, toast.error.action);
      }
    );
  }

  toast(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  close(): void {
    this.dialogRef.close();
  }


}
