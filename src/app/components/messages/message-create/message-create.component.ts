import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css'],
})
export class MessageCreateComponent implements OnInit {
  @Input() recipientId: number;
  message: any = {};

  constructor(
    private activeModal: NgbActiveModal,
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.recipientId);
  }

  closeModal() {
    this.activeModal.close();
  }

  sendMessage() {
    this.message.recipientId = this.recipientId;

    this.userService
      .sendMessage(this.authService.decodedToken.nameid, this.message)
      .subscribe(
        (result) => {
          console.log(result);
          this.alertify.success('message has been sent');
          this.activeModal.close();
          this.router.navigate(['/messages']);
        },
        (err) => {
          this.alertify.error(err);
        }
      );
  }
}
