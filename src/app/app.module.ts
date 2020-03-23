import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import {SgcoModule} from './sgco/sgco.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatProgressBarModule} from '@angular/material';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { AdministradorRoutingModule } from './sgco/modules/administrador-module/administrador-routing.module';
import { PrefeituraRoutingModule } from './sgco/modules/prefeitura-module/prefeitura-routing.module';
import { ProfessorRoutingModule } from './sgco/modules/professor-module/professor-routing.module';
import {AuthService} from './sgco/shared/service/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    FlexModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule,
    ExtendedModule,
    AppRoutingModule,
    SgcoModule,
    AdministradorRoutingModule,
    PrefeituraRoutingModule,
    ProfessorRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
