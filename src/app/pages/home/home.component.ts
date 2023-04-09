import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomDetailsService } from 'src/app/services/room-details.service';
import { SpecialitiesService } from 'src/app/services/specialities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SpecialitiesService,private roomService:RoomDetailsService,private router:Router) { }
  specialData:any;
  roomData:any;

  ngOnInit(): void {
    this.specialData=this.service.speciatilies;
    this.roomData=this.roomService.roomDetail;
  }
  room(){
    this.router.navigate(['rooms']);
  }
  contact(){
    this.router.navigate(['contact']);
  }
}
