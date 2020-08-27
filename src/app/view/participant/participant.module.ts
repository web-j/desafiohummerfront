import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ParticipantListComponent],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    MaterialModule
  ]
})
export class ParticipantModule { }
