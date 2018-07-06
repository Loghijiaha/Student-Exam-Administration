import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './shared/user.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: UserService,
              private myRoute: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth._isLoggedIn) {
      return true;
    } else {
      this.myRoute.navigate(['login']);
      return false;
    }  }
}