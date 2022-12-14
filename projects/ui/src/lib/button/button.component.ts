import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Color } from '../interface/color.interface';
import { Rounded } from '../interface/rounded.interface';
import { Size } from '../interface/size.interface';

@Component({
  selector: 'vat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() message: string;
  @Input() loading: boolean;
  @Input() cssClassButton: boolean;
  @Input() cssClassText: boolean;

  @Output() byClick = new EventEmitter();
  @Output() byHover = new EventEmitter();
  @Output() byLeave = new EventEmitter();

  @Input() color: Color = Color.blue;
  @Input() size: Size = Size.small;
  @Input() rounded: Rounded = Rounded.none;

  @Input() disabled: boolean;
  @Input() loadingEmitter: EventEmitter<boolean>;

  btnClick(): void {
    this.byClick.emit();
  }

  btnHover(): void {
    this.byHover.emit();
  }

  btnLeave(): void {
    this.byLeave.emit();
  }
}
