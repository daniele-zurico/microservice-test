import {Component, NgZone, Inject} from '@angular/core';

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
}
