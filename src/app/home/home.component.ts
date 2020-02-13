import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { RoleName } from '../_models/role';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    constructor( private router: Router,
        private userService: UserService) { }
    ngOnInit() {
        if(this.userService.user.role === RoleName.Admin){
            this.router.navigate(['/admin']);
        }else{
            this.router.navigate(['/user/dashboard']);
        }
    }

    logout() {          
        sessionStorage.removeItem("loggedUser");
        this.userService.user = null;
        this.router.navigate(['/login']);
      }
}