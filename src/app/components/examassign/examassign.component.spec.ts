import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamassignComponent } from './examassign.component';

describe('ExamassignComponent', () => {
  let component: ExamassignComponent;
  let fixture: ComponentFixture<ExamassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
