import { Component, OnInit, Input } from '@angular/core';
import { Attribute, Operator } from '../data-model/types';
import { numberOperators, stringOperators } from '../data-model/operators';

@Component({
  selector: 'app-operator-select-box',
  templateUrl: './operator-select-box.component.html',
  styleUrls: ['./operator-select-box.component.scss']
})
export class OperatorSelectBoxComponent implements OnInit {

  constructor() { }

  operators = numberOperators;
  selectedOperator = 'equals'; // default
  opened = false;

  @Input() attribute: Attribute;

  ngOnInit() {
  }

  toggleSelect() {
    this.opened = !this.opened;
  }


  setOperator(operator: Operator) {
    console.log('operator', operator);
    if (this.attribute.value2 && operator !== 'in between') {
      this.attribute.value2 = '';
    }
    this.attribute.operator = operator;
    this.selectedOperator = operator;
    this.opened = false;
  }

  setNumOperators() {
    this.attribute.type = 'number';
    this.operators = numberOperators;
  }

  setStringOperators() {
    this.attribute.type = 'text';
    this.operators = stringOperators;
  }
}
