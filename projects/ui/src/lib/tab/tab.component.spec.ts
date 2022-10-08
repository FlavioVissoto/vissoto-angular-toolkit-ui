import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Tab } from './interface/tab.interface';
import { TabComponent } from './tab.component';

// import { InputRadioComponent } from './ico-tabs.component';
// import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';

const mockIcoTab: Tab[] = [
  {
    selected: true,
    text: 'android',
    id: '0',
  },
  {
    selected: false,
    text: 'ios',
    id: '1',
  },
  {
    selected: false,
    text: 'backend',
    id: '0',
  },
];

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  test('should create component', () => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  test('should tab names', () => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    component.Tabs = mockIcoTab;
    fixture.detectChanges();

    const listTabNames = fixture.debugElement.queryAll(By.css('ul li'));
    expect(listTabNames[0].nativeElement.textContent.trim()).toEqual(mockIcoTab[0].text);
    expect(listTabNames[1].nativeElement.textContent.trim()).toEqual(mockIcoTab[1].text);
    expect(listTabNames[2].nativeElement.textContent.trim()).toEqual(mockIcoTab[2].text);
  });

  test('should emit tab on click', () => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    component.Tabs = mockIcoTab;
    fixture.detectChanges();
    const firstTabNames = fixture.debugElement.query(By.css('ul li:first-child'));

    component.clickedTab.subscribe((tab: Tab) => {
      expect(tab.text).toEqual(mockIcoTab[0].text);
    });

    firstTabNames.triggerEventHandler('click', null);
  });

  test('should set tab clicked', () => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    component.Tabs = mockIcoTab;
    fixture.detectChanges();
    const firstTabNames = fixture.debugElement.query(By.css('ul li:nth-child(2)'));

    firstTabNames.triggerEventHandler('click', null);

    component.clickTab(mockIcoTab[1]);

    expect(mockIcoTab[1].id === component.Tabs.filter((x) => x.id === mockIcoTab[1].id)[0].id);
  });

  test('should set tab selected', () => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    component.Tabs = mockIcoTab;
    fixture.detectChanges();
    const firstTabNames = fixture.debugElement.query(By.css('ul li:nth-child(2)'));

    firstTabNames.triggerEventHandler('click', null);

    component.setSelected(mockIcoTab[1]);

    expect(mockIcoTab[1].id === component.Tabs.filter((x) => x.id === mockIcoTab[1].id)[0].id);
  });
});
