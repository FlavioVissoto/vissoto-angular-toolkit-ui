import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;
  let divTooltip: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    divTooltip = fixture.debugElement.nativeElement.querySelector('.tooltip');
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // test('should show tooltip when cursor is over item', () => {
  //   divTooltip.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   expect(
  //     fixture.nativeElement
  //       .querySelector('.tooltip .tooltip-drop')
  //       .getAttribute('class')
  //   ).toContain('show');
  // });

  // test('should show tooltip for top when cursor is over item', () => {
  //   component.position = Position.top;
  //   divTooltip.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   const elem = fixture.nativeElement
  //     .querySelector('.tooltip .tooltip-drop')
  //     .getAttribute('class');
  //   expect(elem).toContain('show');
  //   expect(elem).toContain('tooltip-top');
  // });

  // test('should show tooltip for right when cursor is over item', () => {
  //   component.position = Position.right;
  //   divTooltip.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   const elem = fixture.nativeElement
  //     .querySelector('.tooltip .tooltip-drop')
  //     .getAttribute('class');
  //   expect(elem).toContain('show');
  //   expect(elem).toContain('tooltip-right');
  // });

  // test('should show tooltip for bottom when cursor is over item', () => {
  //   component.position = Position.bottom;
  //   divTooltip.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   const elem = fixture.nativeElement
  //     .querySelector('.tooltip .tooltip-drop')
  //     .getAttribute('class');
  //   expect(elem).toContain('show');
  //   expect(elem).toContain('tooltip-bottom');
  // });

  // test('should show tooltip for left when cursor is over item', () => {
  //   component.position = Position.left;
  //   divTooltip.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   const elem = fixture.nativeElement
  //     .querySelector('.tooltip .tooltip-drop')
  //     .getAttribute('class');
  //   expect(elem).toContain('show');
  //   expect(elem).toContain('tooltip-left');
  // });

  // test('should show tooltip for left when cursor is over item with text "vissoto"', () => {
  //   component.position = Position.left;
  //   component.text = 'vissoto';
  //   divTooltip.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   const elem = fixture.nativeElement
  //     .querySelector('.tooltip .tooltip-drop')
  //     .getAttribute('class');
  //   expect(elem).toContain('show');
  //   expect(elem).toContain('tooltip-left');
  //   expect(
  //     fixture.nativeElement.querySelector('.tooltip .tooltip-drop').textContent
  //   ).toEqual('vissoto');
  // });
});
