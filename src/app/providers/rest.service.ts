import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) {  }

  getCurrentWeather(lat:any, long:any){
   return this.http.get(`${API_URL}weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
  }

  getLocationByCityName(city:string){
    return this.http.get(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);   
  }

  getWeatherForNextDays(lat:any, long:any){
    return this.http.get(`${API_URL}forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
  }

  getPlaceWeatherForecast(city:any){
    return this.http.get(`${API_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`)
  }
}
