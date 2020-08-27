import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { Rule } from 'src/app/constant/constant-rest';

const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
    data: { roles: [Rule.Admin] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
