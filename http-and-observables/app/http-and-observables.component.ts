import {Component} from 'angular2/core';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {GithubService} from './github.service';

@Component({
    selector: 'http-and-observables',
    template: `
        <div class="container">
            <h2>Github Repositories</h2>
            <div class="form-group">
                <label>Search</label>
                <input [ngFormControl]="query" class="form-control">
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#item of items | async">
                        <td>{{item.name}}</td>
                        <td>{{item.owner.login}}</td>
                        <td><a href="{{item.html_url}}">{{item.html_url}}</a></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    `
})
export class HttpAndObservablesComponent {
    items: Observable<Array<string>>;
    query: Control = new Control();
    
    constructor(private _githubService: GithubService) {
        this.items = this._githubService.findRepositories(this.query.valueChanges);
    }
}