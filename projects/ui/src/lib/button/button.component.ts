import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Collor } from './interface/button-collor.enum';
import { GradientDuotone } from './interface/button-gradient-duotone.enum';
import { GradientMonochrome } from './interface/button-gradient-monochrome.enum';
import { Shadow } from './interface/button-shadow.enum';
import { Size } from '../interface/size.enum';

@Component({
  selector: 'vat-button',
  templateUrl: './button.component.html',
  styleUrls: [],
})
export class ButtonComponent {
  ngOnInit(): void {
    if (!this._size) {
      this.size = Size.Base;
    }
    if (
      !this._collor &&
      !this._gradientDuotone &&
      !this._gradientMonochrome &&
      !this._gradientOutline &&
      !this._outline
    ) {
      this.collor = Collor.Default;
    }
  }

  enumCollor = Collor;
  enumRounded = Size;
  enumGradientMonochrome = GradientMonochrome;
  enumGradientDuotone = GradientDuotone;

  cssShadow: string;
  cssClassRounded: string;
  cssClassCollor: string;
  cssClassGradientDuotone: string;
  cssClassGradientOutline: string;
  cssClassGradientMonochrome: string;
  cssClassOutline: string;
  cssClassSize: string;
  cssClassDisabled: string;

  @Input() text: string;
  @Input() message: string;
  @Input() loading: boolean;
  @Input() cssClassButton: boolean;
  @Input() cssClassText: boolean;

  @Output() byClick = new EventEmitter();
  @Output() byHover = new EventEmitter();
  @Output() byLeave = new EventEmitter();

  private _shadow: Shadow;
  private _rounded: Size;
  private _collor: Collor;
  private _gradientDuotone: GradientDuotone;
  private _gradientOutline: GradientDuotone;
  private _gradientMonochrome: GradientMonochrome;
  private _outline: Collor;
  private _size: Size;
  private _disabled: boolean;
  private _loadingEmitter: EventEmitter<boolean>;

  btnClick(): void {
    this.byClick.emit();
  }

  btnHover(): void {
    this.byHover.emit();
  }

  btnLeave(): void {
    this.byLeave.emit();
  }

  @Input() set loadingEmitter(value: EventEmitter<boolean>) {
    this._loadingEmitter = value;
    this.listenerLoading();
  }

