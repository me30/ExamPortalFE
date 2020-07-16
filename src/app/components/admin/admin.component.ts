import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'email', 'actions'];
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    searchKey: string;
    searchColumns: string[] = ['email'];
    constructor(private router: Router,
        private userService: UserService) { }
        

    ngOnInit() {

        this.userService.getOnlyUsers().subscribe(users => {
            users.forEach(user => {
                if (user.firstName == null ) { 
                    this.listData = new MatTableDataSource(users);
                    this.listData.sort = this.sort;
                    this.listData.paginator = this.paginator;
                    this.listData.filterPredicate = (data, filter) => {
                        return this.searchColumns.some(ele => {
                            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
                        });
                    };
                }else {
                    this.listData = new MatTableDataSource(users);
                    this.listData.sort = this.sort;
                    this.listData.paginator = this.paginator;
                    this.listData.filterPredicate = (data, filter) => {
                        return this.displayedColumns.some(ele => {
                            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
                        });
                    };
                }
            });    
        });
    }

    deleteUser(user: User): void {
        this.userService.deleteUser(user)
            .subscribe(data => {
                this.userService.getOnlyUsers().subscribe(users => {
                    this.listData = new MatTableDataSource(users);
                    this.listData.sort = this.sort;
                    this.listData.paginator = this.paginator;
                    this.listData.filterPredicate = (data, filter) => {
                        return this.displayedColumns.some(ele => {
                            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
                        });
                    };
                });
            });
    };

    edit(user: User) {
        this.router.navigate(['/user/edit', user.id]);
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }

    applyFilter() {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    }
}