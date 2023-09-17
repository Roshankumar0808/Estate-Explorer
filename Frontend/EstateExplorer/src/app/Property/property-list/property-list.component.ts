
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  Properties: Iproperty[];
  


  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
       data=>{
         this.Properties=data;
        console.log(data);
        },error=>{
          console.log(error);
        }
        
    )
  }

}
