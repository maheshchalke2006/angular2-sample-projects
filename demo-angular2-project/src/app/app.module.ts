import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

import {pageMappingRoute} from './app.routing';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';

import { SecurePage, DisablePage } from './app.routeSettings';
import { LoginComponent } from './component/login/login.component';

import { LoginService } from './service/login.service';

import { FormsModule } from '@angular/forms';
import { AdminHomepageComponent } from './component/admin-homepage/admin-homepage.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { PaymentListComponent } from './component/payment-list/payment-list.component';
import { Router, Routes, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    AdminHomepageComponent,
    UserListComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, pageMappingRoute, FormsModule
  ],
  providers: [SecurePage, DisablePage, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

const pageRouting: Routes = [
  {
    
  }
];
