import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, SelectOptions } from './interfaces/iui-select.interface';

@Component({
  selector: 'vat-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  private _values: Select;
  @Input() set values(value: Select) {
    this.optionSelected = value.options.find((x: SelectOptions) => x.selected);
    this._values = value;
  }
  get values(): Select {
    return this._values;
  }
  @Input() firstIsEmpty = false;
  @Input() className = 'custom-dropdown';
  @Input() title: string;
  @Input() titleCssClass: string;
  @Input() placeholder: string;
  @Input() form: FormControl;
  @Input() optionSelected: SelectOptions | undefined;
  @Input() onSetSelected: EventEmitter<SelectOptions>;

  @Output() onSelected = new EventEmitter<SelectOptions>();

  showOptions = false;
  // faChevronUp = faChevronUp;
  // faChevronDown = faChevronDown;

  ngOnInit(): void {
    document.addEventListener(
      'click',
      (ev: Event) => {
        if ((<Element>ev.target).closest(`.${this.className}`)) {
          return;
        }
        this.showOptions = false;
      },
      false
    );
    this.listenerSetSelected();
  }

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  clickSelect(index: number): void {
    if (index == this.values.options.findIndex((x) => x.selected)) {
      return;
    }
    for (let i = 0; i < this.values.options.length; i++) {
      this.values.options[i].selected = false;
    }
    this.values.options[index].selected = true;
    this.optionSelected = this.values.options[index];
    if (this.form) {
      this.form.setValue(this.optionSelected.value);
    }
    this.onSelected.emit(this.optionSelected);
  }

  listenerSetSelected(): void {
    if (this.onSetSelected) {
      this.onSetSelected.subscribe({
        next: (x: SelectOptions) => {
          this.optionSelected = x;
        },
      });
    }
  }
}
