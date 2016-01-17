import {bootstrap} from 'angular2/platform/browser';
import {DependencyInjectionComponent} from './dependency-injection.component';
import {LoggerService} from './logger.service';

bootstrap(DependencyInjectionComponent, [LoggerService]);