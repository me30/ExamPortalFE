import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user : User;

  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit() {
    if(this.userService.user != null){
      this.user = this.userService.user;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this.router = null;
      }
  });
  }

  get isUser() {
          return this.user = this.userService.user;
      }

}
