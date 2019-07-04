import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EventSelectBoxComponent } from './event-select-box.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomFilterService } from '../custom-filter.service';
import { FilterEvent } from '../data-model/types';

export class MockFilter extends CustomFilterService {

  events: FilterEvent[] = [{
    attributes: [{ id: '_jxmyt5i2i8gfgrbmo', type: 'text', name: 'number of items', operator: 'grater than', value: 'ttttt', value2: '' },
    { id: '_jxmytbw17i6qao8la', type: 'text', name: 'timestamp', operator: null, value: '', value2: '' },
    { id: '_jxmytfkoq93uwfvtq', type: 'number', name: 'index', operator: 'in between', value: '4', value2: '8' }
    ], name: 'python_script_event', id: '_jxlz0iuwybqxouwrf'
  }];

  addEvent(event: FilterEvent) {
    this.events.push(event);
  }

  removeEvent(eventId: string) {
    this.events = this.events.filter(({ id }) => {
      return eventId !== id;
    });
  }

}

describe('EventSelectBoxComponent', () => {
  let component: EventSelectBoxComponent;
  let fixture: ComponentFixture<EventSelectBoxComponent>;
  let filterService: CustomFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSelectBoxComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, NgSelectModule],
      providers: [{ provide: CustomFilterService, useValue: new MockFilter() }],
    })
      .compileComponents();
    fixture = TestBed.createComponent(EventSelectBoxComponent);
    component = fixture.componentInstance;
    component.counter = 2;
    component.event = {
      attributes: [{ id: '_jxmyt5i2i8gfgrbmo', type: 'text', name: 'number of items', operator: 'grater than', value: 'ttttt', value2: '' }
      ], name: 'python_script_event', id: '_jxlz0iuwybqxouwrf'
    };
    filterService = TestBed.get(CustomFilterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
