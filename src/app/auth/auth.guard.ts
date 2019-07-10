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
         next: ActivatedRouteSnapShot, // future route
         state: RouterStateSnapshot // future router state
		): boolean {
		console.log('AuthGuard#canActivate called');
		return this.checkLogin(url);
	} 

	checkLogin(url: string): boolean {
		if ( this.authService.isLoggedIn )  { return true; }

		// Store the attempted URL for redirecting 
		this.authService.redirectUrl = url;


		// Navigate to the login page with extras 
		// TODO: create the login Page
		this.router.navigate(['/login']);


		return false;

	}


}

/**
Notice that you inject the AuthService and the 
Router in the constructor. You haven't provided the 
AuthService yet but it's good to know that you can 
inject helpful serivces into the route guards

 
**/





