import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + '/users');
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + '/users/' + id);
    }

    create(user: User) {
        return this.http.post(this.config.apiUrl + '/users', user);
    }

    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + '/users/' + id);
    }  
}