import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { Size } from '../interface/size.interface';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('close', () => {
    component.close();

    component.byClickClose.subscribe({
      next: () => {
        expect(component).toBeTruthy();
      },
    });
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

  test('getCss Rounded ExtraLarge', () => {
    component.rounded = 99;
    let css = component['getCssRounded']();
    expect(css).toEqual('');
  });
});
