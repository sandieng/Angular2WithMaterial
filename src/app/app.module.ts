import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

var routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'messages/:name', component: MessagesComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavComponent, HomeComponent, RegisterComponent, MessagesComponent, NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService, AuthService ]
})
export class AppModule { }
