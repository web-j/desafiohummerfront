import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../security/auth-service/auth.service';
import { EventService } from '../view/event/event-service/event.service';
import { Event } from '../view/event/event-model/event.model';
import { UserEventService } from './service/user-event.service';
import { UserEvent } from './model/user-event.model';
import { toast } from '../constant/constant-message';
import { DialogGuestFormComponent } from '../view/participant/dialog-guest-form/dialog-guest-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public available = true;

  public events: Event[] = [];
  public eventsUnavailable: Event[] = [];

  public uservent: UserEvent = new UserEvent();
  public currentUser: any;

  constructor(
    private authService: AuthService,
    private serviceEvent: EventService,
    private service: UserEventService,
    private router: Router,

    public snack: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser.user.accessRole === 'ADMIN') {
      this.router.navigate(['event']);
    }

    this.getAll();
    this.getAllEventsUnavailable();
  }

  getAll() {
    this.serviceEvent.GetAllEventsAvailable().subscribe(success => {
      this.events = success;
    });
  }

  getAllEventsUnavailable() {
    this.serviceEvent.getAllEventsUnavailable().subscribe(success => {
      this.eventsUnavailable = success;
      console.log(this.eventsUnavailable);
    });
  }

  participate(id: any) {
    this.uservent.userId = this.currentUser.user.id;
    this.uservent.eventId = id;

    this.service.save(this.uservent).subscribe(
      success => {
        this.uservent = success;
        this.toast(toast.event_participant.message, toast.event_participant.action);
        this.getAll();
        this.getAllEventsUnavailable();
      }
    );
  }

  unParticipate(id: any) {
    this.uservent.userId = this.currentUser.user.id;
    this.uservent.eventId = id;

    this.service.delete(this.uservent).subscribe(success => {
      this.uservent = success;
      this.toast(toast.event_participant_cancel.message, toast.event_participant_cancel.action);
      this.getAll();
      this.getAllEventsUnavailable();
    });
  }

  toast(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  openGuestDialog(): void {
    const dialogRef = this.dialog.open(DialogGuestFormComponent, {
      width: '500px'
      // data: id || null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAll();
    });
  }

}
