import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  userDisplayName = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userDisplayName = this.userService.user.userName;
  }

}
