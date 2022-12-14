import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Size } from '../interface/size.interface';

@Component({
  selector: 'vat-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  /**
   * Título utilizado no modal.
   */
  @Input() title: string;
  /**
   * Classe css utilizada no header do modal.
   */
  @Input() cssClassHeader: string;
  /**
   * Controle para exibição do modal.
   *
   * Quando true exibe o modal.
   */
  @Input() show: boolean;
  /**
   * Label utilizada no botão "x" do modal (Botão para fechar o modal)
   *
   * Exibido apenas em acessibilidade.
   */
  @Input() labelButtonClose = 'Fechar Modal';

  private _rounded: Size;
  cssClassRounded: string;
  @Input() set rounded(value: Size) {
    this._rounded = value;
    this.cssClassRounded = this.getCssRounded();
  }
  private getCssRounded(): string {
    switch (this._rounded) {
      case Size['extra-small']:
        return 'rounded-sm';
      case Size.small:
        return 'rounded';
      case Size.base:
        return 'rounded-md';
      case Size.large:
        return 'rounded-lg';
      case Size['extra-large']:
        return 'rounded-full';
      default:
        return '';
    }
  }

  /**
   * Dispara quando houver um clique do mouse no botão para fechar o elemento.
   *
   * Return: EventEmitter
   */
  @Output() byClickClose = new EventEmitter();

  close(): void {
    this.byClickClose.emit();
  }
}
