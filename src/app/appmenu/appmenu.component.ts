import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { RoleName } from '../_models/role';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  user : User;
  token: String;
  constructor(private userService : UserService) {
    this.ngOnInit();
   }

  ngOnInit() {
   this.token = this.userService.token;
   this.user = this.userService.user;
  }

  get isAdmin() {
    return this.user && this.user.role === RoleName.Admin;
  }

  get isUser() {
    return this.user && this.user.role === RoleName.User;
  }
}
