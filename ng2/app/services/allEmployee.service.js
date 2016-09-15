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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
//import rxjs operators before use
// import 'rxjs/add/operator/toPromise';
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AllEmployeeService = (function () {
    function AllEmployeeService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:8000/api/all"; //running locally only
    }
    //get all data
    AllEmployeeService.prototype.getAllData = function () {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //extract data
    AllEmployeeService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error("Bad response status: " + res.status);
        }
        var body = res.json();
        return body || {};
    };
    //error handler
    AllEmployeeService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server Error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    AllEmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AllEmployeeService);
    return AllEmployeeService;
}());
exports.AllEmployeeService = AllEmployeeService;
//# sourceMappingURL=allEmployee.service.js.map