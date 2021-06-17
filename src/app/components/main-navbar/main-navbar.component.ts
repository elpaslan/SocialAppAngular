import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
})
export class MainNavbarComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('Login başarılı');
      },
      (error) => {
        console.log('Login hatalı');
      }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout');
  }
}
