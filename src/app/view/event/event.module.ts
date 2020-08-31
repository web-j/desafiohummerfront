import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { MaterialModule } from 'src/app/material.module';
import { DialogEventFormComponent } from './event-list/dialog-event-form/dialog-event-form.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';

@NgModule({
  declarations: [EventListComponent, DialogEventFormComponent, EventDashboardComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    MaterialModule
  ],

  entryComponents: [
    DialogEventFormComponent
  ]
})
export class EventModule { }
