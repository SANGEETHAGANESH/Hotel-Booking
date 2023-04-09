import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {

  constructor() { }
  roomDetail=[
    {
      id:1,
      title:"Single Room",
      bed:1,
      person:2,
      children:1,
      desc:"All our Single Room have big windows to help you take a broad view of the cityscape and nature",
      price:1000,
      image:"../../../assets/image/room10-768x660.jpeg"
    },
    {
      id:2,
      title:"Family Room",
      bed:2,
      person:4,
      children:2,
      desc:"All our Family room have big windows to help you take a broad view of the cityscape and nature",
      price:4000,
      image:"../../../assets/image/room08-768x660.jpeg"
    },
    {
      id:3,
      title:"Couple Room",
      bed:1,
      person:2,
      children:0,
      desc:"All our Couple room have big windows to help you take a broad view of the cityscape and nature",
      price:1400,
      image:"../../../assets/image/room10-768x660.jpeg"
    },
  ]
}
