import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  {
	
	constructor(private authService: AuthService,
	            private router: Router ) {}


	canActivate(
         next: ActivatedRouteSnapShot,
         state: RouterStateSnapshot
		): boolean {
		console.log('AuthGuard#canActivate called');
		return this.checkLogin(url);
	} 

	checkLogin(url: string): boolean {
		if ( this.authService.isLoggedIn )  { return true; }

		// Store the attempted URL for redirecting 
		this.authService.redirectUrl = url;


		// Navigate tot he login page with extras 
		this.router.navigate(['/login']);

		return false;

	}


}
