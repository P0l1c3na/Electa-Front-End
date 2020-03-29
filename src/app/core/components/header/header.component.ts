import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {User} from '../../models/user';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getUserLogged().subscribe(usuario => {
      this.user = new User();
      this.user = usuario;
      console.log(this.user);
    });
  }

  logout() {
    this.authService.logout();
  }


}
