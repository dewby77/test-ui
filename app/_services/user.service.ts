import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    getAll() {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"https://testangularwebui.azurewebsites.net",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"GET"
        });

        return this.http.get(this.config.apiUrl + '/users', { headers, withCredentials: true });
    }

    getById(id: number) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"https://testangularwebui.azurewebsites.net",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"GET"
        });

        return this.http.get(this.config.apiUrl + '/users/' + id, { headers, withCredentials: true });
    }

    create(user: User) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"https://testangularwebui.azurewebsites.net",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"POST"
        });

        return this.http.post(this.config.apiUrl + '/users', user, { headers, withCredentials: true });
    }

    update(user: User) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"https://testangularwebui.azurewebsites.net",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"PUT"
        });

        return this.http.put(this.config.apiUrl + '/users/' + user.id, user, { headers, withCredentials: true });
    }

    delete(id: number) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"https://testangularwebui.azurewebsites.net",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"DELETE"
        });

        return this.http.delete(this.config.apiUrl + '/users/' + id, { headers, withCredentials: true });
    }  
}