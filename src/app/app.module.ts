import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule, MatMenuModule, MatProgressBarModule, MatSnackBarModule} from '@angular/material';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SgcoModule} from './modules/home-module/sgco.module';
import {AdministradorRoutingModule} from './modules/administrador-module/administrador-routing.module';
import {PrefeituraRoutingModule} from './modules/prefeitura-module/prefeitura-routing.module';
import {ProfessorRoutingModule} from './modules/professor-module/professor-routing.module';
import {AuthService} from './core/service/auth.service';
import {HeaderComponent} from './core/components/header/header.component';
import {ProgressLoaderComponent} from './core/components/progress-loader/progress-loader.component';
import {LoaderInterceptor} from './core/interceptors/loader.interceptor';

import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressLoaderComponent
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
    MatSnackBarModule,
    ExtendedModule,
    AppRoutingModule,
    SgcoModule,
    AdministradorRoutingModule,
    PrefeituraRoutingModule,
    ProfessorRoutingModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
