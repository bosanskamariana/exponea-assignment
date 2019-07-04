import { Component, OnInit, Input } from '@angular/core';
import { Attribute, FilterEvent } from '../data-model/types';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  constructor() { }

  @Input() attribute: Attribute;
  @Input() event: FilterEvent;

  ngOnInit() {
  }

  setValue(value: string) {
    this.attribute.value = value;
  }
  setValue2(value2: string) {
    this.attribute.value2 = value2;
  }
}
