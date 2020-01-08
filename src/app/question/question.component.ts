import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../_services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  createQuetionForm: FormGroup;
  loading = false;
  submitted = false;
  booleanValue: string[] = ['true', 'false'];

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private questionService: QuestionService) { }

  ngOnInit() {
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
            this.router.navigate(['/que']);
        },
        error => {
            this.loading = false;
        });

}

}
