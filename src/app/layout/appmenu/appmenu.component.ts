import { Component, OnInit} from '@angular/core';
import { filter } from 'rxjs/operators';
import { RouterEvent, NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { UserProfileService } from 'src/app/_services/userProfile.service';
import { RoleName } from 'src/app/_models/role';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  user: User =  {
    id: undefined,
    password: undefined,
    firstName: undefined,
    lastName: undefined,
    role: undefined,
    dob: undefined,
    email: undefined,
    gender: undefined,
    resetToken : undefined
  };
  token: String;
  dtTrigger: Subject<any> = new Subject();
  firstName: String;
  lastName: String;
  navlink: boolean = false;
  public imgsrc: any;
  srcData: SafeResourceUrl;

  minutesDisplay = 0;
  secondsDisplay = 0;

  //endTime = to same as BE's jwtExpirationInMs
  endTime = 1;

  unsubscribe$: Subject<void> = new Subject();
  timerSubscription: Subscription;

  constructor(private userService: UserService,
    private router: Router,
    private userProfileService: UserProfileService,
    public _DomSanitizationService: DomSanitizer
  ) {
    this.ngOnInit();
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {
    this.token = this.userService.token;
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {

      this.userService.getUserbyToken(this.token)
        .subscribe(data => {
          this.user = data;
          this.firstName = data.firstName;
          this.lastName = data.lastName;
        });
      this.userProfileService.getUserProfileById(this.user.id)
        .subscribe(data => {
          this.imgsrc = data._body
        });
    });
    
    this.userProfileService.getUserProfileById(this.user.id)
      .subscribe(data => {
        if(data != null)
        this.imgsrc = data._body
      });
  }

  transform() {
    return this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.imgsrc);
  }

  get isAdmin() {
    return this.user && this.user.role === RoleName.Admin;
  }

  get isUser() {
    return this.user && this.user.role === RoleName.User;
  }

  clickEvent() {
    this.navlink = !this.navlink;
  }
}
