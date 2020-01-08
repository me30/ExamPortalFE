import { Component, OnInit } from '@angular/core';
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
  constructor(private userService : UserService) { }

  ngOnInit() {
    if(this.userService.user != null){
      this.user = this.userService.user;
      this.token = this.userService.token;
    }
  }

  get isAdmin() {
    return this.userService.user && this.userService.user.role === RoleName.Admin;
  }

  get isUser() {
    return this.userService.user && this.userService.user.role === RoleName.User;
  }

}
