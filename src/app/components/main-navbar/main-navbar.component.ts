import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
})
export class MainNavbarComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('login başarılı');
        this.router.navigate(['/members']);
      },
      (error) => {
        this.alertify.error('Hatalı kullanıcı yada şifre');
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.warning('logout');
    this.router.navigate(['/home']);
  }
}
