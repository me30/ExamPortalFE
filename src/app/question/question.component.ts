import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../_services/question.service';
import { ExamService } from '../_services/exam.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    @ViewChild('selectExamForm', { static: true }) selectExamForm: NgForm;
    loading = false;
    submitted = false;
    booleanValue: string[] = ['true', 'false'];
    exams$;
    examid;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private examService: ExamService) {}

    getExams() {
        return this.examService.getExams();
    }
    ngOnInit() {
        this.exams$ = this.getExams();
    }

    get f() { return this.selectExamForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.selectExamForm.invalid) {
            return;
        }

        this.loading = true;
        this.examService.getExamById(this.selectExamForm.value.examid)
        .subscribe(
            data => {
               this.examService.selectedExam = data;
               this.router.navigate(['/question/add']);  
            },
            error => {
                this.loading = false;
            });


    }

}
