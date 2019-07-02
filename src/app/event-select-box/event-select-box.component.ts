import { Component, OnInit, Input } from '@angular/core';
import events from './../data-model/events';
import { FilterEvent, Attribute } from '../data-model/types';
import { generateID } from './../helpers/id-generator';
@Component({
  selector: 'app-event-select-box',
  templateUrl: './event-select-box.component.html',
  styleUrls: ['./event-select-box.component.scss']
})
export class EventSelectBoxComponent implements OnInit {

  constructor() { }
  eventsList = events;
  selectedEvent: string;

  @Input() event: FilterEvent;
  @Input() counter: number;

  ngOnInit() {
    this.selectedEvent = this.eventsList[0];
  }

  addAttribute(attribute: Attribute) {
    console.log('addAttribute', attribute);
    this.event.attributes.push(attribute);
  }

  createEmptyAttribute() {
    const empty = {
      id: generateID(),
      type: 'text',
      name: 'Unnamed',
      operator: null,
      value: '',
      value2: ''
    };

    this.event.attributes.push(empty);
  }

  removeAttribute(attributeId: string) {
    this.event.attributes = this.event.attributes.filter(({ id }) => id !== attributeId);
  }
}
