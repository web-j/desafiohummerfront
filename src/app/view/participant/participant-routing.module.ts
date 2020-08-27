import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantListComponent } from './participant-list/participant-list.component';
import { Rule } from 'src/app/constant/constant-rest';

const routes: Routes = [
  {
    path: '',
    component: ParticipantListComponent,
    data: { roles: [Rule.Admin] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
