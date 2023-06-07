import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormsComponent } from './common-forms.component';

describe('CommonFormsComponent', () => {
  let component: CommonFormsComponent;
  let fixture: ComponentFixture<CommonFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFormsComponent]
    });
    fixture = TestBed.createComponent(CommonFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
