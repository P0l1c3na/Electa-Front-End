import {Component, OnInit} from '@angular/core';
import {ValidaTipoUsuarioService} from '../../service/valida-tipo-usuario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {TipoUsuario} from '../../enums/tipo-usuario.enum';
import {User} from '../../models/user';

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
        login: ['phaelpolicena@gmail.com', Validators.required],
        senha: ['123456', Validators.required]
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

