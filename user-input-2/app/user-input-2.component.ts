import {Component} from 'angular2/core';

@Component({
    selector: 'user-input-2',
    templateUrl: 'app/user-input-2.component.html'
})
export class UserInput2Component {
    colors: string[] = ['red', 'green', 'blue'];
    selectedColor: number;

    onSelect(color: number) {
        this.selectedColor = color;
    }

    addColor(color: string) {
        if (color) {
            this.colors.push(color);
        }
    }
}