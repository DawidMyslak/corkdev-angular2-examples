import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div (click)="toggle()" class="panel-heading">
                <h3 class="panel-title">
                    <span [ngClass]="{'glyphicon-triangle-bottom': isVisible, 'glyphicon-triangle-right': !isVisible}" class="glyphicon"></span> {{title}}
                </h3>
            </div>
            <div [hidden]="!isVisible" class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .panel-heading {
            cursor: pointer;
        }
        .glyphicon {
            color: #888;
            font-size: 14px;
        }
    `]
})
export class ZippyComponent {
    @Input() title: string;
    isVisible: boolean = false;

    toggle() {
        this.isVisible = !this.isVisible;
    }
}