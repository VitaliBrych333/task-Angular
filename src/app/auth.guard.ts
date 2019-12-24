import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthServiceService } from './breadcrumbs/auth-service.service';
import { map, catchError, filter } from 'rxjs/operators';
// import { map } from 'rxjs/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthServiceService, private router: Router) {};


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuthenticated().pipe(
        map((res: any[]) => {

          let user = res.filter((obj: any) =>
          obj.fakeToken.toString() === localStorage.getItem('fakeToken'));
          if (user.length===1) {           ;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }),
        catchError((err) => {
          return of(false);
        })
      );

    }



  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
