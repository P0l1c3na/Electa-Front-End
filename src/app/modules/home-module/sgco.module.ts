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
import { LoginComponent } from '../../core/components/login/login.component';
import { RecuperarSenhaComponent } from '../../core/components/recuperar-senha/recuperar-senha.component';
import { AdministradorModule } from '../administrador-module/administrador.module';
import { ValidaTipoUsuarioService } from '../../core/service/valida-tipo-usuario.service';
import { SgcoHomeComponent } from './sgco-home/sgco-home.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecuperarSenhaComponent,
    SgcoHomeComponent
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
