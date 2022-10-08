import { Component, Input } from '@angular/core';

import { Position } from './interface/position.enum';

@Component({
  selector: 'vat-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() text = '';
  @Input() position: Position = Position.top;
  showTooltip = false;

  // overTooltip(): void {
  //   this.showTooltip = !this.showTooltip;
  // }
}
