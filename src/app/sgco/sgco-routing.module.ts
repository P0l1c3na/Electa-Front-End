import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {InicioComponent} from './pages/inicio/inicio.component';
import {LoginComponent} from './pages/login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '', component:  InicioComponent },
    { path: 'login', component:  LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class SgcoRoutingModule { }
