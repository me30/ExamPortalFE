import { Component, OnInit } from '@angular/core';
import { ExamAssignService } from 'src/app/_services/examAssign.service';
import { UserService } from 'src/app/_services/user.service';
import { Exam } from 'src/app/_models/exam';
import { ExamsAssign } from 'src/app/_models/examsassign';
import { UserProfileService } from 'src/app/_services/userProfile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  examAssigns: ExamsAssign[] = [];
  imgsrc;

  constructor(
    private examAssignService: ExamAssignService,
    private userService: UserService,
    private userProfileService: UserProfileService,
    public _DomSanitizationService: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
    this.examAssignService.getExamAssignByUserId(this.userService.user)
      .subscribe(examsAssign => {
          this.examAssigns = examsAssign;
      });
    });
    this.examAssignService.getExamAssignByUserId(this.userService.user)
      .subscribe(examsAssign => {
          this.examAssigns = examsAssign;
      });
  }

  transform(){
    return this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.imgsrc);
}
}
