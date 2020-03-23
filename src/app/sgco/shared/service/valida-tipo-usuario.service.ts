import {Injectable} from '@angular/core';
import {TipoUsuario} from '../enums/tipo-usuario.enum';

@Injectable()
export class ValidaTipoUsuarioService {

  constructor() {
  }

  public retornaTipoUsuario(login: string) {
    if (login.length === 14 && login.substring(1, 4).endsWith('.')) {
      return TipoUsuario.professor;
    } else if (login.length > 14 && login.length <= 18) {
      return TipoUsuario.prefeitura;
    } else if (login.length >= 1 && login.length <= 4) {
      return TipoUsuario.coordenador;
    } else if (login.length >= 5 && login.length <= 7) {
      return TipoUsuario.aluno;
    } else if (login.length === 9) {
      return TipoUsuario.psicologo;
    } else {
      return TipoUsuario.administrador;
    }
  }
}
