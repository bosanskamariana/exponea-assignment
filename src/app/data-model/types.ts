export interface FilterEvent {
  attributes: Attribute[];
  name: string;
  id: string;
}

export interface Attribute {
  id: string;
  name: string;
  operator: Operator;
  value: string | number;
  value2?: string | number;
}

export type Operator = StringOperator | NumOperator;
export type NumOperator =
  'equal to' |
  'in between' |
  'less than' |
  'grater than';


export type StringOperator =
  'equals' |
  'does not equal' |
  'contains' |
  'does not contain';
