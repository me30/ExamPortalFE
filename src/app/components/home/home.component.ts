import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { RoleName } from 'src/app/_models/role';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    constructor( private router: Router,
        private userService: UserService) { }
    ngOnInit() {
        if(this.userService.user.role === RoleName.Admin){
            this.router.navigate(['/admin']);
        }else{
            this.router.navigate(['/dashboard']);
        }
    }

    logout() {          
        sessionStorage.removeItem("loggedUser");
        this.userService.user = null;
        this.router.navigate(['/login']);
      }
}