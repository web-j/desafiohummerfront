import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    MaterialModule
  ]
})
export class EventModule { }
