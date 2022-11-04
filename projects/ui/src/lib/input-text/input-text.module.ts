import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [InputTextComponent],
  exports: [InputTextComponent],
  imports: [CommonModule],
})
export class InputTextModule {}
