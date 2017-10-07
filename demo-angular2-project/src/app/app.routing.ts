import {RouterModule, Router, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutUsComponent} from './component/about-us/about-us.component';
import {ContactUsComponent} from './component/contact-us/contact-us.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductComponent} from './component/product/product.component';



import {ModuleWithProviders} from '@angular/core'; // To hold runtime provider.

const pageMapping: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'product-list', component: ProductListComponent},
    {path: 'product/:id', component: ProductComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const pageMappingRoute: ModuleWithProviders = RouterModule.forRoot(pageMapping);




