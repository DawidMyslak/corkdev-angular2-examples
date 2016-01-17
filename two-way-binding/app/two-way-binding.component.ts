import {Component} from 'angular2/core';

@Component({
    selector: 'two-way-binding',
    template: `
        <div class="container">
            <h1>Colors</h1>
            <ul class="list-group">
                <li *ngFor="#color of colors; #i = index"
                    class="list-group-item">
                    {{color | lowercase}}
                    <button (click)="removeColor(i)" class="btn btn-link btn-xs pull-right">
                        <span class="glyphicon glyphicon-remove"></span>
                    </button>
                </li>
            </ul>
            <div class="form-group">
                <input [(ngModel)]="color" (keyup.enter)="addColor()" class="form-control">
            </div>
            <div class="alert alert-info">Color: <strong>{{color}}</strong></div>
        </div>
    `
})
export class TwoWayBindingComponent {
    colors: string[] = ['red', 'green', 'blue'];
    color: string;
    
    addColor() {
        if (this.color) {
            this.colors.push(this.color);
            this.color = '';
        }
    }
    
    removeColor(index) {
        this.colors.splice(index, 1);
    }
}