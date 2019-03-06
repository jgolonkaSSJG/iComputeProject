import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMultipleComponent } from './quiz-multiple.component';

describe('QuizMultipleComponent', () => {
  let component: QuizMultipleComponent;
  let fixture: ComponentFixture<QuizMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
