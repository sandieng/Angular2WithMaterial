import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    BASE_URL = 'http://localhost:63145/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';
    
    constructor(private http: Http, private router : Router) {}

    // Just like C#: public string Name { get; }
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    // Just like C#: public boolean IsAuthenticated { get; }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user) {
        // Remove confirmPassword property from the user object. We don't need this in the backend
        delete user.confirmPassword;

        // Store Web API generated token in the local storage for future calls
        this.http.post(this.BASE_URL + '/register', user).subscribe(resp => {
            var authResponse = resp.json();

            if (!authResponse.token)
                return;

            localStorage.setItem(this.TOKEN_KEY, authResponse.token);
            localStorage.setItem(this.NAME_KEY, authResponse.firstName);

            this.router.navigate(['/']);
        });
    }

    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }
}