import {User} from '../models/user';
import {Observable} from 'rxjs';
import {TipoUsuario} from '../enums/tipo-usuario.enum';
import {AuthToken} from '../models/authToken';

export interface IAuthService {

  getUserOauthToken(dadosLogin: User): AuthToken;

  userIsLogged(): boolean;

  getUserLogged(): Observable<User>;

  setUserInformation(user: User);

  getUserInformation(dadosLogin: any, dadosDeAutenticacao: any);

  checkCredentials(tipoUsuario: TipoUsuario): boolean;

  login(dadosLogin: User);

  logout();

}
