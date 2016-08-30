"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var DetailsService = (function () {
    // inject an instance of Http whenever HeroService is instanitated
    function DetailsService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    DetailsService.prototype.getDetails = function () {
        return this.http.get('http://localhost:3399/todos', { headers: this.headers, body: '' }).
            map(this.extractData).
            catch(this.handleError);
    };
    DetailsService.prototype.extractData = function (res) {
        console.log("dfvfe" + res);
        var body = res.json();
        if (body.data && body.data instanceof Array) {
            return body.data;
        }
        else if (body && body instanceof Array || body instanceof Object) {
            return body;
        }
        else {
            return [];
        }
    };
    DetailsService.prototype.addDetails = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3399/todos', body, options).toPromise().
            then(this.extractData).
            catch(this.handleError);
        /*return this.http.post('http://localhost:3399/todos', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);*/
    };
    DetailsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DetailsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DetailsService);
    return DetailsService;
}());
exports.DetailsService = DetailsService;
//# sourceMappingURL=details.service.js.map