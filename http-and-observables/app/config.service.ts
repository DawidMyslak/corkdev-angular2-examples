import {Injectable} from 'angular2/core';

@Injectable()
export class ConfigService {
    getConfig() {
        let config = {
            apiUrl: 'https://api.github.com/search/repositories?callback=JSONP_CALLBACK',
            apiKey: ''
        };
        
        return config;
    }
}