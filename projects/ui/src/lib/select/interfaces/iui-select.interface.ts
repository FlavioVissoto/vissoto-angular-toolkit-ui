export interface Select {
  options: SelectOptions[];
}

export interface SelectOptions {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  value: string;
  object?: object;
}
