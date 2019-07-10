import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
	{ path: 'crisis-center', component: CrisisListComponent },
	{ path: 'hero/:id',      component: HeroDetailComponent },
	{
		path: 'heroes',
		component: HeroListComponent,
		data: { title: 'Heroes List'}
	},
	{
		path: '',
		redirectTo: '/heroes',
		pathMatch: 'full'
	},
	{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
},

	// The ** Path in this route is our wildCard catching component
	// The router will seelct this route IF the requested URL Doesn't
	// match any paths for the routes defined earlier in our configuration
	// This is very useful if you would like to design a cool 404- Not Found
	// page or redirecting to another route.
	{
	    path: '**', 
	    component: PageNotFoundComponent 
	}
];

@NgModule({
  imports: [
  		RouterModule.forRoot(routes,
  		{ enableTracing: true } // debugging Purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
