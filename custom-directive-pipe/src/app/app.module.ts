import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {LoginServiceService} from './service/login-service.service';
import { SimplepipePipe } from './simplepipe.pipe';
import { SortpipePipe } from './sortpipe.pipe';
import { SummarydirectiveDirective } from './summarydirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SimplepipePipe,
    SortpipePipe,
    SummarydirectiveDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
