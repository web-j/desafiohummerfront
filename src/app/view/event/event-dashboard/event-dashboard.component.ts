import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from '../event-service/event.service';
import { Event } from '../event-model/event.model';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit {

  public loading: any;
  public obj: Event = new Event();

  public displayedColumnsPartitipant: string[] = ['name', 'email'];
  public dataSourcePartitipant: any[] = [];

  public displayedColumnsGuest: string[] = ['name'];
  public dataSourceGuest: any[] = [];

  constructor(
    private service: EventService,

    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    if (this.activatedRoute.snapshot.paramMap.get('id') !== null) {
      this.loading = this.spinner();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getOne(id).subscribe(success => {
        setTimeout(() => {
          this.loading.close();
        }, 500);
        this.obj = success;

        this.dataSourceGuest = success.guest;
        this.dataSourcePartitipant = success.userDTO;
      });
    }
  }

  back() {
    this.router.navigate(['event']);
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
