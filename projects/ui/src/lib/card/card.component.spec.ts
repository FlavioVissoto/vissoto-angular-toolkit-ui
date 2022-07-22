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
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create component', () => {
    expect(component).toBeTruthy();
  });

  test('should OnInit', () => {
    const card = {
      imageSrc: 'testeImg',
      message: 'Message',
      title: 'Title',
    };
    component.card = card;
    component.ngOnInit();
    expect(component.imageSrc).toStrictEqual(card.imageSrc);
    expect(component.message).toStrictEqual(card.message);
    expect(component.title).toStrictEqual(card.title);
  });

  test('should emit clickCard on click', () => {
    component.clickCard();
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });
  });
});
