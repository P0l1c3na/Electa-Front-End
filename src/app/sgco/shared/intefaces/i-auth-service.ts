import {User} from '../models/user';
import {Observable} from 'rxjs';

export interface IAuthService {

  getUserOauthToken();

  userIsLogged(): boolean;

  getUserLogged(): Observable<User>;

  setUserInformation(user: User);

  getUserInformation(dadosLogin: any, dadosDeAutenticacao: any);

  checkCredentials();

  login(dadosLogin: User);

  logout();

}
