import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { Iproperty } from '../Property/Iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<Iproperty[]>{
    return  this.http.get<any[]>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<Iproperty> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id as keyof object].SellRent===SellRent){
          propertiesArray.push(data[id as keyof object]);
        }
      }
      return propertiesArray;
      })
    )
  }
}



