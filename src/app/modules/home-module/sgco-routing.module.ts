import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../../core/components/login/login.component';
import {RecuperarSenhaComponent} from '../../core/components/recuperar-senha/recuperar-senha.component';
import {SgcoHomeComponent} from './sgco-home/sgco-home.component';

const appRoutes: Routes = [
    { path: '', component:  SgcoHomeComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent },
    { path: 'admin', loadChildren: () => import('../administrador-module/administrador.module').then(lc => lc.AdministradorModule) },
    { path: 'professor', loadChildren: () => import('../professor-module/professor.module').then(lc => lc.ProfessorModule) },
    { path: 'prefeitura', loadChildren: () => import('../prefeitura-module/prefeitura.module').then(lc => lc.PrefeituraModule) }
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
