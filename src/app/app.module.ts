import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { WebService } from './web.service';

var routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'messages/:name', component: MessagesComponent}
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, MaterialModule, FormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavComponent, HomeComponent, MessagesComponent, NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService ]
})
export class AppModule { }
