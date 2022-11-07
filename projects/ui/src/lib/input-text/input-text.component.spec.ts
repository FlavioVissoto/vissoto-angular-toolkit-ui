import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';
import { Size } from '../interface/size.enum';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('parseInputEvent', () => {
    const event = new Event('click');
    const newEvent = component.parseInputEvent(event);
    expect(newEvent).toBeTruthy();
  });

  test('parsePointerEvent', () => {
    const event = new Event('click');
    const newEvent = component.parsePointerEvent(event);
    expect(newEvent).toBeTruthy();
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
});
