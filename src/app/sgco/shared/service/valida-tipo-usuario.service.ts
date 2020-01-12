import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaTipoUsuarioService {

  constructor() { }

  retornaTipoUsuario(login: string) {
    if (login.length === 11) {
      return 'professor';
    } else if (login.length >= 14 && login.length <= 18) {
      return 'prefeitura';
    } else if (login.length >= 1 && login.length <= 4) {
      return 'secretario';
    }  else if (login.length >= 5 && login.length <= 10) {
      return 'aluno';
    } else {
      return 'administrador';
    }

  }
}
