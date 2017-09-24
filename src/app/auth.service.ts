import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
    BASE_URL = 'http://localhost:63145/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http: Http, private sb: MdSnackBar, private router: Router) { }

    // Just like C#: public string Name { get; }
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    // Just like C#: public boolean IsAuthenticated { get; }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get tokenHeader() {
        var header = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });

        return new RequestOptions({ headers: header });
    }

    register(user) {
        // Remove confirmPassword property from the user object. We don't need this in the backend
        delete user.confirmPassword;

        // Store Web API generated token in the local storage for future calls
        this.http.post(this.BASE_URL + '/register', user).subscribe(resp => {
            this.authenticate(resp);
        });
    }

    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(resp => {
            console.log(resp);
            this.authenticate(resp);
        },
            error => {
                this.sb.open("Login failed: " + error.json(), 'close', { duration: 2000 });
            })
    }

    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }

    authenticate(resp) {
        var authResponse = resp.json();

        if (!authResponse.token)
            return;

        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);

        this.router.navigate(['/']);
    }
}