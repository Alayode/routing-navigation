import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Router';

  activeRoute;

constructor(private activatedRoute: ActivatedRoute) {
	 this.activatedRoute
}

    ngOnInit() {
    	this.activeRoute = this.activatedRoute;
    }

}
