import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Tab } from './interface/tab.interface';

@Component({
  selector: 'vat-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() Tabs: Tab[] = [];

  /**
   * Evento disparado quando usuário selecionar um item.
   */
  @Output() clickedTab = new EventEmitter<Tab>();

  /**
   *
   * @param tab Item selecionado pelo usuário no template.
   */
  clickTab(tab: Tab): void {
    this.setSelected(tab);
    this.clickedTab.emit(tab);
  }

  setSelected(tab: Tab): void {
    for (let index = 0; index < this.Tabs.length; index++) {
      this.Tabs[index].selected =
        this.Tabs[index].id === tab.id && this.Tabs[index].text === tab.text;
    }
  }
}
