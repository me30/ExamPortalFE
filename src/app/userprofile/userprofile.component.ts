import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router, NavigationEnd } from '@angular/router';
import { UsereditprofileComponent } from '../usereditprofile/usereditprofile.component';
import { MatDialog } from '@angular/material';
import { RoleName } from '../_models/role';
import { UserProfileService } from '../_services/userProfile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UpdateImageComponent } from './update-image/update-image.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user: User;
  imgsrc;

  private usereditprofileComponent = UsereditprofileComponent;
  private upadteImageComponent = UpdateImageComponent;

  constructor(private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    private userProfileService: UserProfileService,
    public _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    if (this.userService.user != null && this.userService.user.role === RoleName.Admin) {
       this.user = this.userService.user;
    }else{
      this.user = this.userService.user;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router = null;
      }
    });
    this.userProfileService.getUserProfileById(this.userService.user.id)
    .subscribe(data => { 
      console.log(data);
      this.imgsrc = data._body
    });
  }

  transform(){
    return this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.imgsrc);
}

  get isAdmin() {
    return this.user && this.user.role === RoleName.Admin;
  }

  get isUser() {
    return this.user && this.user.role === RoleName.User;
  }
  public editProfile() {
    this.dialog.open(this.usereditprofileComponent,{height:'500px',width:'700px'});
  }

  public uploadImage(){
    this.dialog.open(this.upadteImageComponent);
  }

}
