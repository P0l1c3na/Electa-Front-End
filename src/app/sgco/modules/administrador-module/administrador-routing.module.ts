import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdministradorComponent} from './pages/administrador/administrador.component';

const appRoutes: Routes = [
  { path: '', component:  AdministradorComponent }
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
export class AdministradorRoutingModule { }
