import {Component} from 'angular2/core';

@Component({
    selector: 'hello-world-2',
    template: '<h1>{{greetings}}</h1>'
})
export class HelloWorld2Component {
    greetings: string;

    constructor() {
        this.greetings = 'Hello World!';

        setTimeout(() => {
            this.greetings = 'Hello CorkDev!';
        }, 2000);
    }
}