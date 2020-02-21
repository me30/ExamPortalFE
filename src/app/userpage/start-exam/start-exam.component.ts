import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamAssignService } from 'src/app/_services/examAssign.service';
import { QuestionService } from 'src/app/_services/question.service';
import { Question } from 'src/app/_models/question';
import { ExamsAssign } from 'src/app/_models/examsassign';
import { Exam } from 'src/app/_models/exam';
import { ExamConfig } from 'src/app/_models/exam-config';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {

  userExamForm: FormGroup;
  exam_id;
  exam: Exam;
  questions: Question[] = [];
  selectedAnsType: string;
  ansTypes: string[] = ['Text ans', 'Single select', 'Multi select'];

  mode = 'exam';
  config: ExamConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  
    'duration': 300,  
    'pageSize': 1,
    'requiredAll': false,  
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

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

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private questionService: QuestionService,
    private examAssignService: ExamAssignService,
    private route: ActivatedRoute) { }

  ngOnInit() {
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
            this.duration = this.parseTime(this.config.duration);
            this.mode = 'exam';
          })
      });
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      // this.onSubmit();
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
    }
  }
}
