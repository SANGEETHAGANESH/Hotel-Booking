import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {

  constructor() { }
  speciatilies=[
    {
      id:1,
      title:"Pick Up & Drop",
      desc:"We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
      icon:"fa fa-map-marker"
    },
    {
      id:2,
      title:"Parking Space",
      desc:"Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
      icon:"fa fa-car"
    },
    {
      id:3,
      title:"Room Service",
      desc:"Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
      icon:"fa fa-hotel"
    },
    {
      id:4,
      title:"Swimming Pool",
      desc:"Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.",
      icon:"fas fa-swimming-pool"
    },
    {
      id:5,
      title:"Fibre Internet",
      desc:"Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
      icon:"fa fa-wifi"
    },
    {
      id:6,
      title:"Breakfast",
      desc:"Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant",
      icon:"fas fa-hamburger"
    },
  ]  
}
