import {Component, OnInit} from '@angular/core';
import {ValidaTipoUsuarioService} from '../../../shared/service/valida-tipo-usuario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/service/auth.service';
import {TipoUsuario} from '../../../shared/enums/tipo-usuario.enum';
import {User} from '../../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isActive = false;
  validaTipoUsrService: ValidaTipoUsuarioService;
  dadosLogin: FormGroup;

  constructor( private validaTipoUsr: ValidaTipoUsuarioService,
               private formBuilder: FormBuilder,
               private router: Router,
               private authService: AuthService) {
   this.validaTipoUsrService = validaTipoUsr;
  }

  ngOnInit() {
    this.dadosLogin = this.formBuilder.group({
        login: ['', Validators.required],
        senha: ['', Validators.required]
  });
  }

  showPassword() {
    this.isActive = !this.isActive;
  }

  fazerLogin() {
    const user: User = this.dadosLogin.value;
    const tipoUsr = this.validaTipoUsrService.retornaTipoUsuario(this.dadosLogin.value.login);

    switch (tipoUsr) {
      case TipoUsuario.administrador:
        user.tipoUsuario = tipoUsr;
        this.authService.login(user);
        // this.router.navigate(['admin']);
        break;
      case TipoUsuario.prefeitura:
        break;
      case TipoUsuario.professor:
        break;
    }
  }
}
