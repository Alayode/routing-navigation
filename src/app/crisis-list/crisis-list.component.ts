import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

     activeRoute;

	constructor(private activatedRoute: ActivatedRoute) {
		 this.activatedRoute
	}

	    ngOnInit() {
	    	this.activeRoute = this.activatedRoute;
	    }
}
