import { Component, OnInit, Input } from '@angular/core';
import { Attribute, FilterEvent } from '../data-model/types';
import attributesList from '../data-model/attributes';

@Component({
  selector: 'app-attribute-select-box',
  templateUrl: './attribute-select-box.component.html',
  styleUrls: ['./attribute-select-box.component.scss']
})
export class AttributeSelectBoxComponent implements OnInit {

  constructor() { }

  attributes = attributesList;
  opened = false;
  selectedAttribute: string;

  @Input() event: FilterEvent;
  @Input() attribute: Attribute;

  ngOnInit() {
    this.selectedAttribute = this.attribute.name || 'Unnamed';
  }

  toggleSelect(val: boolean) {
    if (val !== undefined) {
      this.opened = val;
    } else {
      this.opened = !this.opened;
    }
  }
  setAttribute(name: string) {
    this.attribute.name = name;
    this.selectedAttribute = name;
    this.opened = false;
  }
}
