import {NgModule, OnDestroy} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {App2} from './app2.component.ts';
import {CrisisListComponent} from './CrisisListComponent.ts';
import {LuckyListComponent} from './LuckyListComponent.ts';

import {enableProdMode} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

const appRoutes: Routes = [
	{
		path: 'crisis-center',
		component: CrisisListComponent
	},
	{
		path: 'lucky-center',
		component: LuckyListComponent
	},
];

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, {
			enableTracing: true, useHash: true
		}),
	],
	providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}],
	declarations: [
		App2,
		CrisisListComponent,
		LuckyListComponent
	],
	bootstrap: [App2]
})
export default class MainModule {

}
