import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User = new User();
  role = '';
  user : User;
    constructor(
        private router: Router,
        private userService : UserService
    ) {
     this.currentUser.userName = sessionStorage.getItem('loggedUser');
     this.role = sessionStorage.getItem('loggedUserRole');
    }

  //  ngOnInit() {
  //        this.user = this.userService.user;
  //  }

   get isUser() {
    return this.user = this.userService.user;
  }

    logout() {          
      sessionStorage.removeItem("loggedUser");
      this.userService.user = null;
      this.router.navigate(['/login']);
    }
}