import {
  HttpClient
}
from 'aurelia-http-client';


export class GG {
  static inject() {
    return [HttpClient];
  }
  constructor(http) {
    this.http = http;
    this.url = 'https://api.github.com/users/xqcao/repos';
  }
  activate() {
    return this.http.get(this.url).then(result => this.repos = JSON.parse(
      result.response));
  }
}
