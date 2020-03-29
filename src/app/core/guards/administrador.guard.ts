import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route, Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {TipoUsuario} from '../enums/tipo-usuario.enum';
import {User} from '../models/user';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificaUserLogado();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificaUserLogado();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaUserLogado();
  }

  private verificaUserLogado(): boolean {
    if (this.authService.userIsLogged() && this.authService.checkCredentials(TipoUsuario.administrador)) {
      return true;
    } else {
      let dadosUsuario = new User();
      this.authService.getUserLogged()
        .pipe(take(1))
        .subscribe(dados => {
        dadosUsuario = dados;
      });
      if (dadosUsuario != null && this.authService.checkCredentials(TipoUsuario.administrador)) {
        this.authService.login(dadosUsuario);
        return this.authService.userIsLogged();
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
