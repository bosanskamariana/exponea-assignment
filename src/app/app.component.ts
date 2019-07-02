import { Component, OnInit } from '@angular/core';
import { CustomFilterService } from './custom-filter.service';
import { generateID } from './helpers/id-generator';
import events from './data-model/events';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private filter: CustomFilterService) { }

  ngOnInit() {
    // todo load init filter
  }

  addFunnelStep(name: string = events[0]) {
    this.filter.addEvent({
      attributes: [],
      name,
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
