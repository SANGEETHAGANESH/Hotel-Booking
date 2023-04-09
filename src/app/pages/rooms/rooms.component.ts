import { Component, OnInit } from '@angular/core';
import { RoomDetailsService } from 'src/app/services/room-details.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private service :RoomDetailsService) { }
  roomData:any;
  ngOnInit(): void {
    this.roomData=this.service.roomDetail;
  }

}
