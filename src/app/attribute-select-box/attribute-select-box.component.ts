import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../data-model/types';
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

  @Input() attribute: Attribute;

  ngOnInit() {
    this.selectedAttribute = this.attribute.name || 'Unnamed'; // default
  }

  toggleSelect() {
    this.opened = !this.opened;
  }
  setAttribute(name: string) {
    console.log('name', name);
    this.attribute.name = name;
    this.selectedAttribute = name;
    this.opened = false;
  }
}
