import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items = ["Angular","React","Underscore"];
  newItem="";
  pushItem = function(){
  
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem="";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
