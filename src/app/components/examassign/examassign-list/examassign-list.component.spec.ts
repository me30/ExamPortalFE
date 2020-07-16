import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamassignListComponent } from './examassign-list.component';

describe('ExamassignListComponent', () => {
  let component: ExamassignListComponent;
  let fixture: ComponentFixture<ExamassignListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamassignListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamassignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
