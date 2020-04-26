import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/_services/userProfile.service';
import { UserService } from 'src/app/_services/user.service';
import { MatDialogRef } from '@angular/material';
import { ExamComponent } from 'src/app/exam/exam.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    private userProfileService: UserProfileService,
    private userService: UserService,
    private router: Router,
    public dialogRef: MatDialogRef<UpdateImageComponent>, // Used in the html component.
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {

    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onUpdateImage() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.userProfileService.uploadFile(this.currentFileUpload, this.userService.user)
      .then(data => {
        this.router.navigateByUrl('/menu', { skipLocationChange: false }).then(() => {
          this.dialogRef.close();
          this.router.navigate(['/profile']);
      });
      });
  }
}
