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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_config_1 = require("../app.config");
var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getAll = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": "true"
        });
        return this.http.get(this.config.apiUrl + '/users', { headers: headers, withCredentials: true });
    };
    UserService.prototype.getById = function (id) {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": "true"
        });
        return this.http.get(this.config.apiUrl + '/users/' + id, { headers: headers, withCredentials: true });
    };
    UserService.prototype.create = function (user) {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true"
        });
        return this.http.post(this.config.apiUrl + '/users', user, { headers: headers, withCredentials: true });
    };
    UserService.prototype.update = function (user) {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "PUT",
            "Access-Control-Allow-Credentials": "true"
        });
        return this.http.put(this.config.apiUrl + '/users/' + user.id, user, { headers: headers, withCredentials: true });
    };
    UserService.prototype.delete = function (id) {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "DELETE",
            "Access-Control-Allow-Credentials": "true"
        });
        return this.http.delete(this.config.apiUrl + '/users/' + id, { headers: headers, withCredentials: true });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, app_config_1.AppConfig])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map