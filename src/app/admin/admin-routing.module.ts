import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '',
				children: [
					{ path: 'crisis', component: ManageCrisisComponent },
					{ path: 'heroes', component: ManageHeroesComponent },
					{ path: '', component: AdminDashboardComponent },

				]
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
