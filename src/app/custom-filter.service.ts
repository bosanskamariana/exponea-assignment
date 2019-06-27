import { Injectable } from '@angular/core';
import { FilterEvent } from './data-model/types';
@Injectable({
  providedIn: 'root'
})
export class CustomFilterService {

  constructor() { }

  events: FilterEvent[] = [];

  addEvent(event: FilterEvent) {
   this.events.push(event);
  }

  removeEvent(eventId: string) {
    this.events = this.events.filter(({ id }) => {
      return eventId !== id;
    });
  }

}
