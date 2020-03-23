import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatDividerModule, MatSidenavModule, MatListModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';

import { SgcoRoutingModule } from './sgco-routing.module';
import { LoginComponent } from './init/pages/login/login.component';
import { InicioComponent } from './init/pages/inicio/inicio.component';
import { RecuperarSenhaComponent } from './init/pages/recuperar-senha/recuperar-senha.component';
import { AdministradorModule } from './modules/administrador-module/administrador.module';
import { ValidaTipoUsuarioService } from './shared/service/valida-tipo-usuario.service';

@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    RecuperarSenhaComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    RouterModule,
    SgcoRoutingModule,
    AdministradorModule
  ],
  providers: [
    ValidaTipoUsuarioService
  ]
})
export class SgcoModule { }
