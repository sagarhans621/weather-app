import { Component } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lat: any;
  long: any;
  weather: any;
  searchPlace: any;
  alertButtons = ['Ok']
  isAlertOpen: boolean = false;
  hours!: any;
  min!: any;
  sunrise!: any;
  sunset!: any;
  constructor(private rest:RestService, private alertController : AlertController) {
    this.getLocation();
  }

  ionViewWillEnter(){
    // console.log(this.lat, this.long, 'lat/long')
    // this.rest.getCurrentWeather(this.lat, this.long).subscribe((res:any)=>{
    //   console.log("res", res)
    // })
  }

  async presentAlert(message:any) {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  getLocation() {
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((location) => {
         this.lat =  location.coords.latitude;
         this.long =  location.coords.longitude;
         console.log("lat/long", this.lat , this.long )
         localStorage.setItem('lat', this.lat);
         localStorage.setItem('long', this.long);

         this.getCurrentWeather(location.coords.latitude, location.coords.longitude);
        //  this.getReverseGeocodingData(this.lat, this.long);
      },
      (err)=> {this.presentAlert('Error getting location. Please check if you have sufficient geolocation permission or check internet connection.')});
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
   }

   getCurrentWeather(lat:any, long:any){
   
    this.getCurrentTime();
    this.rest.getCurrentWeather(lat,long).subscribe((res:any)=>{
      console.log("res", res);
      this.weather = res;

      this.sunrise = this.getSunriseSumsetTime(res?.sys?.sunrise);
      this.sunset = this.getSunriseSumsetTime(res?.sys?.sunset);

      console.log(this.sunrise, this.sunset)
    },
    (err:any)=>{this.presentAlert(err?.error?.message)})
   }

   getCurrentTime(){
    let currentDate = new Date();
    this.hours = currentDate.getHours();
    this.min = currentDate.getMinutes();

    console.log(this.hours, this.min)
    if(this.min < 10 ){
      this.min = `0${this.min}`;
    }

    if(this.hours < 10){
      this.hours = `0${this.hours}`;
    }

   }

   setSearchPlace(value:any){
    this.searchPlace = value;
    console.log(this.searchPlace);
   }

   getPlaceWeather(){
    this.getCurrentTime();
    this.rest.getLocationByCityName(this.searchPlace).subscribe((res:any)=>{
      console.log(res);
      this.weather = res;

     
    },
    (err:any)=>{
      console.log(err);
      this.presentAlert(err?.error?.message)
    })
   }

   getSunriseSumsetTime(unix_timestamp:any) {
    var date = new Date(unix_timestamp * 1000);

    // Hours part from the timestamp
    var hours = date.getHours();

    let hour;
    if(hours < 10){
      hour = `0${hours}`
    }else{
      hour = hours
    }
    
    // Minutes part from the timestamp
    var minutes =  date.getMinutes();
    return hour + ':' + minutes;
  }

  

}
