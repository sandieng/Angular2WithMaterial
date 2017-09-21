import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder) {
        // Reactive Form with field validators        
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        })
    }

    onSubmit() {
        console.log(this.form.value);
        console.log(this.form.valid);
    }

    isValid(control) {
        this.form.controls.firstName.invalid && this.form.controls.firstName.touched;      
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}