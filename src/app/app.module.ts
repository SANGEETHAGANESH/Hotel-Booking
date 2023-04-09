import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './top-bottom/navbar/navbar.component';
import { FooterComponent } from './top-bottom/footer/footer.component';
import { RoomspageComponent } from './pages/roomspage/roomspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    RoomspageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
