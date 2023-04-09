import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomspageComponent } from './pages/roomspage/roomspage.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'rooms/:id',component:RoomspageComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }