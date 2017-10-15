import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {LoginServiceService} from './service/login-service.service';
import { SimplepipePipe } from './simplepipe.pipe';
import { SortpipePipe } from './sortpipe.pipe';
import { SummarydirectiveDirective } from './summarydirective.directive';
import { HookcomponentComponent } from './hookcomponent/hookcomponent.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
