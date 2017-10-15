import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookcomponentComponent } from './hookcomponent.component';

import { FormsModule } from '@angular/forms';

describe('HookcomponentComponent', () => {
  let component: HookcomponentComponent;
  let fixture: ComponentFixture<HookcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookcomponentComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
