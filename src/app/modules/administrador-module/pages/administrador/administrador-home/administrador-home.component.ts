import {Component, OnInit} from '@angular/core';
import {User} from '../../../../../core/models/user';
import {AuthService} from '../../../../../core/service/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador-home.component.html',
  styleUrls: ['./administrador-home.component.css']
})
export class AdministradorHomeComponent implements OnInit {
  usuario: User = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getUserLogged().pipe(take(1)).subscribe(user => this.usuario = user);
  }

}
