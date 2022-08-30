import { Component, OnInit } from '@angular/core';
import { User } from '../../../../HttpServices/src/app/models/user';
import { UserService } from '../../../../HttpServices/src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'fname',
    'lname',
    'email',
    'details',
    'action',
  ];
  dataSource: User[] = [];
  id: any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // here observer in angular is lazy so we should use subscribe to get data
    this.userService.get().subscribe(
      (data) => {
        this.dataSource = data as any;

        console.log(this.dataSource);
        // error handling in component
      } /*,
      (error) => {
        console.error('Service unavailble in user');
      }*/
    );
  }

  delete(id: any) {
    if (confirm('Are you sure to delete this !')) {
      this.userService.delete(id).subscribe((data: User) => {
        this.router.navigateByUrl('/home');
      });
    }
  }

  
}
