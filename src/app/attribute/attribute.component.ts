import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../data-model/types';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  constructor() { }

  @Input() attribute: Attribute;

  ngOnInit() {
  }

  setValue(value: string) {
    this.attribute.value = value;
    console.log('value', value);
  }
  setValue2(value2: string) {
    this.attribute.value2 = value2;
    console.log('value2', value2);
  }
}
