import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <md-card class="card">
            <md-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer">{{message.owner}}</md-card-title>
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    </div>
    `
})
export class MessagesComponent {
    messages;
    
    constructor(private webService : WebService, private route: ActivatedRoute) {}
    
    ngOnInit() {
        // This is how you get to the incoming parameter when messages.component is routed into
        var name = this.route.snapshot.params.name;
        console.log(name);

        this.webService.getMessages(name);

        // Subscribes to changes in messages
        this.webService.messages.subscribe(x => {
            this.messages = x;
        });

        // Test: Get user information
        this.webService.getUser().subscribe();
    }
}