import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardAlfa } from './interface/card-alfa.interface';

@Component({
  selector: 'vat-card-alfa',
  templateUrl: './card-alfa.component.html',
  styleUrls: [
    './../../../assets/css/tailwind.css',
    './../../../assets/css/tailwind-custom.scss',
    './card-alfa.component.scss',
  ],
})
export class CardAlfaComponent {
  @Input() card: CardAlfa;
  @Output() clickedCard = new EventEmitter();

  clickCard(): void {
    this.clickedCard.emit(true);
  }
}
