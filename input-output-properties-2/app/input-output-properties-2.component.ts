import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'input-output-properties-2',
    template: `
        <div class="container">
            <h1>Zippies</h1>
            <div class="form-group">
                <label>Title</label>
                <input [(ngModel)]="title" class="form-control">
            </div>
            <div class="form-group">
                <label>Content</label>
                <input [(ngModel)]="content" class="form-control">
            </div>
            <zippy title="{{title}} 1">
                {{content}} 1
            </zippy>
            <zippy title="{{title}} 2">
                {{content}} 2
            </zippy>
            <zippy title="{{title}} 3">
                {{content}} 3
                <zippy title="{{title}} 4">
                    {{content}} 4
                </zippy>
            </zippy>
        </div>
    `,
    directives: [ZippyComponent]
})
export class InputOutputProperties2Component {
    title: string = 'Title';
    content: string = 'Content';
}