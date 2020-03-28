import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {IAuthService} from '../intefaces/i-auth-service';
import {User} from '../models/user';
import {take} from 'rxjs/operators';
import {TipoUsuario} from '../enums/tipo-usuario.enum';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageHandlerService} from './message-handler.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements IAuthService {

  private user: User;

  private userSubject: BehaviorSubject<User>;

  constructor(private  httpClient: HttpClient,
              private messageHandlerService: MessageHandlerService) {
    const savedUser: User = JSON.parse(localStorage.getItem(environment.auth_key_storage)) || [];
    this.userSubject = new BehaviorSubject<User>(savedUser);

    this.userSubject.subscribe((user) => {
      this.user = user;
      localStorage.setItem(environment.auth_key_storage, JSON.stringify(user));
    });
  }

  checkCredentials(tipoUsuario: TipoUsuario): boolean {
    return this.user.tipoUsuario === tipoUsuario;
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
          const user = new User();
          user.authToken = dadosDeAutenticacao;
          user.tipoUsuario = dadosLogin.tipoUsuario;
          user.login = dadosLogin.login;
          user.senha = dadosLogin.senha;
          user.nome = dados.nome;
          user.email = dados.email;
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
      .pipe(take(1))
      .subscribe(
        dadosDeAutenticacao => {
          this.getUserInformation(dadosLogin, dadosDeAutenticacao);
          console.log(dadosDeAutenticacao);
          this.messageHandlerService.showMessageSucessfull('Acesso permitido!');
        },
        (err: HttpErrorResponse) => {
          this.messageHandlerService.showStatusHttpMessage(err.message, err.status);
        });
  }

  setUserInformation(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    localStorage.clear();
    this.userSubject.next(null);
  }

  userIsLogged(): boolean {
    if (this.user == null) {
      return false;
    } else {
      return this.user.authToken.expires_in >= (Date.now() / 1000);
    }
  }

}
