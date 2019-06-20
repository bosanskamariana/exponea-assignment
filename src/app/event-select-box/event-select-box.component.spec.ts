import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectBoxComponent } from './event-select-box.component';

describe('EventSelectBoxComponent', () => {
  let component: EventSelectBoxComponent;
  let fixture: ComponentFixture<EventSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
