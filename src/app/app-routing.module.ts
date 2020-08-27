import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './security/auth-guard/auth.guard';
import { AppComponent } from './app.component';
import { AuthComponent } from './security/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./view/event/event.module').then(mod => mod.EventModule)
      },

      {
        path: 'participant',
        loadChildren: () => import('./view/participant/participant.module').then(mod => mod.ParticipantModule)
      }
    ]
  },

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule)
      }
    ]
  },

  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload', enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
