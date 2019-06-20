import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSelectBoxComponent } from './attribute-select-box.component';

describe('AttributeSelectBoxComponent', () => {
  let component: AttributeSelectBoxComponent;
  let fixture: ComponentFixture<AttributeSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
