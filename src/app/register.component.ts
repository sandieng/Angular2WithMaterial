import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,         // Uses relative path to get to 'register.component.html'
    selector: 'register',
    templateUrl: 'register.component.html',     // Notice there is no './' to the html path
    styles: [`
        .error { background-color: #fff0f0 }
    `]
})
export class RegisterComponent {
    form;

    constructor(private fb: FormBuilder, private auth: AuthService) {
        // Reactive Form with field validators        
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, emailValid()]],   // Multiple validators for email
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: matchingFields('password', 'confirmPassword') }
        )
    }

    onSubmit() {
        // console.log(this.form.value);
        // console.log(this.form.valid);
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    }

    isValid(controlName) {
        //this.form.controls.firstName.invalid && this.form.controls.firstName.touched;
        return this.form.controls[controlName].invalid && this.form.controls[controlName].touched;
    }
}

function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value) {
            return { mismatchedFields: true }
        }
    }
}

function emailValid() {
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(control.value) ? null : { invalidEmail : true }
    }
}