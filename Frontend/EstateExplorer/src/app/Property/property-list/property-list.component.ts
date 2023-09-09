import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any>=[
    {
    "Id":1,
    "Name":"Ajay Niwas",
    "Type":"House",
    "Price":11000
    },
    {
      "Id":2,
      "Name":"Blue Pearl",
      "Type":"Apartment",
      "Price":12000
    },
    {
        "Id":3,
        "Name":"White Field",
        "Type":"Apartment",
        "Price":13000
    },
    {
          "Id":4,
          "Name":"Raj Bhawan",
          "Type":"House",
          "Price":14000
    },
    {
            "Id":5,
            "Name":"Bharat Builders",
            "Type":"Plot",
            "Price":15000
    }   

  ]
  constructor() { }

  ngOnInit() {
  }

}
