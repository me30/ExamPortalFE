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
  booleanValue: string[] = ['True', 'False'];
  exams$;
  selectedAnsType: string;
  ansTypes: string[] = ['Text ans', 'Single select', 'Multi select'];
  selectedExam;
  selectedOption1;
  selectedOption2;
  selectedOption3;
  selectedOption4;


  constructor(private formBuilder: FormBuilder,
      private router: Router,
      private questionService: QuestionService,
      private examService: ExamService,
      private ngZone: NgZone) { }


  getExams() {
      return this.examService.getExams();
  }
  ngOnInit() {
      this.selectedExam = this.examService.selectedExam.name
      this.selectedAnsType = this.ansTypes[0];
      this.selectedOption1 = this.booleanValue[1];
      this.selectedOption2 = this.booleanValue[1];
      this.selectedOption3 = this.booleanValue[1];
      this.selectedOption4 = this.booleanValue[1];
      this.exams$ = this.getExams();
      this.createQuetionForm = this.formBuilder.group({
          question: ['', Validators.required],
          timePerQuestion: ['',Validators.required],
          ansCategory: [''],
          correct_ans: [''],
          option1: [''],
          option2: [''],
          option3: [''],
          option4: [''],
          option1IsAns: [''],
          option2IsAns: [''],
          option3IsAns: [''],
          option4IsAns: [''],
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
                  this.router.navigate(['/question/list']);
              },
              error => {
                  this.loading = false;
              });
  }

}
