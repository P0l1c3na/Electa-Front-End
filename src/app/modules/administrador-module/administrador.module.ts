import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AdministradorRoutingModule} from './administrador-routing.module';
import {AdministradorHomeComponent} from './pages/administrador/administrador-home/administrador-home.component';
import {PrefeituraAdmComponent} from './pages/prefeitura/prefeitura-home/prefeitura-adm.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [AdministradorHomeComponent, PrefeituraAdmComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatRippleModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule
  ],
  exports: []
})
export class AdministradorModule {
}
