import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {IAuthService} from '../intefaces/i-auth-service';
import {User} from '../models/user';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements IAuthService {

  private user: User;

  private userSubject: BehaviorSubject<User>;

  constructor(private  httpClient: HttpClient) {
    this.logout();
    const savedUser: User = JSON.parse(localStorage.getItem(environment.auth_key_storage)) || [];
    this.userSubject = new BehaviorSubject<User>(savedUser);

    this.userSubject.subscribe((user) => {
      localStorage.setItem(environment.auth_key_storage, JSON.stringify(user));
    });
  }

  checkCredentials() {
  }

  getUserInformation(dadosLogin: any, dadosDeAutenticacao: any) {
    const headers =
      new HttpHeaders({
        'Content-type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${dadosDeAutenticacao.access_token}`
      });

    this.httpClient.post(`${environment.api_url}usuario`, dadosLogin, {headers})
      .pipe(take(1))
      .subscribe((dados: any) => {
          this.user = new User();
          this.user.authToken = dadosDeAutenticacao;
          this.user.tipoUsuario = dadosLogin.tipoUsuario;
          this.user.login = dadosLogin.login;
          this.user.senha = dadosLogin.senha;
          this.user.nome = dados.nome;
          this.user.email = dados.email;
          this.setUserInformation(this.user);

        }, err => alert('Usuário não encontrado! ' + err)
      );
  }

  getUserOauthToken() {
    return this.user.authToken.access_token;
  }

  getUserLogged(): Observable<User> {
    return this.userSubject.asObservable();
  }

  login(dadosLogin: User) {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', dadosLogin.login);
    params.append('password', dadosLogin.senha);

    const authorization = 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret);

    const headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: authorization
      });

    this.httpClient.post(`${environment.api_url}oauth/token`,
      params.toString(), {headers})
      .subscribe(
        dadosDeAutenticacao => {
          this.getUserInformation(dadosLogin, dadosDeAutenticacao);
          console.log(dadosDeAutenticacao);
        },
        err => alert('Senha ou login inválidos.'));
  }

  setUserInformation(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    localStorage.clear();
    this.userSubject.next(undefined);
  }

  userIsLogged(): boolean {
    return true;
  }

}
