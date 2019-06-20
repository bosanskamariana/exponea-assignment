import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-select-box',
  templateUrl: './event-select-box.component.html',
  styleUrls: ['./event-select-box.component.scss']
})
export class EventSelectBoxComponent implements OnInit {

  constructor() { }

  events = [
    'python-script-1',
    'python-script-2',
    'python-script-3',
    'python-script-4',
  ];
  
  ngOnInit() {
  }

  addAttribute() {
    console.log('todo add attribute')
  }
}
