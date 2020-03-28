import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [

  { path: '', redirectTo: '/sgco-home', pathMatch: 'full' },
  { path: 'sgco-home',
    loadChildren: () => import('./modules/home-module/sgco.module').then(m => m.SgcoModule)}
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
  ],
})
export class AppRoutingModule {
}
