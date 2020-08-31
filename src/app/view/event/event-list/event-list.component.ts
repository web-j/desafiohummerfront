import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EventService } from 'src/app/view/event/event-service/event.service';
import { Event } from 'src/app/view/event/event-model/event.model';
import { DialogEventFormComponent } from './dialog-event-form/dialog-event-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { toast } from 'src/app/constant/constant-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public displayedColumns: string[] = ['eventName', 'eventDate', 'status', 'action'];
  public dataSource: Event[] = [];

  constructor(
    private eventService: EventService,
    private router: Router,

    public dialog: MatDialog,
    public snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getListEvent();
  }

  getListEvent() {
    this.eventService.getAll().subscribe(res => {
      this.dataSource = res;
    });
  }

  openDialog(id?: any): void {
    const dialogRef = this.dialog.open(DialogEventFormComponent, {
      width: '500px',
      data: id || null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getListEvent();
    });
  }

  closedEvent(obj: Event) {
    this.eventService.closedEvent(obj).subscribe(res => {
      this.toast(toast.event_encerrado.message, toast.event_encerrado.action);
      this.getListEvent();
    },
      error => {
        this.toast(toast.error.message, toast.error.action);
      }
    );
  }

  viewDashboard(id: string) {
    this.router.navigate(['event/details', id]);
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
