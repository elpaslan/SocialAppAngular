import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { image } from 'src/app/_models/image';
import { User } from '../../_models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  users: User[];
  public loading = false;
  userParams: any = {};

  constructor(
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.userParams.orderby = 'lastactive';
    // this.userParams.gender = 'female';
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getUsers(null, this.userParams).subscribe(
      (users) => {
        this.loading = false;
        this.users = users;
      },
      (err) => {
        this.loading = false;
        this.alertify.error(err);
      }
    );
  }
}
