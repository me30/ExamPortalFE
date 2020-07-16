import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ExamService } from 'src/app/_services/exam.service';

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
