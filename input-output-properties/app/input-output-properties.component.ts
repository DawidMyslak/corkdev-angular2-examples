import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'input-output-properties',
    template: `
        <div class="container">
            <h1>Zippy</h1>
            <zippy title="My title">
                My content
            </zippy>
        </div>
    `,
    directives: [ZippyComponent]
})
export class InputOutputPropertiesComponent { }