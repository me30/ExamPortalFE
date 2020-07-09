import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { ExamService } from 'src/app/_services/exam.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ExamComponent } from '../exam.component';
import { filter } from 'rxjs/operators';
import { Exam } from 'src/app/_models/exam';
import { ExamEditComponent } from '../exam-edit/exam-edit.component';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'createdBy' ,'createdDate', 'actions'];
  searchColumns: string[] = ['name','createdDate'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchKey: string;

  private examComponent = ExamComponent;
  private examEditComponent = ExamEditComponent;

  constructor(private router: Router,
    private examService: ExamService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.examService.getExams().subscribe(users => {
        console.log(users);
        this.listData = new MatTableDataSource(users);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.searchColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });

    });

    this.examService.getExams().subscribe(users => {
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

  public addExams() {
    this.dialog.open(this.examComponent);
  }

  deleteExam(exam: Exam): void {
    this.examService.deleteExam(exam)
      .subscribe(data => {
        console.log(data);
        this.examService.getExams().subscribe(users => {
          this.listData = new MatTableDataSource(users);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
          this.listData.filterPredicate = (data, filter) => {
            return this.searchColumns.some(ele => {
              return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
            });
          };
        });
      });
  };

  edit(exam: Exam) {
    this.dialog.open(this.examEditComponent, {
      data: { examId: exam.id }
    });
  }

}
