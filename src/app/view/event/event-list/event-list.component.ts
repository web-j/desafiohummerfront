import { Component, OnInit } from '@angular/core';

import { EventService } from 'src/app/view/event/event-service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: Event[] = [];

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }

}
