import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';
//alterify  injection
@Injectable({
  providedIn: 'root'
})
export class AltertifyService {

constructor() { }
   success(message:string){
    alertyfy.success(message)
   }

   warning(message:string){
    alertyfy.success(message)
   }

   error(message:string){
    alertyfy.success(message)
   }


}
