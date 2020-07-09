import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { ExamService } from '../_services/exam.service';
import { MatTableDataSource, MatSort, MatPaginator, MatCheckboxChange, MatOptionSelectionChange } from '@angular/material';
import { Exam } from '../_models/exam';
import { User } from '../_models/user';
import { ExamsAssign } from '../_models/examsassign';
import { ExamAssignService } from '../_services/examAssign.service';
import { NgForm, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-examassign',
    templateUrl: './examassign.component.html',
    styleUrls: ['./examassign.component.css']
})
export class ExamassignComponent implements OnInit {
    @ViewChild('selectExamForm', { static: true }) selectExamForm: NgForm;
    loading = false;
    submitted = false;
    booleanValue: string[] = ['true', 'false'];
    exams$;
    examid;
   
    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private examService: ExamService
    ) { }


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
               this.router.navigate(['/examAssign/list']);  
            },
            error => {
                this.loading = false;
            });


    }
}