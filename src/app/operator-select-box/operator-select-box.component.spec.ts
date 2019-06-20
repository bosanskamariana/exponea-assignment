import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorSelectBoxComponent } from './operator-select-box.component';

describe('OperatorSelectBoxComponent', () => {
  let component: OperatorSelectBoxComponent;
  let fixture: ComponentFixture<OperatorSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorSelectBoxComponent ]
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
