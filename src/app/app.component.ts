import { Component, } from '@angular/core';
import { CustomFilterService } from './custom-filter.service';
import { FilterEvent } from './data-model/types';
import { generateID } from './helpers/id-generator';
import events from './data-model/events';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private filter: CustomFilterService) { }

  ngOnInit() {
    // todo load init filter
  }

  removeFunnelStep(id: string) {
    this.filter.removeEvent(id);
  }

  addFunnelStep(name: string = events[0]) {
    this.filter.addEvent({
      attributes: [],
      name,
      id: generateID()
    });
  }

  cloneFunnelStep(event: FilterEvent) {
    this.filter.addEvent({
      ...event,
      id: generateID()
    });
  }

  applyFilter() {
    console.log(this.filter);
  }

  discardFilter() {
    this.filter.events = [];
  }
}
