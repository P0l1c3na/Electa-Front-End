import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AdministradorRoutingModule} from './administrador-routing.module';
import {AdministradorHomeComponent} from './pages/administrador/administrador-home/administrador-home.component';
import {PrefeituraAdmComponent} from './pages/prefeitura/prefeitura-home/prefeitura-adm.component';

@NgModule({
  declarations: [AdministradorHomeComponent, PrefeituraAdmComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    RouterModule
  ],
  exports: []
})
export class AdministradorModule {
}
