import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from './interface/card.interface';

@Component({
  selector: 'vat-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './../../assets/css/tailwind.css',
    './../../assets/css/tailwind-custom.scss',
    './card.component.scss',
  ],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() title: string;
  @Input() message: string;
  @Input() imageSrc: string;

  @Output() clickedButton = new EventEmitter();

  ngOnInit(): void {
    if (this.card) {
      this.title = this.card.title;
      this.message = this.card.message;
      this.imageSrc = this.card.imageSrc;
    }
  }

  clickCard(): void {
    this.clickedButton.emit(true);
  }
}
