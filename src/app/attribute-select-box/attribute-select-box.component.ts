import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../data-model/types';


@Component({
  selector: 'app-attribute-select-box',
  templateUrl: './attribute-select-box.component.html',
  styleUrls: ['./attribute-select-box.component.scss']
})
export class AttributeSelectBoxComponent implements OnInit {

  constructor() { }
  @Input() attribute: Attribute;

  ngOnInit() {
  }

}
