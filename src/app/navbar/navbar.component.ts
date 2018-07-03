import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: Observable<UserModel>;
  email = '';


  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.user = this.authService.user;
    console.log(`User`);
    this.user.subscribe(user => {
      console.log(`User`, user);
      this.email = user.email;

    });
  }

  logout() {
    this.authService.logout();
  }

  login(): void {

  }

}
