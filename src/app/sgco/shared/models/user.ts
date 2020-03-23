import {TipoUsuario} from '../enums/tipo-usuario.enum';
import {AuthToken} from './authToken';

export class User {
  nome: string;
  email: string;
  login: string;
  dataDeCadastro: Date;
  senha: string;
  ativo: boolean;
  authToken: AuthToken;
  tipoUsuario: TipoUsuario;

  constructor() {
  }
}
