import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OperatorSelectBoxComponent } from './operator-select-box.component';

describe('OperatorSelectBoxComponent', () => {
  let component: OperatorSelectBoxComponent;
  let fixture: ComponentFixture<OperatorSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorSelectBoxComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
