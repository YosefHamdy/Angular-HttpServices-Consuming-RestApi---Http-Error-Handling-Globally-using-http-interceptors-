import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../HttpServices/src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../HttpServices/src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  // intialize data object to prevent undefined properties error "type error"
  user: User = { id: 0, fname: '', lname: '', email: '' };
  constructor(
    private userServices: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // 1 : get user id from url
    this.id = this.route.snapshot.paramMap.get('id');
    // 2 : Consume service : GetById

    if (this.id) {
      this.userServices.getById(this.id).subscribe((data) => {
        this.user = data;
        console.log(this.user);
      });
    }
  }
}
