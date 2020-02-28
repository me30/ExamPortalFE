import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/_services/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  loading = false;
  submitted = false;
  private questionId: number;
  questionForm: FormGroup;
  selectedAnsType: string;
  ansTypes: string[] = ['Text ans', 'Single select', 'Multi select'];
  selectedExam;
  Option1AnsValue: boolean;
  Option2AnsValue: boolean;
  Option3AnsValue: boolean;
  Option4AnsValue: boolean;
  booleanValue: boolean[] = [true, false];



  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
        this.questionForm = this.formBuilder.group({
          question: ['', Validators.required],
          timePerQuestion: ['',Validators.required],
          ansCategory: [''],
          correct_ans: [''],
          option1: [''],
          option2: [''],
          option3: [''],
          option4: [''],
          option1IsAns: [''],
          option2IsAns: [''],
          option3IsAns: [''],
          option4IsAns: [''],
        });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.fetchRecord();
    }, 300);
  }

  get f() { return this.questionForm.controls; }

  public fetchRecord() {

    this.questionId = +this.route.snapshot.paramMap.get('questionId');

    this.questionService.getQuestionById(this.questionId)
      .then(data => {
        this.questionForm = new FormGroup({
          'id': new FormControl(data.id),
          'question': new FormControl(data.question, Validators.required),
          'timePerQuestion': new FormControl(data.timePerQuestion, Validators.required),
          'exam':new FormControl(data.exam),
          'ansCategory': new FormControl(data.ansCategory),
          'correct_ans': new FormControl(data.correct_ans),
          'option1': new FormControl(data.option1),
          'option2': new FormControl(data.option2),
          'option3': new FormControl(data.option3),
          'option4': new FormControl(data.option4),
          'option1IsAns': new FormControl(data.option1IsAns),
          'option2IsAns': new FormControl(data.option2IsAns),
          'option3IsAns': new FormControl(data.option3IsAns),
          'option4IsAns': new FormControl(data.option4IsAns)
        });

        if (data.ansCategory == 'Text ans')
          this.selectedAnsType = this.ansTypes[0];
        else if (data.ansCategory == 'Single select')
          this.selectedAnsType = this.ansTypes[1];
        else
          this.selectedAnsType = this.ansTypes[2];

        this.selectedExam = data.exam.name;

        if (data.option1IsAns == true)
          this.Option1AnsValue = this.booleanValue[0];
        else
          this.Option1AnsValue = this.booleanValue[1];
      });
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.questionForm.invalid) {
        return;
    }

    if(this.questionForm.controls.ansCategory.value == 'Text ans'){
      this.questionForm.setValue({
        'id': this.questionForm.controls.id.value,
          'question': this.questionForm.controls.question.value,
          'timePerQuestion': this.questionForm.controls.timePerQuestion, 
          'exam':this.questionForm.controls.exam.value,
          'ansCategory': this.questionForm.controls.ansCategory.value,
          'correct_ans': this.questionForm.controls.correct_ans.value,
          'option1': '',
          'option2': '',
          'option3': '',
          'option4': '',
          'option1IsAns': '',
          'option2IsAns': '',
          'option3IsAns': '',
          'option4IsAns': ''
      });
    }else {
      this.questionForm.setValue({
        'id': this.questionForm.controls.id.value,
          'question': this.questionForm.controls.question.value,
          'timePerQuestion': this.questionForm.controls.timePerQuestion,
          'exam':this.questionForm.controls.exam.value,
          'ansCategory': this.questionForm.controls.ansCategory.value,
          'correct_ans': '',
          'option1': this.questionForm.controls.option1.value,
          'option2': this.questionForm.controls.option2.value,
          'option3': this.questionForm.controls.option3.value,
          'option4': this.questionForm.controls.option4.value,
          'option1IsAns': this.questionForm.controls.option1IsAns.value,
          'option2IsAns': this.questionForm.controls.option2IsAns.value,
          'option3IsAns': this.questionForm.controls.option3IsAns.value,
          'option4IsAns': this.questionForm.controls.option4IsAns.value
      });

    }

    this.loading = true;
    this.questionService.updateQuestion(this.questionForm.value)
        .then(
            data => {
                this.router.navigate(['/question/list']);
            },
            error => {
                this.loading = false;
            });
}

}
