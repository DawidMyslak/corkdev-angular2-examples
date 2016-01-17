import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {LoggerService} from './logger.service';
import {ConfigService} from './config.service';

@Injectable()
export class GithubService {
    constructor(private _jsonp: Jsonp,
        private _loggerService: LoggerService,
        private _configService: ConfigService) { }

    findRepositories(queries: Observable<string>) {
        return queries
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((query: string) => this.performRequest(query));
    }

    performRequest(query: string) {
        var search = new URLSearchParams();

        search.set('q', query);
        search.set('sort', 'stars');
        search.set('order', 'desc');
        search.set('format', 'json');

        this._loggerService.log('http request started');

        return this._jsonp
            .get(this._configService.getConfig().apiUrl, { search })
            .map((request) => request.json().data.items);
    }
}
