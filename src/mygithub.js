//import {inject} from 'aurelia-framework',
import {HttpClient} from 'aurelia-http-client';

//@inject(HttpClient)
export class Mygithub {
    static inject() {
      return [HttpClient];
    }
    constructor(http) {
        this.http = http;
        this.url = 'https://api.github.com/users/xqcao/repos';
    }
    activate() {
        return this.http.get(this.url).then(
            result => this.repos = JSON.parse(result.response));
    }
}

// return this.http.get(this.url).then(result => this.repos = JSON.parse(
//   result.response));
