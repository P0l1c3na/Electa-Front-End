import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import {RouterModule} from '@angular/router';
import {AdministradorComponent} from './pages/administrador/administrador.component';

@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    RouterModule
  ],
  exports: [
  ]
})
export class AdministradorModule { }
