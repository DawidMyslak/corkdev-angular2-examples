import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Sample1Component} from './sample1.component';
import {Sample2Component} from './sample2.component';
import {Sample3Component} from './sample3.component';
import {InputOutputProperties2Component} from './../../input-output-properties-2/app/input-output-properties-2.component';

@Component({
    selector: 'routing',
    template: `
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Sample1']">Sample 1</a></li>
                        <li><a [routerLink]="['Sample2']">Sample 2</a></li>
                        <li><a [routerLink]="['Sample3']">Sample 3</a></li>
                        <li><a [routerLink]="['InputOutputProperties2']">Zippies</a></li>
                    </ul>
            </div>
        </nav>
        <div class="wrapper">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .wrapper {
            padding-top: 50px;
        }
    `]
})
@RouteConfig([
    { path: '/sample-1', name: 'Sample1', component: Sample1Component, useAsDefault: true },
    { path: '/sample-2', name: 'Sample2', component: Sample2Component },
    { path: '/sample-3', name: 'Sample3', component: Sample3Component },
    { path: '/input-output-properties-2', name: 'InputOutputProperties2', component: InputOutputProperties2Component }
])
export class RoutingComponent { }