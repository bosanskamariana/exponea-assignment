import { Component, OnInit, Input } from '@angular/core';
import events from './../data-model/events';
import { FilterEvent, Attribute } from '../data-model/types';
import { generateID } from './../helpers/id-generator';
import { CustomFilterService } from '../custom-filter.service';
import { clone } from 'ramda';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-event-select-box',
  templateUrl: './event-select-box.component.html',
  styleUrls: ['./event-select-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventSelectBoxComponent implements OnInit {

  constructor(private filter: CustomFilterService) { }
  eventsList = events;
  selectedEvent: string;
  opened = false;

  @Input() event: FilterEvent;
  @Input() counter: number;

  ngOnInit() {
    this.selectedEvent = this.event.name || this.eventsList[0];
  }


  toggleSelectBox(val: boolean) {
    if (val !== undefined) {
      this.opened = val;
    } else {
      this.opened = !this.opened;
    }
  }

  cloneFunnelStep(event: FilterEvent) {
    this.filter.addEvent({
      ...clone(event),
      id: generateID()
    });
  }

  removeFunnelStep(id: string) {
    this.filter.removeEvent(id);
  }

  setEvent(name: string) {
    this.event.name = name || this.event.name;
    this.opened = false;
  }

  createEmptyAttribute() {
    this.event.attributes.push({
      id: generateID(),
      type: 'text',
      name: 'Unnamed',
      operator: null,
      value: '',
      value2: ''
    });
  }

  removeAttribute(attributeId: string) {
    this.event.attributes = this.event.attributes.filter(({ id }) => id !== attributeId);
  }
}
