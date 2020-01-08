import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user : User;

  constructor(private userService : UserService) { }

  ngOnInit() {
    if(this.userService.user != null){
      this.user = this.userService.user;
    }
  }

  get isUser() {
          return this.user = this.userService.user;
      }

}
