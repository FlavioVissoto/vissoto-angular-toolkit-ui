import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Select, SelectOptions } from './interfaces/iui-select.interface';

import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let formControl: FormControl;
  const emitterOnSetSelected = new EventEmitter<SelectOptions>();

  const mock: Select = {
    options: [
      {
        label: 'label2',
        value: 'value2',
        selected: false,
      },
      {
        label: 'label3',
        value: 'value3',
        selected: false,
      },
    ],
  } as Select;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.values = mock;

    formControl = new FormControl();
    component.form = formControl;
    component.onSetSelected = emitterOnSetSelected;
    component.showOptions = false;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });

  test('should ngOnInit with class', () => {
    component.showOptions = true;
    document.body.innerHTML =
      '<p class="' +
      component.className +
      '"><a class="j1 j2 " id="j">Jest</a></p>';
    document.getElementById('j')?.click();
    expect(component.showOptions).toBe(true);
  });

  test('should ngOnInit without class', () => {
    component.showOptions = true;
    document.body.innerHTML =
      '<a class="j1 j2 j3" id="j" href="http://www.google.com/">Jest</a>';
    document.getElementById('j')?.click();
    expect(component.showOptions).toBe(false);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should openOptions', () => {
    component.openOptions();
    expect(component.showOptions).toBe(true);
  });

  test('should clickSelect', () => {
    component.onSelected.subscribe({
      next: (x: SelectOptions) => {
        expect(x).toEqual(mock.options[1]);
        expect(formControl.value).toEqual(x.value);
      },
    });
    component.clickSelect(1);
  });

  test('should clickSelect clicked on the same index', () => {
    for (let i = 0; i < component.values.options.length; i++) {
      component.values.options[i].selected = false;
    }
    component.values.options[0].selected = true;
    component.clickSelect(0);
    expect(component.values.options[0].selected).toBe(true);
  });

  test('placeholder', () => {
    component.values = { options: [] } as Select;
    expect(component.optionSelected).toBe(undefined);
  });

  test('listenerSetSelected', () => {
    component.optionSelected = {
      label: 'teste Seleção',
      value: 'teste Seleção',
      selected: true,
    } as SelectOptions;

    component.onSetSelected = emitterOnSetSelected;

    emitterOnSetSelected.emit({
      label: 'teste Seleção Emmiter',
      value: 'teste Seleção Emmiter',
      selected: true,
    });

    expect(component.optionSelected.value).toBe('teste Seleção Emmiter');
  });
});
