import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'user',
    template: `
        <md-card class="card">
            <md-input-container>
                <input mdInput placeholder="First Name" [(ngModel)]="model.firstName">
            </md-input-container>
            <md-input-container>
            <input mdInput placeholder="Last Name" [(ngModel)]="model.lastName">
        </md-input-container>
        </md-card>
    `
})
export class UserComponent {
    model = {
        firstName: '',
        lastName: ''
    }

    constructor(private webService: WebService) {}

    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        })
    }
}