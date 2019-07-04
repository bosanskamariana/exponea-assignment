import { Component, Input } from '@angular/core';
import { Attribute, FilterEvent } from '../data-model/types';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {

  @Input() attribute: Attribute;
  @Input() event: FilterEvent;

  setValue(value: string) {
    this.attribute.value = value;
  }
  setValue2(value2: string) {
    this.attribute.value2 = value2;
  }
}
