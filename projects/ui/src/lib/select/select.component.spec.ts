import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { SelectComponent } from './select.component';
import { SelectItem } from './interfaces/select.interface';
import { Size } from '../interface/size.enum';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let input: DebugElement;

  const mockSelectItem: SelectItem[] = [
    {
      selected: true,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png',
      text: 'Bulbasaur',
      value: 1,
    },
    {
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png',
      text: 'Ivysaur',
      value: 2,
    },
    {
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/venusaur.png',
      text: 'venusaur',
      value: 3,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.itens = mockSelectItem;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('onLocalClick', () => {
    component.onLocalClick();
    expect(component.thisElementClicked).toBeTruthy();
  });

  test('onLocalClick', () => {
    component.itens = mockSelectItem;
    component.onClick();
    expect(component.thisElementClicked).not.toBeTruthy();
    expect(component.showItens).not.toBeTruthy();
  });

  test('clickButton', () => {
    component.itens = mockSelectItem;
    component.clickButton();
    expect(component.showItens).toBeTruthy();
  });

  test('getItems', () => {
    expect(component.itens).toEqual(mockSelectItem);
  });

  test('clickItem', () => {
    component.clickItem(mockSelectItem[1]);

    component.bySelected.subscribe({
      next: (x: SelectItem) => {
        expect(x).toEqual(mockSelectItem[1]);
      },
    });

    expect(component.selectedItem).toEqual(mockSelectItem[1]);
    expect(component.itens[0].selected).toBeFalsy();
    expect(component.showItens).toBeFalsy();
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