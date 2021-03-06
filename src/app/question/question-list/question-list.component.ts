import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { QuestionService } from 'src/app/_services/question.service';
import { Question } from 'src/app/_models/question';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/_services/exam.service';
import { MatOptionSelectionChange } from '@angular/material';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['question', 'ansCategory', 'correct_ans', 'option1', 'option2', 'option3', 'option4', 'actions'];
  searchColumns: string[] = ['question'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  exams$;

  constructor(private questionService: QuestionService,
    public dialog: MatDialog,
    private router: Router,
    private examService: ExamService) { }

  getExams() {
    return this.examService.getExams();
  }

  ngOnInit() {
    this.exams$ = this.getExams();
    this.questionService.getAllQuestions().then(questions => {
      this.listData = new MatTableDataSource(questions);
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

  edit(question: Question) {
    this.router.navigate(['/question/edit', { questionId: question.id }]);
  }

  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question)
      .then(data => {
        console.log(data);
        this.questionService.getAllQuestions().then(questions => {
          this.listData = new MatTableDataSource(questions);
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

  getAllQuestions(event: MatOptionSelectionChange) {
    if (event.source.selected) {
      this.questionService.getAllQuestions().then(questions => {
        this.listData = new MatTableDataSource(questions);
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

  getQuestionByExamId(event: MatOptionSelectionChange, examId: number) {
    if (event.source.selected) {
      this.questionService.getQuestionsByExamId(examId).then(questions => {
        this.listData = new MatTableDataSource(questions);
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
}