import {Component} from 'angular2/core';

@Component({
    selector: 'basic-directives',
    template: `
        <div class="container">
            <h1>{{title}}</h1>
            <ul>
                <li *ngFor="#color of colors">
                    {{color}}
                </li>
            </ul>
            <p *ngIf="colors.length > 3">We have more than 3 colors!</p>
        </div>
    `
})
export class BasicDirectivesComponent {
    title: string = 'Colors';
    colors: string[] = ['red', 'green', 'blue'];
    
    constructor() {
        setTimeout(() => {
            this.colors.push('white');
            this.colors.push('black');
        }, 2000);
    }
}