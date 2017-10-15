import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

import { FormsModule } from '@angular/forms';

describe('This is calculator test suite', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('n1 and n2 should be zro', () => {
    expect(component.n1).toBe(0);
  });

  it('sum 1+1 = 2', () => {
    component.n1 = 1;
    component.n2 = 1;
    component.sum();
    expect(component.result).toBe(2);
  });
  it('result should be 2 in textbox', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = '2';
    expect(compiled.querySelector('input').value).toBe('2');
  });
});
