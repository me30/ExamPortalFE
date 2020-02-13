import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ExamAssignService } from '../_services/examAssign.service';
import { ExamsAssign } from '../_models/examsassign';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['exam', 'assignBy' ,'dateOfAssign', 'actions'];
  searchColumns: string[] = ['exam.name','assignBy.firstName'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private userService: UserService,
    private examAssignService: ExamAssignService) { }

  ngOnInit() {
   
    this.examAssignService.getExamAssignByUserId(this.userService.user)
    .then(examsAssign => {
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
