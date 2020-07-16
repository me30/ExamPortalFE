import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/_services/user.service';
import { ExamAssignService } from 'src/app/_services/examAssign.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['exam', 'assignBy' ,'dateOfAssign', 'actions'];
  searchColumns: string[] = ['exam.name','assignBy.firstName'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchKey: string;

  constructor(private userService: UserService,
    private examAssignService: ExamAssignService) { }

  ngOnInit() {
   
    this.examAssignService.getExamAssignByUserId(this.userService.user)
    .subscribe(examsAssign => {
      this.listData = new MatTableDataSource(examsAssign);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {
        return this.searchColumns.some(ele => {
          return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        });
      };
    });

  }

}
