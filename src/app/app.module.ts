import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { WebService } from './web.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, MaterialModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, NavComponent, MessagesComponent, NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService ]
})
export class AppModule { }
