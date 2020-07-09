import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator, MatCheckboxChange, MatOptionSelectionChange } from '@angular/material';
import { Exam } from 'src/app/_models/exam';
import { User } from 'src/app/_models/user';
import { ExamsAssign } from 'src/app/_models/examsassign';
import { UserService } from 'src/app/_services/user.service';
import { ExamService } from 'src/app/_services/exam.service';
import { ExamAssignService } from 'src/app/_services/examAssign.service';

@Component({
  selector: 'app-examassign-list',
  templateUrl: './examassign-list.component.html',
  styleUrls: ['./examassign-list.component.css']
})
export class ExamassignListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'userName', 'email'];
  searchColumns: string[] = ['firstName', 'lastName', 'gender', 'userName', 'email'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchKey: string;
  exams$;
  myModel = false;
  selectedExam;
  selectedUsers: User[] = [];
  examAssign: ExamsAssign = {
    id: undefined,
    assignTo: undefined,
    description: undefined,
    exam: undefined,
    dateOfAssign: undefined,
    assignBy: undefined,
    result: undefined
  };

  constructor(private userService: UserService,
    private examService: ExamService,
    private examAssignService: ExamAssignService,
    private router: Router) { }

  getExams() {
    return this.examService.getExams();
  }

  ngOnInit() {
    this.selectedExam = this.examService.selectedExam.name
    this.userService.getUserForExamAssign(this.examService.selectedExam.id).subscribe(users => {
      this.listData = new MatTableDataSource(users);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {
        return this.searchColumns.some(ele => {
          return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        });
      };
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  getUserById(event: MatCheckboxChange, user: User) {
    if (event.checked) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers.pop();
    }
  }

  onSubmit() {
  
    this.examAssign.assignBy = this.userService.user;
    this.examAssign.dateOfAssign = Date.now();
    this.examAssign.exam = this.examService.selectedExam;
    this.selectedUsers.forEach(user => {
      this.examAssign.assignTo = user;
      this.examAssignService.examAssign(this.examAssign)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/examassign']);
        });
    });
  }

}
