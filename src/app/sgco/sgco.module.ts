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

import { SgcoRoutingModule } from './sgco-routing.module';
import { LoginComponent } from './shared/pages/login/login.component';
import {InicioComponent} from './shared/pages/inicio/inicio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecuperarSenhaComponent } from './shared/pages/recuperar-senha/recuperar-senha.component';
import {FlexModule} from '@angular/flex-layout';
import {AdministradorModule} from './modules/administrador-module/administrador.module';

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
  ]
})
export class SgcoModule { }
