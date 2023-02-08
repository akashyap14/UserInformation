import { User } from './../UserInfo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    let userApi = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(userApi, {
      headers : {
        'Content-type' : 'application/json'
      }
    })
  }
}
