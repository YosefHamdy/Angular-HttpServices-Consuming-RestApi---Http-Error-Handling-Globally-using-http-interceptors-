import { Injectable } from '@angular/core';
import { User } from '../../../../HttpServices/src/app/models/user';
import { DataService } from '../../../../HttpServices/src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends DataService<User> {
  constructor(http: HttpClient) {
    // pass URL to baseServices
    super('http://localhost:4200/users', http);
  }
}
