import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('IonIUButtonComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [],
    }).compileComponents();
  });

  test('should create component', () => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('should emit clickCard on click', () => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.clickCard();
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });
  });

  test('should emit clickCard on click with onloading', () => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loading = true;
    component.clickCard();
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(false);
    });
  });
});
