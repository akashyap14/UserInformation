import { UserInfoService } from './../services/user-info.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../UserInfo';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit {
  users: User[] =[];
  view: string = 'table';

  constructor(private userInfo: UserInfoService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userInfo.getUserList().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  trackByMethod(index:number, el:any): number {
    return el.id;
  }

  getFullAddress(address: any): string {
    return `${address.street},${address.suite},${address.city},${address.zipcode}`
  }
}
