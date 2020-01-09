import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {InicioComponent} from './sgco/pages/inicio/inicio.component';



const appRoutes: Routes = [
  {  path: 'inicio',
    loadChildren: () => import('./sgco/sgco.module').then(m => m.SgcoModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
