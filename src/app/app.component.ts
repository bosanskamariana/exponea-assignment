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
    this.filter.events = [{
      attributes: [{ id: '_jxmyt5i2i8gfgrbmo', type: 'text', name: 'number of items', operator: 'grater than', value: 'ttttt', value2: '' },
      { id: '_jxmytbw17i6qao8la', type: 'text', name: 'timestamp', operator: null, value: '', value2: '' },
      { id: '_jxmytfkoq93uwfvtq', type: 'number', name: 'index', operator: 'in between', value: '4', value2: '8' }
      ], name: 'python_script_event', id: '_jxlz0iuwybqxouwrf'
    },
    { attributes: [], name: 'python_script_event2', id: '_jxlz0iuwybqxouwgf' },
    {
      attributes: [{ id: '_jxmyt5i2i8gfgrbmo', type: 'text', name: 'number of items', operator: 'grater than', value: 'ttttt', value2: '' },
      { id: '_jxmytbw17i6qao8la', type: 'text', name: 'timestamp', operator: null, value: '', value2: '' },
      { id: '_jxmytfkoq93uwfvtq', type: 'number', name: 'index', operator: 'in between', value: '4', value2: '8' }
      ], name: 'python_script_event', id: '_jxlz0iuwybqxouwrf'
    },
    { attributes: [], name: 'python_script_event2', id: '_jxlz0iuwybqxouwgf' }];
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
