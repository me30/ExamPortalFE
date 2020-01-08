import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';


@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    users: User[];

    constructor(private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        this.userService.getusers().then(users => {
            this.users = users;
        });
    }

    deleteUser(user: User): void {
        this.userService.deleteUser(user)
            .then(data => data)
        this.loadAllUsers();
    };

    edit(user: User){
        this.router.navigate(['/user/edit',user.id]);
    }

    private loadAllUsers() {
        this.userService.getusers().then(data => this.users = data)
    };

}