  @Input() set disabled(value: boolean) {
    this._disabled = value;
    this.cssClassDisabled = this.getCssDisabled();

    if (this._collor) {
      this.collor = this._collor;
    }
    if (this._gradientDuotone) {
      this.gradientDuotone = this._gradientDuotone;
    }
    if (this._gradientMonochrome) {
      this.gradientMonochrome = this._gradientMonochrome;
    }
    if (this._gradientOutline) {
      this.gradientOutline = this._gradientOutline;
    }
    if (this._outline) {
      this.outline = this._outline;
    }
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input() set shadow(value: Shadow) {
    this._shadow = value;
    this.cssShadow = this.getCssShadow();
  }

  @Input() set rounded(value: Size) {
    this._rounded = value;
    this.cssClassRounded = this.getCssRounded();
  }

  @Input() set collor(value: Collor) {
    this._collor = value;
    this.cssClassCollor = this.setCssCollor();
  }

  @Input() set gradientDuotone(value: GradientDuotone) {
    this._gradientDuotone = value;
    this.cssClassGradientDuotone = this.getCssGradientDuotone();
  }

  @Input() set gradientOutline(value: GradientDuotone) {
    this._gradientOutline = value;
    this.cssClassGradientOutline = this.getCssGradientOutline(value);
  }

  @Input() set gradientMonochrome(value: GradientMonochrome) {
    this._gradientMonochrome = value;
    this.cssClassGradientMonochrome = this.getCssGradientMonochrome();
  }

  @Input() set outline(value: Collor) {
    this._outline = value;
    this.cssClassOutline = this.getCssOutline(value);
  }

  @Input() set size(value: Size) {
    this._size = value;
    this.cssClassSize = this.getCssSize();
  }

  roundedOutline(): string {
    switch (this._rounded) {
      case Size.ExtraSmall:
      case Size.Small:
        return 'rounded-sm';
      case Size.Base:
        return 'rounded';
      case Size.Large:
        return 'rounded-md';
      case Size.ExtraLarge:
        return 'rounded-full';
      default:
        return '';
    }
  }

  private getCssShadow(): string {
    const css = 'shadow-lg ';
    switch (this._shadow) {
      case Shadow.Blue:
        return css + 'shadow-blue-500/50';
      case Shadow.Green:
        return css + 'shadow-green-500/50';
      case Shadow.Cyan:
        return css + 'shadow-cyan-500/50';
      case Shadow.Teal:
        return css + 'shadow-teal-500/50';
      case Shadow.Lime:
        return css + 'shadow-lime-500/50';
      case Shadow.Red:
        return css + 'shadow-red-500/50';
      case Shadow.Pink:
        return css + 'shadow-pink-500/50';
      case Shadow.Purple:
        return css + 'shadow-purple-500/50';
    }
  }

  private getCssRounded(): string {
    switch (this._rounded) {
      case Size.ExtraSmall:
        return 'rounded-sm';
      case Size.Small:
        return 'rounded';
      case Size.Base:
        return 'rounded-md';
      case Size.Large:
        return 'rounded-lg';
      case Size.ExtraLarge:
        return 'rounded-full';
      default:
        return '';
    }
  }

  private setCssCollor(): string {
    if (!this._disabled) {
      switch (this._collor) {
        case Collor.Default:
          return 'text-white bg-blue-700 hover:bg-blue-800 active:ring-blue-300';
        case Collor.Alternative:
          return 'text-gray-900 border bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700';
        case Collor.Dark:
          return 'text-white bg-gray-800 hover:bg-gray-900 active:ring-gray-300';
        case Collor.Light:
          return 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 active:ring-gray-200';
        case Collor.Green:
          return 'text-white bg-green-700 hover:bg-green-800 active:ring-green-300';
        case Collor.Red:
          return 'text-white bg-red-700 hover:bg-red-800 active:ring-red-300';
        case Collor.Yellow:
          return 'text-white bg-yellow-400 hover:bg-yellow-500 active:ring-yellow-300';
        case Collor.Purple:
          return 'text-white bg-purple-400 hover:bg-purple-800 active:ring-purple-300';
      }
    } else {
      switch (this._collor) {
        case Collor.Default:
          return 'text-white bg-blue-300';
        case Collor.Alternative:
          return 'text-gray-400 border bg-white border-gray-100';
        case Collor.Dark:
          return 'text-white bg-gray-400';
        case Collor.Light:
          return 'text-gray-400 bg-white border border-gray-100';
        case Collor.Green:
          return 'text-white bg-green-900';
        case Collor.Red:
          return 'text-white bg-red-300';
        case Collor.Yellow:
          return 'text-white bg-yellow-600';
        case Collor.Purple:
          return 'text-white bg-purple-300';
      }
    }
  }

  private getCssGradientDuotone(): string {
    if (!this._disabled) {
      switch (this._gradientDuotone) {
        case GradientDuotone.PurpleToBlue:
          return 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl active:ring-blue-300';
        case GradientDuotone.CyanToBlue:
          return 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl active:ring-cyan-300';
        case GradientDuotone.GreenToBlue:
          return 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl active:ring-green-200';
        case GradientDuotone.PurpleToPink:
          return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l active:ring-purple-200';
        case GradientDuotone.PinkToOrange:
          return 'bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl active:ring-pink-200';
        case GradientDuotone.TealToLime:
          return 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:ring-lime-200';
        case GradientDuotone.RedToYellow:
          return 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl active:ring-red-100';
      }
    } else {
      switch (this._gradientDuotone) {
        case GradientDuotone.PurpleToBlue:
          return 'bg-gradient-to-br from-purple-400 to-blue-300';
        case GradientDuotone.CyanToBlue:
          return 'bg-gradient-to-r from-cyan-300 to-blue-300';
        case GradientDuotone.GreenToBlue:
          return 'bg-gradient-to-br from-green-200 to-blue-300';
        case GradientDuotone.PurpleToPink:
          return 'bg-gradient-to-r from-purple-300 to-pink-300';
        case GradientDuotone.PinkToOrange:
          return 'text-gray-700 bg-gradient-to-br from-pink-100 to-orange-100';
        case GradientDuotone.TealToLime:
          return 'text-gray-900 bg-gradient-to-r from-teal-100 to-lime-100';
        case GradientDuotone.RedToYellow:
          return 'text-gray-900 bg-gradient-to-r from-red-100 via-red-200 to-yellow-100';
      }
    }
  }

  private getCssGradientOutline(value: GradientDuotone): string {
    let css =
      'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 group bg-gradient-to-br hover:text-white ';
    if (!this._disabled) {
      switch (value) {
        case GradientDuotone.PurpleToBlue:
          css =
            css +
            'from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 active:ring-blue-300';
          break;
        case GradientDuotone.CyanToBlue:
          css =
            css +
            'from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 active:ring-cyan-200';
          break;
        case GradientDuotone.GreenToBlue:
          css =
            css +
            'from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 active:ring-green-200';
          break;
        case GradientDuotone.PurpleToPink:
          css =
            css +
            'from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 active:ring-purple-200';
          break;
        case GradientDuotone.PinkToOrange:
          css =
            css +
            'from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 active:ring-pink-200';
          break;
        case GradientDuotone.TealToLime:
          css =
            css +
            'from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 active:ring-lime-200 hover:text-gray-900';
          break;
        case GradientDuotone.RedToYellow:
          css =
            css +
            'from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 active:ring-red-100 hover:text-gray-900';
          break;
      }
    } else {
      switch (value) {
        case GradientDuotone.PurpleToBlue:
          css =
            css +
            'from-purple-400 to-blue-300 group-hover:from-purple-400 group-hover:to-blue-300';
          break;
        case GradientDuotone.CyanToBlue:
          css =
            css +
            'from-cyan-300 to-blue-300 group-hover:from-cyan-300 group-hover:to-blue-300';
          break;
        case GradientDuotone.GreenToBlue:
          css =
            css +
            'from-green-200 to-blue-300 group-hover:from-green-200 group-hover:to-blue-300';
          break;
        case GradientDuotone.PurpleToPink:
          css =
            css +
            'from-purple-300 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-300';
          break;
        case GradientDuotone.PinkToOrange:
          css =
            css +
            'from-pink-100 to-orange-100 group-hover:from-pink-100 group-hover:to-orange-100 hover:text-gray-900';
          break;
        case GradientDuotone.TealToLime:
          css =
            css +
            'from-teal-100 to-lime-100 group-hover:from-teal-100 group-hover:to-lime-100 hover:text-gray-900';
          break;
        case GradientDuotone.RedToYellow:
          css =
            css +
            'from-red-100 via-red-200 to-yellow-100 group-hover:from-red-100 group-hover:via-red-200 group-hover:to-yellow-100 hover:text-gray-900';
          break;
      }
    }
    return css;
  }

  private getCssGradientMonochrome(): string {
    if (!this._disabled) {
      switch (this._gradientMonochrome) {
        case GradientMonochrome.Blue:
          return 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:ring-blue-300';
        case GradientMonochrome.Cyan:
          return 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br active:ring-cyan-300';
        case GradientMonochrome.Green:
          return 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br active:ring-green-300';
        case GradientMonochrome.Lime:
          return 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br active:ring-lime-300';
        case GradientMonochrome.Pink:
          return 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br active:ring-pink-300';
        case GradientMonochrome.Purple:
          return 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br active:ring-purple-300';
        case GradientMonochrome.Red:
          return 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br active:ring-red-300';
        case GradientMonochrome.Teal:
          return 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br active:ring-teal-300';
      }
    } else {
      switch (this._gradientMonochrome) {
        case GradientMonochrome.Blue:
          return 'bg-gradient-to-r from-blue-200 to-blue-300';
        case GradientMonochrome.Green:
          return 'bg-gradient-to-r from-green-200 via-green-400 to-green-300';
        case GradientMonochrome.Cyan:
          return 'text-white bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-300';
        case GradientMonochrome.Teal:
          return 'text-white bg-gradient-to-r from-teal-200 via-teal-400 to-teal-300';
        case GradientMonochrome.Lime:
          return 'text-gray-900 bg-gradient-to-r from-lime-100 via-lime-200 to-lime-200';
        case GradientMonochrome.Red:
          return 'text-white bg-gradient-to-r from-red-200 via-red-400 to-red-300';
        case GradientMonochrome.Pink:
          return 'text-white bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500';
        case GradientMonochrome.Purple:
          return 'text-white bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400';
      }
    }
  }

  private getCssOutline(value: Collor): string {
    if (!this._disabled) {
      switch (value) {
        case Collor.Default:
          return 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 active:ring-blue-300';
        case Collor.Alternative:
          return 'text-gray-900 border border-gray-300 hover:bg-gray-100 hover:text-blue-700';
        case Collor.Dark:
          return 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 active:ring-gray-300';
        case Collor.Light:
          return 'text-gray-900 border border-gray-300 hover:bg-gray-100 active:ring-gray-200';
        case Collor.Green:
          return 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 active:ring-green-300';
        case Collor.Red:
          return 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 active:ring-red-300';
        case Collor.Yellow:
          return 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 active:ring-yellow-300';
        case Collor.Purple:
          return 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 active:ring-purple-300';
      }
    } else {
      switch (value) {
        case Collor.Default:
          return 'text-blue-700 hover:text-white border border-blue-300 hover:bg-blue-400';
        case Collor.Alternative:
          return 'text-gray-900 border border-gray-300 hover:bg-gray-100 hover:text-blue-700';
        case Collor.Dark:
          return 'text-gray-900 hover:text-white border border-gray-400 hover:bg-gray-400';
        case Collor.Light:
          return 'text-gray-900 border border-gray-300 hover:bg-gray-100 active:ring-gray-200';
        case Collor.Green:
          return 'text-green-700 hover:text-white border border-green-900 hover:bg-green-900';
        case Collor.Red:
          return 'text-red-700 hover:text-white border border-red-300 hover:bg-red-300';
        case Collor.Yellow:
          return 'text-yellow-400 hover:text-white border border-yellow-600 hover:bg-yellow-600';
        case Collor.Purple:
          return 'text-purple-700 hover:text-white border border-purple-300 hover:bg-purple-300';
      }
    }
  }

  private getCssSize(): string {
    switch (this._size) {
      case Size.ExtraSmall:
        return 'py-1 px-1 text-xs';
      case Size.Small:
        return 'py-2 px-2 text-sm';
      case Size.Base:
        return 'py-2.5 px-2 text-sm';
      case Size.Large:
        return 'py-3 px-5 text-base';
      case Size.ExtraLarge:
        return 'py-4 px-7 text-base';
    }
  }

  private getCssDisabled(): string {
    if (this._disabled) {
      return 'cursor-not-allowed';
    } else {
      return '';
    }
  }

  private listenerLoading(): void {
    if (this._loadingEmitter) {
      this._loadingEmitter.subscribe({
        next: (value: boolean) => {
          this.disabled = value;
        },
      });
    }
  }
}
