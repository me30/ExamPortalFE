import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { ExamService } from '../_services/exam.service';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
    createExamForm: FormGroup;
    loading = false;
    submitted = false;
    constructor(private formBuilder: FormBuilder,
        private examService: ExamService,
        private router: Router,
        public dialogRef: MatDialogRef<ExamComponent>, // Used in the html component.
    ) { }

    ngOnInit() {
        this.createExamForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.createExamForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.createExamForm.invalid) {
            return;
        }

        this.loading = true;
        this.examService.createExam(this.createExamForm.value)
            .subscribe(
                data => {
                    this.dialogRef.close();
                    this.router.navigate(['/exam/list']);
                },
                error => {
                    this.loading = false;
                });

    }

}
