import {RouterModule, Router, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutUsComponent} from './component/about-us/about-us.component';
import {ContactUsComponent} from './component/contact-us/contact-us.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductComponent} from './component/product/product.component';
import {LoginComponent} from './component/login/login.component';
import { SecurePage , DisablePage} from './app.routeSettings';
import {AdminHomepageComponent} from './component/admin-homepage/admin-homepage.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { PaymentListComponent } from './component/payment-list/payment-list.component';



import {ModuleWithProviders} from '@angular/core'; // To hold runtime provider.

const pageMapping: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactUsComponent, canActivate: [SecurePage]},
    {path: 'login', component: LoginComponent},
    // This will disable all links in product-list page.
    {path: 'product-list', component: ProductListComponent, canDeactivate: [DisablePage]},
    // Admin pages
    // {path: 'admin', component: AdminHomepageComponent},
    {path: 'product/:id', component: ProductComponent},
    {path: 'admin', component: AdminHomepageComponent, children: [
      {path: 'user', component: UserListComponent},
      {path: 'payment', component: PaymentListComponent},
    ]},
    {path: '**', component: PageNotFoundComponent}
];

export const pageMappingRoute: ModuleWithProviders = RouterModule.forRoot(pageMapping);




