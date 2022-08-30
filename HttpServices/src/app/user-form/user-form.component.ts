import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../HttpServices/src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../HttpServices/src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  actionBtn = 'Save';
  id: any;
  // intialize data object to prevent undefined properties error "type error"
  user: User = { id: 0, fname: '', lname: '', email: '' };
  constructor(
    private userServices: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // 1 : get user id from url
    this.id = this.route.snapshot.paramMap.get('id');
    // 2 : Consume service : GetById

    if (this.id) {
      this.actionBtn = 'Update';
      this.userServices.getById(this.id).subscribe((data) => {
        this.user = data;
        console.log(this.user);
      });
    }
  }
  save() {
    // if there is id in url then update
    if (this.id) {
      //edit put
      this.actionBtn = 'Update';
      this.userServices.put(this.user.id, this.user).subscribe((data: User) => {
        this.router.navigateByUrl('/home');
      });
    } else {
      // add
      this.actionBtn = 'Save';
      this.userServices.post(this.user).subscribe((data: User) => {
        this.router.navigateByUrl('/home');
      });
    }
  }
  delete() {
    if (this.id) {
      if (confirm('Are you sure to delete this !')) {
        this.userServices.delete(this.user.id).subscribe((data: User) => {
          this.router.navigateByUrl('/home');
        });
      }
    }
  }
}
