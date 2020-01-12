import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {InicioComponent} from './shared/pages/inicio/inicio.component';
import {LoginComponent} from './shared/pages/login/login.component';
import {RecuperarSenhaComponent} from './shared/pages/recuperar-senha/recuperar-senha.component';

const appRoutes: Routes = [
    { path: '', component:  InicioComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent },
    { path: 'admin', loadChildren: () => import('./modules/administrador-module/administrador.module').then(lc => lc.AdministradorModule) },
    { path: 'professor', loadChildren: () => import('./modules/professor-module/professor.module').then(lc => lc.ProfessorModule) },
    { path: 'prefeitura', loadChildren: () => import('./modules/prefeitura-module/prefeitura.module').then(lc => lc.PrefeituraModule) }
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
