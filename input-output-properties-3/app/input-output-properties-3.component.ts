import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'input-output-properties-3',
    template: `
        <div class="container">
            <h1>Zippy</h1>
            <div class="alert alert-info">Zippy state: <strong>{{state}}</strong></div>
            <zippy title="My title" (open)="onOpen()" (close)="onClose()">
                My content
            </zippy>
        </div>
    `,
    directives: [ZippyComponent]
})
export class InputOutputProperties3Component {
    state: string = State.CLOSED;
    
    onOpen() {
        this.state = State.OPENED;
    }
    
    onClose() {
        this.state = State.CLOSED;
    }
}

class State {
    public static OPENED: string = 'opened';
    public static CLOSED: string = 'closed';
}