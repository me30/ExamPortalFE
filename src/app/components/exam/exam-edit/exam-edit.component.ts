import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExamService } from 'src/app/_services/exam.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.css']
})
export class ExamEditComponent implements OnInit, AfterViewInit {

  loading = false;
  submitted = false;
  private examId: number;
  editExamForm: FormGroup;

  constructor(private examService: ExamService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // Used in modal for close()
    public dialogRef: MatDialogRef<ExamEditComponent>,
  ) { }

  ngOnInit() {
    this.editExamForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.fetchRecord();
    }, 200);
  }

  public fetchRecord() {

    this.examId = this.data.examId;

    // Display the data retrieved from the data model to the form model.
    this.examService.getExamById(this.examId)
      .subscribe(data => {
        this.editExamForm = new FormGroup({
          'id': new FormControl(data.id),
          'name': new FormControl(data.name, Validators.required)
        });
      });
  }


  // convenience getter for easy access to form fields
  get f() { return this.editExamForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.editExamForm.invalid) {
      return;
    }

    this.loading = true;
    this.examService.updateExam(this.editExamForm.value)
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
