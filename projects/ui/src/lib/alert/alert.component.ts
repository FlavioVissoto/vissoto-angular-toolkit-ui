import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vat-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  /**
   * Label utilizada no botão "x" do modal (Botão para fechar o modal)
   *
   * Exibido apenas em acessibilidade.
   */
  @Input() labelButtonClose = 'Fechar Alerta';

  /**
   * Dispara quando houver um clique do mouse no botão para fechar o elemento.
   *
   * Return: EventEmitter
   */
  @Output() byClickClose = new EventEmitter();

  /**
   * Cor utilizada para o alerta.
   *
   * Cores disponíveis: red | gray | blue | green | yellow
   */
  @Input() color: string;

  /**
   * Classe CSS customizada para o alerta.
   */
  @Input() customCss: string;

  /**
   * Tempo de exibição do alerta em milisegundos.
   */
  @Input() timer = 3000;

  /**
   * Realiza o fechamento do alerta automaticamente no intervalo especificado no parametro "time" após aberto.
   */
  @Input() autoClose = true;

  _show = false;
  @Input() set show(value: boolean) {
    this._show = value;
    this.timeoutClose();
  }

  timeoutClose() {
    setTimeout(() => {
      if (this.autoClose) {
        this.close();
      }
    }, this.timer);
  }

  close(): void {
    this._show = false;
    this.byClickClose.emit();
  }
}
