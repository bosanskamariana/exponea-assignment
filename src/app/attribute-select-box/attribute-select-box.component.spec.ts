import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AttributeSelectBoxComponent } from './attribute-select-box.component';
describe('AttributeSelectBoxComponent', () => {
  let component: AttributeSelectBoxComponent;
  let fixture: ComponentFixture<AttributeSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeSelectBoxComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSelectBoxComponent);
    component = fixture.componentInstance;
    component.attribute = {
      id: '_jxmyt5i2i8gfgrbmo', type: 'text', name: 'number of items', operator: 'grater than', value: 'ttttt', value2: ''
    };
    component.event = {
      attributes: [{ id: '_jxmyt5i2i8gfgrbmo', type: 'text', name: 'number of items', operator: 'grater than', value: 'ttttt', value2: '' }
      ], name: 'python_script_event', id: '_jxlz0iuwybqxouwrf'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
