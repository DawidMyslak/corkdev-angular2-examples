import {Component} from 'angular2/core';

@Component({
    selector: 'basic-directives',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="#color of colors">
                {{color}}
            </li>
        </ul>
        <p *ngIf="colors.length < 5">We have less than five colors</p>
        <p *ngIf="colors.length > 3">We have more than three colors</p>
    `
})
export class BasicDirectivesComponent {
    title: string = 'Basic Directives';
    colors: string[] = ['red', 'green', 'blue'];
    
    constructor() {
        setTimeout(() => {
            this.colors.push('white');
            this.colors.push('black');
        }, 2000);
    }
}