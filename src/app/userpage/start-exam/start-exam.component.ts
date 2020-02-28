import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { ExamAssignService } from 'src/app/_services/examAssign.service';
import { QuestionService } from 'src/app/_services/question.service';
import { Question } from 'src/app/_models/question';
import { ExamsAssign } from 'src/app/_models/examsassign';
import { Exam } from 'src/app/_models/exam';
import { Answer } from 'src/app/_models/answer';
import { AnswerService } from 'src/app/_services/answer.service';
import { MatCheckboxChange, MatRadioChange, MatDialog } from '@angular/material';
import { filter } from 'rxjs/operators';
import { UserService } from 'src/app/_services/user.service';
import { ResultService } from 'src/app/_services/result.service';
import { ResultComponent } from '../result/result.component';
import { Result } from 'src/app/_models/result';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit, OnDestroy {

  answerForm: FormGroup;
  resultForm: FormGroup;
  exam_id;
  exam: Exam = {
    id: undefined,
    name: undefined,
    createdBy: undefined,
    createdDate: undefined
  };
  questions: Question[] = [];
  selectedAnsType: string;
  ansTypes: string[] = ['Text ans', 'Single select', 'Multi select'];

  mode = 'exam';
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  options: any[] = [];
  singleOption: any;
  total = 0;
  question: Question;
  indexCount = 0;
  correctAns = 0;
  multi2Ans = 0;
  multi3Ans = 0;
  multi4Ans = 0;
  result: Result = {
    id: undefined,
    user: undefined,
    totalCorrectAnswer: undefined,
    outOff: undefined,
    result: undefined,
    cutOff: undefined,
    exam: undefined,
  };

  private resultComponent = ResultComponent;

  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private questionService: QuestionService,
    private examAssignService: ExamAssignService,
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private userService: UserService,
    private resultService: ResultService) { }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      ans: [''],
      answerIsGiven: [''],
      queations: [''],
      examAttendantDate: [''],
      exam: ['']
    });
    this.resultForm = this.formBuilder.group({
      user: [''],
      totalCorrectAnswer: [''],
      outOff: [''],
      result: [''],
      cutOff: [''],
      exam: [''],
    });
    this.exam_id = this.route.snapshot.paramMap.get('id');
    this.examAssignService.getExamAssignById(this.exam_id)
      .then(examsAssign => {
        this.exam = examsAssign.exam;
        this.questionService.getQuestionsByExamId(examsAssign.exam.id)
          .then(question => {
            this.questions = question;
            this.pager.count = this.questions.length;
            this.startTime = new Date();
            this.ellapsedTime = '00:00';
            this.timer = setInterval(() => { this.tick(); }, 1000);
            this.mode = 'exam';
          })
      });
  }

  get f() { return this.answerForm.controls; }

  tick() {
    const now = new Date();
    let duration = (this.filteredQuestions[0].timePerQuestion) * 60;
    let diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= duration) {
      if (this.indexCount == this.pager.count) {
        this.logout();
      } else {
        this.onSubmit();
        this.goTo(this.pager.index + 1);
        this.startTime = new Date();
        this.ellapsedTime = '00:00';
        this.timer;
      }
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.questions) ?
      this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'exam';
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer;
    }
  }

  onSelect(event: MatCheckboxChange, value) {
    if (event.checked) {
      this.options.push(value);
    } else {
      this.options.pop();
    }
  }

  radioChange(event: MatRadioChange, value) {
    if (event.value) {
      this.singleOption = value;
    }
  }

  onSubmit() {
    this.indexCount++;
    if (this.filteredQuestions[0].ansCategory == "Multi select") {
      if (this.options == null || this.options.length == 0) {
        this.answerForm.setValue({
          'ans': '',
          'answerIsGiven': 'false',
          'queations': this.filteredQuestions[0],
          'examAttendantDate': Date.now(),
          'exam': this.exam
        });
        this.answerService.addAnswer(this.answerForm.value)
          .then(data => {
            this.answerForm.reset();
            if (this.indexCount == this.pager.count) {
              this.logout();
            }
          });
      } else {
        this.options.forEach(value => {

          if (this.filteredQuestions[0].option1IsAns == true && this.filteredQuestions[0].option2IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            }
            console.log("condition-1 = " + this.multi2Ans);
          } if (this.filteredQuestions[0].option1IsAns == true && this.filteredQuestions[0].option3IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            }
            console.log("condition-2 = " + this.multi2Ans);
          } if (this.filteredQuestions[0].option1IsAns == true && this.filteredQuestions[0].option4IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            }
            console.log("condition-3 = " + this.multi2Ans);
          } if (this.filteredQuestions[0].option2IsAns == true && this.filteredQuestions[0].option3IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            }
            console.log("condition-4 = " + this.multi2Ans);
          } if (this.filteredQuestions[0].option2IsAns == true && this.filteredQuestions[0].option4IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            }
            console.log("condition-5 = " + this.multi2Ans);
          } if (this.filteredQuestions[0].option3IsAns == true && this.filteredQuestions[0].option4IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi2Ans = this.multi2Ans + 0.5;
            }
            console.log("condition-6 = " + this.multi2Ans);
          }

          if (this.filteredQuestions[0].option1IsAns == true && this.filteredQuestions[0].option2IsAns && this.filteredQuestions[0].option3IsAns) {
            this.multi2Ans = 0;
            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            }

            console.log("condition-7 = " + this.multi3Ans);
          } if (this.filteredQuestions[0].option1IsAns == true && this.filteredQuestions[0].option3IsAns && this.filteredQuestions[0].option4IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            }

            console.log("condition-8 = " + this.multi3Ans);
          } if (this.filteredQuestions[0].option2IsAns == true && this.filteredQuestions[0].option3IsAns && this.filteredQuestions[0].option4IsAns) {

            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi3Ans = this.multi3Ans + 0.33;
            }

            console.log("condition-9 = " + this.multi3Ans);
          }


          if (this.filteredQuestions[0].option1IsAns == true && this.filteredQuestions[0].option2IsAns && this.filteredQuestions[0].option3IsAns && this.filteredQuestions[0].option4IsAns) {
            this.multi2Ans = 0;
            this.multi3Ans = 0;
            if (value == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
              this.multi4Ans = this.multi4Ans + 0.25;
            } else if (value == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
              this.multi4Ans = this.multi4Ans + 0.25;
            } else if (value == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
              this.multi4Ans = this.multi4Ans + 0.25;
            } else if (value == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
              this.multi4Ans = this.multi4Ans + 0.25;
            }
            console.log("condition-10 = " + this.multi4Ans);
          }

          this.answerForm.setValue({
            'ans': value,
            'answerIsGiven': 'true',
            'queations': this.filteredQuestions[0],
            'examAttendantDate': Date.now(),
            'exam': this.exam
          });
          this.answerService.addAnswer(this.answerForm.value)
            .then(data => {
              this.answerForm.reset();
              if (this.indexCount == this.pager.count) {
                this.logout();
              }
            });
        });
      }
    } else if (this.filteredQuestions[0].ansCategory == "Single select") {
      if (this.singleOption == null || this.singleOption == " " || this.singleOption == "") {
        this.answerForm.setValue({
          'ans': '',
          'answerIsGiven': 'false',
          'queations': this.filteredQuestions[0],
          'examAttendantDate': Date.now(),
          'exam': this.exam
        });
        this.answerService.addAnswer(this.answerForm.value)
          .then(data => {
            this.answerForm.reset();
            if (this.indexCount == this.pager.count) {
              this.logout();
            }
          });
      } else {
        if (this.singleOption == this.filteredQuestions[0].option1 && this.filteredQuestions[0].option1IsAns == true) {
          this.correctAns++;
        } else if (this.singleOption == this.filteredQuestions[0].option2 && this.filteredQuestions[0].option2IsAns == true) {
          this.correctAns++;
        } else if (this.singleOption == this.filteredQuestions[0].option3 && this.filteredQuestions[0].option3IsAns == true) {
          this.correctAns++;
        } else if (this.singleOption == this.filteredQuestions[0].option4 && this.filteredQuestions[0].option4IsAns == true) {
          this.correctAns++;
        }
        this.answerForm.setValue({
          'ans': this.singleOption,
          'answerIsGiven': 'true',
          'queations': this.filteredQuestions[0],
          'examAttendantDate': Date.now(),
          'exam': this.exam
        });
        this.answerService.addAnswer(this.answerForm.value)
          .then(data => {
            this.answerForm.reset();
            if (this.indexCount == this.pager.count) {
              this.logout();
            }
          });
      }
    } else {
      if (this.answerForm.controls.ans.value != null && this.answerForm.controls.ans.value != "") {
        if (this.answerForm.controls.ans.value == this.filteredQuestions[0].correct_ans) {
          this.correctAns++;
        }
        this.answerForm.setValue({
          'ans': this.answerForm.controls.ans.value,
          'answerIsGiven': 'true',
          'queations': this.filteredQuestions[0],
          'examAttendantDate': Date.now(),
          'exam': this.exam
        });
        this.answerService.addAnswer(this.answerForm.value)
          .then(data => {
            this.answerForm.reset();
            if (this.indexCount == this.pager.count) {
              this.logout();
            }
          });
      } else {
        this.answerForm.setValue({
          'ans': '',
          'answerIsGiven': 'false',
          'queations': this.filteredQuestions[0],
          'examAttendantDate': Date.now(),
          'exam': this.exam
        });
        this.answerService.addAnswer(this.answerForm.value)
          .then(data => {
            this.answerForm.reset();
            if (this.indexCount == this.pager.count) {
              this.logout();
            }
          });
      }
    }
  }

  logout() {
    if (this.multi2Ans != 0) {
      this.correctAns = this.multi2Ans + this.correctAns;
    } else if (this.multi3Ans != 0) {
      if(this.multi3Ans == 0.99){
        this.multi3Ans = 1;
      }
      this.correctAns = this.multi3Ans + this.correctAns;
    } else {
      this.correctAns = this.multi4Ans + this.correctAns;
    }
    console.log(this.correctAns);
    this.resultForm.setValue({
      'user': this.userService.user,
      'totalCorrectAnswer': (this.correctAns),
      'outOff': this.pager.count,
      'result': (this.correctAns * 100) / this.pager.count,
      'cutOff': 50,
      'exam': this.exam
    });
    this.resultService.addResult(this.resultForm.value)
      .then(data => {
        this.result.id = data.id;
        this.result.user = data.user;
        this.result.totalCorrectAnswer = data.totalCorrectAnswer;
        this.result.outOff = data.outOff;
        this.result.result = data.result;
        this.result.cutOff = data.cutOff;
        this.result.exam = data.exam;
        console.log(this.result);
      });
    this.indexCount = 0;
    this.router.navigate(['/dashboard']);
    this.showResult();
  }

  public showResult() {
    console.log(this.result);
    this.dialog.open(this.resultComponent, {
      data: {result: this.result},
      height: '500px', width: '400px'
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}