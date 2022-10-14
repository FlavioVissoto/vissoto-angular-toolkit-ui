import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TabItem } from './interfaces/tab.interface';

@Component({
  selector: 'vat-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() itens: TabItem[];

  @Output() byClicked = new EventEmitter<TabItem>();

  click(value: TabItem): void {
    if (!value.disabled) {
      this.itens = this.itens.map((x) => ({
        ...x,
        selected: x.id == value.id,
      }));
      this.byClicked.emit(value);
    }
  }
}
