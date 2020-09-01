import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantListComponent, ConverteraccessRolePipe } from './participant-list/participant-list.component';
import { MaterialModule } from 'src/app/material.module';
import { DialogGuestFormComponent } from './dialog-guest-form/dialog-guest-form.component';

@NgModule({
  declarations: [ParticipantListComponent, DialogGuestFormComponent, ConverteraccessRolePipe],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    MaterialModule
  ],

  entryComponents: [DialogGuestFormComponent],

  providers: [ConverteraccessRolePipe]
})
export class ParticipantModule { }
