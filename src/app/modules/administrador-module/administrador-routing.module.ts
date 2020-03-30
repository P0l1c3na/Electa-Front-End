import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AdministradorHomeComponent} from './pages/administrador/administrador-home/administrador-home.component';
import {PrefeituraAdmComponent} from './pages/prefeitura/prefeitura-home/prefeitura-adm.component';

const appRoutes: Routes = [
  {path: '', component: AdministradorHomeComponent},
  {path: 'prefeitura-adm', component: PrefeituraAdmComponent}
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
export class AdministradorRoutingModule {
}
