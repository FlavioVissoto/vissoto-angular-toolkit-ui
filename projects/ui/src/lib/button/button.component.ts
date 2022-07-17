import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vat-button',
  templateUrl: './button.component.html',
  styleUrls: [],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() classCss: string;
  @Input() classCssText: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clickedButton = new EventEmitter<boolean>();

  clickButton(): void {
    if (this.loading || this.disabled) {
      return;
    }
    this.clickedButton.emit(true);
  }
}
