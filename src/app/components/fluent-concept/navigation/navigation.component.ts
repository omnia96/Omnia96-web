import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent implements OnInit {
  IsNavBar:boolean
  constructor() { 

  }

  ngOnInit() {
  }
  ChangeNavBar(){
    event.stopPropagation()
    let width:number = window.innerWidth
    if(width < 479){
      this.IsNavBar = !this.IsNavBar
    }
  }
  CloseNavBar(){
    event.stopPropagation()
    let width:number = window.innerWidth
    if(width < 479){
      this.IsNavBar = false
    }
  }
  DotTOClick(){
    event.stopPropagation()
  }

}
