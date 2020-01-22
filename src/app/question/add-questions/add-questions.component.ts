import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
import { ExamService } from 'src/app/_services/exam.service';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  createQuetionForm: FormGroup;
  loading = false;
  submitted = false;
  booleanValue: string[] = ['true', 'false'];
  exams$;

  constructor(private formBuilder: FormBuilder,
      private router: Router,
      private questionService: QuestionService,
      private examService: ExamService,
      private ngZone: NgZone) { }


  getExams() {
      return this.examService.getExams();
  }
  ngOnInit() {
      this.exams$ = this.getExams();
      this.createQuetionForm = this.formBuilder.group({
          question: ['', Validators.required],
          ansInText: ['', Validators.required],
          correct_ans: ['', Validators.required],
          option1: ['', Validators.required],
          option2: ['', Validators.required],
          option3: ['', Validators.required],
          option4: ['', Validators.required],
          option1IsAns: ['', Validators.required],
          option2IsAns: ['', Validators.required],
          option3IsAns: ['', Validators.required],
          option4IsAns: ['', Validators.required],
          isMultiSelect: ['', Validators.required],
          isText: ['', Validators.required],
      });
  }

  get f() { return this.createQuetionForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.createQuetionForm.invalid) {
          return;
      }

      this.loading = true;
      this.questionService.createQuestion(this.createQuetionForm.value)
          .then(
              data => {
                  this.createQuetionForm.reset();
                  Object.keys(this.createQuetionForm.controls).forEach(key => {
                      this.createQuetionForm.controls[key].setErrors(null)
                  });
                  this.loading = false;
                  this.router.navigateByUrl('/question/add');
                  
              },
              error => {
                  this.loading = false;
              });

  }

  onFinalSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.createQuetionForm.invalid) {
          return;
      }

      this.loading = true;
      this.questionService.createQuestion(this.createQuetionForm.value)
          .then(
              data => {
                  this.router.navigate(['/admin']);
              },
              error => {
                  this.loading = false;
              });
  }

}
