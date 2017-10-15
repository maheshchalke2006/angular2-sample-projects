import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SimplepipePipe } from './simplepipe.pipe';
import { SortpipePipe } from './sortpipe.pipe';
import { SummarydirectiveDirective } from './summarydirective.directive';
import { HookcomponentComponent } from './hookcomponent/hookcomponent.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CalculatorComponent } from './calculator/calculator.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      LoginComponent,
      SimplepipePipe,
      SortpipePipe,
      SummarydirectiveDirective,
      HookcomponentComponent,
      CalculatorComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule
    ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  /*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});
