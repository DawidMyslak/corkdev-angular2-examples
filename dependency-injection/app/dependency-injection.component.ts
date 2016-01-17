import {Component} from 'angular2/core';
import {LoggerService} from './logger.service';

@Component({
    selector: 'dependency-injection',
    template: '<h1>Dependency Injection</h1><p>Check console!</p>'
})
export class DependencyInjectionComponent {
    constructor(private _loggerService: LoggerService) {
        _loggerService.log('log');
        _loggerService.warn('warn');
        _loggerService.error('error');
    }
}