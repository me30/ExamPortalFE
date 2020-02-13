import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { RoleName } from '../_models/role';
import { filter } from 'rxjs/operators';
import { RouterEvent, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Subject, timer, Subscription } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  user: User;
  token: String;
  dtTrigger: Subject<any> = new Subject();
  firstName: String;
  lastName: String;
  navlink: boolean = false;

  minutesDisplay = 0;
  secondsDisplay = 0;

  //endTime = to same as BE's jwtExpirationInMs
  endTime = 1;

  unsubscribe$: Subject<void> = new Subject();
  timerSubscription: Subscription;

  constructor(private userService: UserService,
    private router: Router,
    private authService: AuthService) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.token = this.userService.token;
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {

      this.userService.getUserbyToken(this.token)
        .then(data => {
          this.user = data;
          this.firstName = data.firstName;
          this.lastName = data.lastName;
        });
    });
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
