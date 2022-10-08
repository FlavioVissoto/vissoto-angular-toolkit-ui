import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Collor } from './interface/button-collor.enum';
import { EventEmitter } from '@angular/core';
import { GradientDuotone } from './interface/button-gradient-duotone.enum';
import { GradientMonochrome } from './interface/button-gradient-monochrome.enum';
import { Shadow } from './interface/button-shadow.enum';
import { Size } from '../interface/size.enum';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  const cssBaseGradientOutline =
    'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 group bg-gradient-to-br hover:text-white ';
  const cssBaseShadow = 'shadow-lg ';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should trigger event when clicked', () => {
    const emitSpy = jest.spyOn(component.byClick, 'emit');
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalled();
  });

  test('should trigger event when mouse hover', () => {
    const emitSpy = jest.spyOn(component.byHover, 'emit');
    fixture.nativeElement.querySelector('button').dispatchEvent(
      new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalled();
  });

  test('should trigger event when mouse leave', () => {
    const emitSpy = jest.spyOn(component.byLeave, 'emit');
    fixture.nativeElement.querySelector('button').dispatchEvent(
      new MouseEvent('mouseleave', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalled();
  });

  test('should loading status equal true with event emitter', () => {
    const eventEmitter = new EventEmitter<boolean>();
    component.loadingEmitter = eventEmitter;
    eventEmitter.emit(true);
    expect(component.disabled).toBeTruthy();
  });

  test('should loading status equal false with event emitter', () => {
    const eventEmitter = new EventEmitter<boolean>();
    component.loadingEmitter = eventEmitter;
    eventEmitter.emit(false);
    expect(component.disabled).toBeFalsy();
  });

  test('set disable', () => {
    component.collor = Collor.Default;
    component.gradientDuotone = GradientDuotone.CyanToBlue;
    component.gradientMonochrome = GradientMonochrome.Blue;
    component.gradientOutline = GradientDuotone.CyanToBlue;
    component.outline = Collor.Dark;
    component.disabled = true;

    expect(component.disabled).toBeTruthy();
    expect(component['_collor']).toEqual(Collor.Default);
    expect(component['_gradientDuotone']).toEqual(GradientDuotone.CyanToBlue);
    expect(component['_gradientMonochrome']).toEqual(GradientMonochrome.Blue);
    expect(component['_gradientOutline']).toEqual(GradientDuotone.CyanToBlue);
    expect(component['_outline']).toEqual(Collor.Dark);
  });

  test('set shadow', () => {
    component.shadow = Shadow.Blue;
    expect(component['_shadow']).toEqual(Shadow.Blue);
  });

  test('getCss Disabled', () => {
    component.disabled = true;
    let cssDisabled = component['getCssDisabled']();
    expect(cssDisabled).toEqual('cursor-not-allowed');

    component.disabled = false;
    cssDisabled = component['getCssDisabled']();
    expect(cssDisabled).toEqual('');
  });

  test('getCss Size ExtraSmall', () => {
    component.size = Size.ExtraSmall;
    let css = component['getCssSize']();
    expect(css).toEqual('py-1 px-1 text-xs');
  });

  test('getCss Size Small', () => {
    component.size = Size.Small;
    let css = component['getCssSize']();
    expect(css).toEqual('py-2 px-2 text-sm');
  });

  test('getCss Size Base', () => {
    component.size = Size.Base;
    let css = component['getCssSize']();
    expect(css).toEqual('py-2.5 px-2 text-sm');
  });

  test('getCss Size Large', () => {
    component.size = Size.Large;
    let css = component['getCssSize']();
    expect(css).toEqual('py-3 px-5 text-base');
  });

  test('getCss Size ExtraLarge', () => {
    component.size = Size.ExtraLarge;
    let css = component['getCssSize']();
    expect(css).toEqual('py-4 px-7 text-base');
  });

  test('getCss Size Null', () => {
    let css = component['getCssSize']();
    expect(css).toEqual('py-2.5 px-2 text-sm');
  });

  test('getCss Outline Default', () => {
    let css = component['getCssOutline'](Collor.Default);
    expect(css).toEqual(
      'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 active:ring-blue-300'
    );
  });

  test('getCss Outline Alternative', () => {
    let css = component['getCssOutline'](Collor.Alternative);
    expect(css).toEqual(
      'text-gray-900 border border-gray-300 hover:bg-gray-100 hover:text-blue-700'
    );
  });

  test('getCss Outline Dark', () => {
    let css = component['getCssOutline'](Collor.Dark);
    expect(css).toEqual(
      'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 active:ring-gray-300'
    );
  });

  test('getCss Outline Light', () => {
    let css = component['getCssOutline'](Collor.Light);
    expect(css).toEqual(
      'text-gray-900 border border-gray-300 hover:bg-gray-100 active:ring-gray-200'
    );
  });

  test('getCss Outline Green', () => {
    let css = component['getCssOutline'](Collor.Green);
    expect(css).toEqual(
      'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 active:ring-green-300'
    );
  });

  test('getCss Outline Red', () => {
    let css = component['getCssOutline'](Collor.Red);
    expect(css).toEqual(
      'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 active:ring-red-300'
    );
  });

  test('getCss Outline Yellow', () => {
    let css = component['getCssOutline'](Collor.Yellow);
    expect(css).toEqual(
      'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 active:ring-yellow-300'
    );
  });

  test('getCss Outline Purple', () => {
    let css = component['getCssOutline'](Collor.Purple);
    expect(css).toEqual(
      'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 active:ring-purple-300'
    );
  });

  test('getCss Outline Default disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Default);
    expect(css).toEqual(
      'text-blue-700 hover:text-white border border-blue-300 hover:bg-blue-400'
    );
  });

  test('getCss Outline Alternative disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Alternative);
    expect(css).toEqual(
      'text-gray-900 border border-gray-300 hover:bg-gray-100 hover:text-blue-700'
    );
  });

  test('getCss Outline Dark disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Dark);
    expect(css).toEqual(
      'text-gray-900 hover:text-white border border-gray-400 hover:bg-gray-400'
    );
  });

  test('getCss Outline Light disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Light);
    expect(css).toEqual(
      'text-gray-900 border border-gray-300 hover:bg-gray-100 active:ring-gray-200'
    );
  });

  test('getCss Outline Green disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Green);
    expect(css).toEqual(
      'text-green-700 hover:text-white border border-green-900 hover:bg-green-900'
    );
  });

  test('getCss Outline Red disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Red);
    expect(css).toEqual(
      'text-red-700 hover:text-white border border-red-300 hover:bg-red-300'
    );
  });

  test('getCss Outline Yellow disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Yellow);
    expect(css).toEqual(
      'text-yellow-400 hover:text-white border border-yellow-600 hover:bg-yellow-600'
    );
  });

  test('getCss Outline Purple disabled', () => {
    component.disabled = true;
    let css = component['getCssOutline'](Collor.Purple);
    expect(css).toEqual(
      'text-purple-700 hover:text-white border border-purple-300 hover:bg-purple-300'
    );
  });

  test('getCss GradientMonochrome Blue', () => {
    component.gradientMonochrome = GradientMonochrome.Blue;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:ring-blue-300'
    );
  });

  test('getCss GradientMonochrome Cyan', () => {
    component.gradientMonochrome = GradientMonochrome.Cyan;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br active:ring-cyan-300'
    );
  });

  test('getCss GradientMonochrome Green', () => {
    component.gradientMonochrome = GradientMonochrome.Green;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br active:ring-green-300'
    );
  });

  test('getCss GradientMonochrome Lime', () => {
    component.gradientMonochrome = GradientMonochrome.Lime;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br active:ring-lime-300'
    );
  });

  test('getCss GradientMonochrome Pink', () => {
    component.gradientMonochrome = GradientMonochrome.Pink;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br active:ring-pink-300'
    );
  });

  test('getCss GradientMonochrome Purple', () => {
    component.gradientMonochrome = GradientMonochrome.Purple;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br active:ring-purple-300'
    );
  });

  test('getCss GradientMonochrome Teal', () => {
    component.gradientMonochrome = GradientMonochrome.Teal;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br active:ring-teal-300'
    );
  });

  test('getCss GradientMonochrome Red', () => {
    component.gradientMonochrome = GradientMonochrome.Red;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br active:ring-red-300'
    );
  });

  test('getCss GradientMonochrome Blue disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Blue;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual('bg-gradient-to-r from-blue-200 to-blue-300');
  });

  test('getCss GradientMonochrome Green disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Green;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'bg-gradient-to-r from-green-200 via-green-400 to-green-300'
    );
  });

  test('getCss GradientMonochrome Cyan disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Cyan;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-300'
    );
  });

  test('getCss GradientMonochrome Teal disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Teal;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-teal-200 via-teal-400 to-teal-300'
    );
  });

  test('getCss GradientMonochrome Lime disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Lime;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-gray-900 bg-gradient-to-r from-lime-100 via-lime-200 to-lime-200'
    );
  });

  test('getCss GradientMonochrome Red disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Red;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-red-200 via-red-400 to-red-300'
    );
  });

  test('getCss GradientMonochrome Pink disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Pink;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500'
    );
  });

  test('getCss GradientMonochrome Purple disabled', () => {
    component.disabled = true;
    component.gradientMonochrome = GradientMonochrome.Purple;
    let css = component['getCssGradientMonochrome']();
    expect(css).toEqual(
      'text-white bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400'
    );
  });

  test('getCss GradientOutline PurpleToBlue', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.PurpleToBlue);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 active:ring-blue-300'
    );
  });

  test('getCss GradientOutline CyanToBlue', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.CyanToBlue);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 active:ring-cyan-200'
    );
  });

  test('getCss GradientOutline GreenToBlue', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.GreenToBlue);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 active:ring-green-200'
    );
  });

  test('getCss GradientOutline PurpleToPink', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.PurpleToPink);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 active:ring-purple-200'
    );
  });

  test('getCss GradientOutline PinkToOrange', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.PinkToOrange);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 active:ring-pink-200'
    );
  });

  test('getCss GradientOutline TealToLime', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.TealToLime);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 active:ring-lime-200 hover:text-gray-900'
    );
  });

  test('getCss GradientOutline RedToYellow', () => {
    let css = component['getCssGradientOutline'](GradientDuotone.RedToYellow);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 active:ring-red-100 hover:text-gray-900'
    );
  });

  test('getCss GradientOutline PurpleToBlue disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.PurpleToBlue);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-purple-400 to-blue-300 group-hover:from-purple-400 group-hover:to-blue-300'
    );
  });

  test('getCss GradientOutline CyanToBlue disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.CyanToBlue);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-cyan-300 to-blue-300 group-hover:from-cyan-300 group-hover:to-blue-300'
    );
  });

  test('getCss GradientOutline GreenToBlue disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.GreenToBlue);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-green-200 to-blue-300 group-hover:from-green-200 group-hover:to-blue-300'
    );
  });

  test('getCss GradientOutline PurpleToPink disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.PurpleToPink);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-purple-300 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-300'
    );
  });

  test('getCss GradientOutline PinkToOrange disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.PinkToOrange);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-pink-100 to-orange-100 group-hover:from-pink-100 group-hover:to-orange-100 hover:text-gray-900'
    );
  });

  test('getCss GradientOutline TealToLime disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.TealToLime);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-teal-100 to-lime-100 group-hover:from-teal-100 group-hover:to-lime-100 hover:text-gray-900'
    );
  });

  test('getCss GradientOutline RedToYellow disabled', () => {
    component.disabled = true;
    let css = component['getCssGradientOutline'](GradientDuotone.RedToYellow);
    expect(css).toEqual(
      cssBaseGradientOutline +
        'from-red-100 via-red-200 to-yellow-100 group-hover:from-red-100 group-hover:via-red-200 group-hover:to-yellow-100 hover:text-gray-900'
    );
  });

  test('getCss GradientOutline PurpleToBlue', () => {
    component.gradientDuotone = GradientDuotone.PurpleToBlue;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl active:ring-blue-300'
    );
  });

  test('getCss GradientOutline CyanToBlue', () => {
    component.gradientDuotone = GradientDuotone.CyanToBlue;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl active:ring-cyan-300'
    );
  });

  test('getCss GradientOutline GreenToBlue', () => {
    component.gradientDuotone = GradientDuotone.GreenToBlue;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl active:ring-green-200'
    );
  });

  test('getCss GradientOutline PurpleToPink', () => {
    component.gradientDuotone = GradientDuotone.PurpleToPink;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l active:ring-purple-200'
    );
  });

  test('getCss GradientOutline PinkToOrange', () => {
    component.gradientDuotone = GradientDuotone.PinkToOrange;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl active:ring-pink-200'
    );
  });

  test('getCss GradientOutline TealToLime', () => {
    component.gradientDuotone = GradientDuotone.TealToLime;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:ring-lime-200'
    );
  });

  test('getCss GradientOutline RedToYellow', () => {
    component.gradientDuotone = GradientDuotone.RedToYellow;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl active:ring-red-100'
    );
  });

  test('getCss GradientOutline PurpleToBlue disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.PurpleToBlue;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual('bg-gradient-to-br from-purple-400 to-blue-300');
  });

  test('getCss GradientOutline CyanToBlue disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.CyanToBlue;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual('bg-gradient-to-r from-cyan-300 to-blue-300');
  });

  test('getCss GradientOutline GreenToBlue disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.GreenToBlue;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual('bg-gradient-to-br from-green-200 to-blue-300');
  });

  test('getCss GradientOutline PurpleToPink disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.PurpleToPink;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual('bg-gradient-to-r from-purple-300 to-pink-300');
  });

  test('getCss GradientOutline PinkToOrange disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.PinkToOrange;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'text-gray-700 bg-gradient-to-br from-pink-100 to-orange-100'
    );
  });

  test('getCss GradientOutline TealToLime disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.TealToLime;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'text-gray-900 bg-gradient-to-r from-teal-100 to-lime-100'
    );
  });

  test('getCss GradientOutline RedToYellow disabled', () => {
    component.disabled = true;
    component.gradientDuotone = GradientDuotone.RedToYellow;
    let css = component['getCssGradientDuotone']();
    expect(css).toEqual(
      'text-gray-900 bg-gradient-to-r from-red-100 via-red-200 to-yellow-100'
    );
  });

  test('getCss Collor Default', () => {
    component.collor = Collor.Default;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-white bg-blue-700 hover:bg-blue-800 active:ring-blue-300'
    );
  });

  test('getCss Collor Alternative', () => {
    component.collor = Collor.Alternative;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-gray-900 border bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700'
    );
  });

  test('getCss Collor Dark', () => {
    component.collor = Collor.Dark;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-white bg-gray-800 hover:bg-gray-900 active:ring-gray-300'
    );
  });

  test('getCss Collor Light', () => {
    component.collor = Collor.Light;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 active:ring-gray-200'
    );
  });

  test('getCss Collor Green', () => {
    component.collor = Collor.Green;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-white bg-green-700 hover:bg-green-800 active:ring-green-300'
    );
  });

  test('getCss Collor Red', () => {
    component.collor = Collor.Red;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-white bg-red-700 hover:bg-red-800 active:ring-red-300'
    );
  });

  test('getCss Collor Yellow', () => {
    component.collor = Collor.Yellow;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-white bg-yellow-400 hover:bg-yellow-500 active:ring-yellow-300'
    );
  });

  test('getCss Collor Purple', () => {
    component.collor = Collor.Purple;
    let css = component['setCssCollor']();
    expect(css).toEqual(
      'text-white bg-purple-400 hover:bg-purple-800 active:ring-purple-300'
    );
  });

  test('getCss Collor Default disabled', () => {
    component.disabled = true;
    component.collor = Collor.Default;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-white bg-blue-300');
  });

  test('getCss Collor Alternative disabled', () => {
    component.disabled = true;
    component.collor = Collor.Alternative;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-gray-400 border bg-white border-gray-100');
  });

  test('getCss Collor Dark disabled', () => {
    component.disabled = true;
    component.collor = Collor.Dark;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-white bg-gray-400');
  });

  test('getCss Collor Light disabled', () => {
    component.disabled = true;
    component.collor = Collor.Light;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-gray-400 bg-white border border-gray-100');
  });

  test('getCss Collor Green disabled', () => {
    component.disabled = true;
    component.collor = Collor.Green;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-white bg-green-900');
  });

  test('getCss Collor Red disabled', () => {
    component.disabled = true;
    component.collor = Collor.Red;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-white bg-red-300');
  });

  test('getCss Collor Yellow disabled', () => {
    component.disabled = true;
    component.collor = Collor.Yellow;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-white bg-yellow-600');
  });

  test('getCss Collor Purple disabled', () => {
    component.disabled = true;
    component.collor = Collor.Purple;
    let css = component['setCssCollor']();
    expect(css).toEqual('text-white bg-purple-300');
  });

  test('getCss Rounded ExtraSmall', () => {
    component.rounded = Size.ExtraSmall;
    let css = component['getCssRounded']();
    expect(css).toEqual('rounded-sm');
  });

  test('getCss Rounded Small', () => {
    component.rounded = Size.Small;
    let css = component['getCssRounded']();
    expect(css).toEqual('rounded');
  });

  test('getCss Rounded Base', () => {
    component.rounded = Size.Base;
    let css = component['getCssRounded']();
    expect(css).toEqual('rounded-md');
  });

  test('getCss Rounded Large', () => {
    component.rounded = Size.Large;
    let css = component['getCssRounded']();
    expect(css).toEqual('rounded-lg');
  });

  test('getCss Rounded ExtraLarge', () => {
    component.rounded = Size.ExtraLarge;
    let css = component['getCssRounded']();
    expect(css).toEqual('rounded-full');
  });

  test('getCss Rounded Null', () => {
    let css = component['getCssRounded']();
    expect(css).toEqual('');
  });

  test('getCss Shadow Blue', () => {
    component.shadow = Shadow.Blue;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-blue-500/50');
  });

  test('getCss Shadow Green', () => {
    component.shadow = Shadow.Green;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-green-500/50');
  });

  test('getCss Shadow Cyan', () => {
    component.shadow = Shadow.Cyan;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-cyan-500/50');
  });

  test('getCss Shadow Teal', () => {
    component.shadow = Shadow.Teal;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-teal-500/50');
  });

  test('getCss Shadow Lime', () => {
    component.shadow = Shadow.Lime;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-lime-500/50');
  });

  test('getCss Shadow Red', () => {
    component.shadow = Shadow.Red;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-red-500/50');
  });

  test('getCss Shadow Pink', () => {
    component.shadow = Shadow.Pink;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-pink-500/50');
  });

  test('getCss Shadow Purple', () => {
    component.shadow = Shadow.Purple;
    let css = component['getCssShadow']();
    expect(css).toEqual(cssBaseShadow + 'shadow-purple-500/50');
  });

  test('getCss roundedOutline ExtraSmall', () => {
    component.rounded = Size.ExtraSmall;
    let css = component['roundedOutline']();
    expect(css).toEqual('rounded-sm');
  });

  test('getCss roundedOutline Small', () => {
    component.rounded = Size.Small;
    let css = component['roundedOutline']();
    expect(css).toEqual('rounded-sm');
  });

  test('getCss roundedOutline Base', () => {
    component.rounded = Size.Base;
    let css = component['roundedOutline']();
    expect(css).toEqual('rounded');
  });

  test('getCss roundedOutline Large', () => {
    component.rounded = Size.Large;
    let css = component['roundedOutline']();
    expect(css).toEqual('rounded-md');
  });

  test('getCss roundedOutline ExtraLarge', () => {
    component.rounded = Size.ExtraLarge;
    let css = component['roundedOutline']();
    expect(css).toEqual('rounded-full');
  });

  test('getCss roundedOutline Null', () => {
    let css = component['roundedOutline']();
    expect(css).toEqual('');
  });
});
