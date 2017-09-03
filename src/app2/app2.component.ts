import {Component, NgZone, Inject} from '@angular/core';

import {heightOfNavbar} from '../root-application/root-application.js';
import {heightOfNavbarReact} from '../app1/app1.js';

@Component({
	selector: 'app2',
	template: `
		<base href="/">
		<div class="daniele" style="margin-top: 100px;">
			This was rendered by App2 which is written in Angular
		</div>
		<a [routerLink]="['/crisis-center']" routerLinkActive="active">Crisis Center</a>
		<a [routerLink]="['/lucky-center']" routerLinkActive="active">Lucky Center</a>

		<router-outlet></router-outlet>
	`,
})
export class App2 {

	constructor(){
		heightOfNavbar.subscribe((height) => {
			console.log('height from Parent', height);
		});

		heightOfNavbarReact.subscribe((height) => {
			console.log('height from React', height);
		})
	}

}
