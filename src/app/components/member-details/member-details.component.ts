import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/_models/user';
import { MessageCreateComponent } from '../messages/message-create/message-create.component';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  user: User;
  followText: string = 'Takip Et';

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.user = data.user;
    });
  }

  followUser(userId: number) {
    this.userService
      .followUser(this.authService.decodedToken.nameid, userId)
      .subscribe(
        (result) => {
          this.alertify.success(
            this.user.name + ' kullanıcısını takip ediyorsunuz'
          );
          this.followText = 'Takip Ediyorsunuz';
        },
        (err) => {
          this.alertify.error(err);
        }
      );
  }

  openSendMessageModel() {
    const modalRef = this.modalService.open(MessageCreateComponent);
    modalRef.componentInstance.recipientId = this.user.id;
  }
}
