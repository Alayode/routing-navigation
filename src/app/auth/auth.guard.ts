import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  {
	canActivate(
         next: ActivatedRouteSnapShot,
         state: RouterStateSnapshot
		): boolean {
		console.log('AuthGuard#canActivate called');
	} 
}
