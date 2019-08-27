import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.styl']
})
export class IconComponent implements OnInit {

  @Input() icon:String = "fa-home"
  @Input() size:String
  @Input() color:String = "#000000"
  constructor() {
  }

  ngOnInit() {
  }

}
