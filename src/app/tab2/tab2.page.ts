import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  long!: string | null;
  lat!: string | null;
  weatherList: any = [];
  placeName: any;
  country: any;
  responsePlace: any;

  constructor(private rest :RestService, private alertController :  AlertController) {}

  ngOnInit(){
    this.lat = localStorage.getItem('lat');
    this.long = localStorage.getItem('long');
  }
  ionViewWillEnter(){
    this.getweatherForNextDays();
  }

  getweatherForNextDays(){
    this.weatherList = [];
    this.rest.getWeatherForNextDays(this.lat, this.long).subscribe((res:any)=>{
      let weatherList = res?.list;
      this.responsePlace = res?.city?.name;
      this.country = res?.city?.country;
      for (let i = 0; i < weatherList.length; i += 8) {
        console.log(weatherList[i])
        weatherList[i].dt_txt = this.getDateFromDateTime(weatherList[i].dt_txt);
        this.weatherList.push(weatherList[i]);
      }

      console.log("this.weatherList---", this.weatherList);
    },
    (err:any)=>{this.presentAlert(err?.error?.message)});
  }

  async presentAlert(message:any) {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getDateFromDateTime(dt:any){
    console.log(dt)
    let originalDate = new Date(dt);
    let day = originalDate.getDate(); // 1-31
    let month = originalDate.getMonth() + 1; // 0-11 (January is 0, so we add 1)
    
    
    // Pad the day and month with leading zeros if necessary
    let formattedDay = day < 10 ? `0${day}` : day;
    let formattedMonth = month < 10 ? `0${month}` : month;
    console.log('day/month', `${formattedDay}/${formattedMonth}` );
    // Form the "dd/mm" date format
    return  `${formattedDay}/${formattedMonth}`;
  }

  getPlaceWeather(placeName:any){
    this.weatherList = [];
    console.log("place city", this.placeName)
    this.rest.getPlaceWeatherForecast(placeName).subscribe((res:any)=>{
      let weatherList = res?.list;
      this.responsePlace = res?.city?.name;

      for (let i = 0; i < weatherList.length; i += 8) {
        console.log(weatherList[i])
        weatherList[i].dt_txt = this.getDateFromDateTime(weatherList[i].dt_txt);
        this.weatherList.push(weatherList[i]);
      }
    },
    (err:any)=>{this.presentAlert(err?.error?.message)})
  }

  setSearchPlace(value:any){
    this.placeName = value;
  }
}
