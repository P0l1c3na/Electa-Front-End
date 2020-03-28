import {User} from '../models/user';
import {Observable} from 'rxjs';
import {TipoUsuario} from '../enums/tipo-usuario.enum';

export interface IAuthService {

  getUserOauthToken();

  userIsLogged(): boolean;

  getUserLogged(): Observable<User>;

  setUserInformation(user: User);

  getUserInformation(dadosLogin: any, dadosDeAutenticacao: any);

  checkCredentials(tipoUsuario: TipoUsuario): boolean;

  login(dadosLogin: User);

  logout();

}
