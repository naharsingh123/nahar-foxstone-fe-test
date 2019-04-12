import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {environment} from './../../../../src/environments/environment'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfferingsService {

  constructor(private http: HttpClient) { }


  getOfferings(){
          
      return this.http.get(environment.apiBaseUrlServer+environment.offerings);
  }

}
