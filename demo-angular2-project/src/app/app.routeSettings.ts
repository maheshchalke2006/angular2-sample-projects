import {Injectable, Inject} from '@angular/core';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';

import {ProductListComponent} from './component/product-list/product-list.component';

import {LoginService} from './../app/service/login.service';

@Injectable()
export class SecurePage implements CanActivate {
    constructor(@Inject(LoginService) private loginService: LoginService) {    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(this.loginService.userName);
        if (this.loginService.userName === 'User1') {
            return true;
        }
        if (this.loginService.userName === 'User2') {
            return false;
        }
        return false; // If you return false the page will not open
    }
}

@Injectable() // To specity becuase its service
export class DisablePage implements CanDeactivate<ProductListComponent> {
    canDeactivate(component: ProductListComponent) {
        return false;
    }
}
