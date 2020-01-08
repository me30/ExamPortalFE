import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { RoleName } from '../_models/role';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  get isAdmin() {
    return this.userService.user && this.userService.user.role === RoleName.Admin;
  }

  get isUser() {
    return this.userService.user && this.userService.user.role === RoleName.User;
  }

  logout() {
    sessionStorage.removeItem("user");
    this.userService.user = null;
    this.router.navigate(['/login']);
  }

}
