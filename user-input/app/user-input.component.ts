import {Component} from 'angular2/core';

@Component({
    selector: 'user-input',
    template: `
        <div class="container">
            <h1>Colors</h1>
            <div class="list-group">
                <a *ngFor="#color of colors; #i = index"
                    (click)="onSelect(i)"
                    [class.active]="i === selectedColor"
                    class="list-group-item"
                    href="#">
                    {{i + 1}}) {{color}}
                </a>
            </div>
            <div *ngIf="selectedColor >= 0" class="alert alert-success">
                My favourite color is <strong>{{colors[selectedColor]}}</strong>
            </div>
        </div>
    `
})
export class UserInputComponent {
    colors: string[] = ['red', 'green', 'blue', 'white', 'black'];
    selectedColor: number;

    onSelect(color: number) {
        this.selectedColor = color;
    }
}