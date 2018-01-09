import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    login(username: string, password: string) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"*",
            "Access-Control-Allow-Credentials": "true"
        });

        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password }, { headers, withCredentials: true })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = <any>response;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // call service to remove token

        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }    
}