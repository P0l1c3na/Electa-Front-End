import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule} from '@angular/router';

import { SgcoRoutingModule } from './sgco-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {TopBarComponent} from './pages/top-bar/top-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent,
    TopBarComponent,
    LoginComponent
  ],
  exports: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    RouterModule,
    SgcoRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ]
})
export class SgcoModule { }
