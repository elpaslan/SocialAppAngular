import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('kullanıcı oluşturuldu');
      },
      (error) => {
        this.alertify.error('Bir hata oluştu, daha sonra tekrar deneyiniz.');
      },
      () => {
        this.authService.login(this.model).subscribe(() => {
          this.route.navigate(['/member/edit']);
        });
      }
    );
  }
}
