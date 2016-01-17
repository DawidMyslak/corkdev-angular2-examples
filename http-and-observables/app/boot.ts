import {bootstrap} from 'angular2/platform/browser';
import {JSONP_PROVIDERS} from 'angular2/http';
import {HttpAndObservablesComponent} from './http-and-observables.component';
import {GithubService} from './github.service';
import {LoggerService} from './logger.service';
import {ConfigService} from './config.service';

bootstrap(HttpAndObservablesComponent, [GithubService, LoggerService, ConfigService, JSONP_PROVIDERS]);