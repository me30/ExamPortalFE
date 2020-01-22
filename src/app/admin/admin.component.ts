import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Observable,Subject } from "rxjs";  



@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    users: User[] = [];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    deleteMessage=false;  

    constructor(private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        this.dtOptions = {  
            pageLength: 6,  
            stateSave:true,  
            lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
            processing: true  
          };       
          this.dtTrigger.next();  
        this.userService.getOnlyUsers().then(users => {
            this.users = users
        });
    }

    deleteUser(user: User): void {
        this.userService.deleteUser(user)
            .then(data => { this.deleteMessage=true;  
                this.loadAllUsers();
            } );
    };

    edit(user: User) {
        this.router.navigate(['/user/edit', user.id]);
    }

    private loadAllUsers() {
        this.userService.getOnlyUsers().then(users => {
            this.users = users
        });
    };
}