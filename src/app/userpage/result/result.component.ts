import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Result } from 'src/app/_models/result';
import { ResultService } from 'src/app/_services/result.service';
import { UserService } from 'src/app/_services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserProfileService } from 'src/app/_services/userProfile.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Exam } from 'src/app/_models/exam';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, AfterViewInit {
 private result: Result = {
    id: undefined,
    user: undefined,
    totalCorrectAnswer: undefined,
    outOff: undefined,
    result: undefined,
    cutOff: undefined,
    exam: undefined,
  };
  imgsrc;
  exam: Exam = {
    id: undefined,
    name: undefined,
    createdBy: undefined,
    createdDate: undefined,
  };
  user: User = {
    id: undefined,
    password: undefined,
    userName: undefined,
    firstName: undefined,
    lastName: undefined,
    role: undefined,
    dob: undefined,
    email: undefined,
    gender: undefined,
    resetToken: undefined
  };

  constructor(
    private resultService: ResultService,
    private userService: UserService,
    public _DomSanitizationService: DomSanitizer,
    private userProfileService: UserProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // Used in modal for close()
    public dialogRef: MatDialogRef<ResultComponent>,
  ) { }

  ngOnInit() {
    this.userProfileService.getUserProfileById(this.userService.user.id)
      .then(data => {
        console.log(data);
        this.imgsrc = data._body
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.fetchRecord();
    }, 200);
  }
  public fetchRecord() {
    console.log(this.data);
    this.result = this.data.result;
    this.exam = this.result.exam;
    this.user = this.userService.user;
  }

  transform() {
    return this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.imgsrc);
  }
}
