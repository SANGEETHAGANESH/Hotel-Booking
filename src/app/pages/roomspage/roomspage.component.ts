import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomDetailsService } from 'src/app/services/room-details.service';

@Component({
  selector: 'app-roomspage',
  templateUrl: './roomspage.component.html',
  styleUrls: ['./roomspage.component.css']
})
export class RoomspageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:RoomDetailsService) { }
  getId:any;
  roomData:any;
  ngOnInit(): void {
    this.getId=this.param.snapshot.paramMap.get('id');
    if(this.getId){
      this.roomData=this.service.roomDetail.filter((value)=>
      {
        return value.id==this.getId;
      });
    }
  }

}
