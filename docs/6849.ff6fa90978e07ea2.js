"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6849],{6849:(B,c,r)=>{r.r(c),r.d(c,{Tab1PageModule:()=>j});var u=r(1024),g=r(6814),m=r(95),p=r(3554),w=r(3044),f=r(5861),e=r(6689),d=r(9434);function _(t,o){1&t&&e._UZ(0,"ion-icon",28)}function T(t,o){1&t&&e._UZ(0,"ion-icon",29)}function P(t,o){1&t&&e._UZ(0,"ion-icon",30)}function v(t,o){1&t&&e._UZ(0,"ion-icon",30)}function b(t,o){1&t&&e._UZ(0,"ion-icon",31)}function y(t,o){1&t&&e._UZ(0,"ion-icon",31)}function Z(t,o){1&t&&e._UZ(0,"ion-icon",32)}function C(t,o){1&t&&e._UZ(0,"ion-icon",33)}function M(t,o){1&t&&e._UZ(0,"ion-icon",34)}function I(t,o){1&t&&e._UZ(0,"ion-icon",35)}function U(t,o){1&t&&e._UZ(0,"ion-icon",36)}function O(t,o){1&t&&e._UZ(0,"ion-icon",30)}function J(t,o){1&t&&e._UZ(0,"ion-icon",30)}function A(t,o){1&t&&e._UZ(0,"ion-icon",30)}function N(t,o){1&t&&e._UZ(0,"ion-icon",31)}function Y(t,o){1&t&&e._UZ(0,"ion-icon",31)}const Q=[{path:"",component:(()=>{var t;class o{constructor(i,n){this.rest=i,this.alertController=n,this.alertButtons=["Ok"],this.isAlertOpen=!1,this.getLocation()}ionViewWillEnter(){}presentAlert(i){var n=this;return(0,f.Z)(function*(){yield(yield n.alertController.create({header:"Error!",message:i,buttons:["OK"]})).present()})()}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(i=>{this.lat=i.coords.latitude,this.long=i.coords.longitude,console.log("lat/long",this.lat,this.long),localStorage.setItem("lat",this.lat),localStorage.setItem("long",this.long),this.getCurrentWeather(i.coords.latitude,i.coords.longitude)},i=>{this.presentAlert("Error getting location. Please check if you have sufficient geolocation permission or check internet connection.")}):console.log("Geolocation is not supported by this browser.")}getCurrentWeather(i,n){this.getCurrentTime(),this.rest.getCurrentWeather(i,n).subscribe(l=>{var a,s;console.log("res",l),this.weather=l,this.sunrise=this.getSunriseSumsetTime(null==l||null===(a=l.sys)||void 0===a?void 0:a.sunrise),this.sunset=this.getSunriseSumsetTime(null==l||null===(s=l.sys)||void 0===s?void 0:s.sunset),console.log(this.sunrise,this.sunset)},l=>{var a;this.presentAlert(null==l||null===(a=l.error)||void 0===a?void 0:a.message)})}getCurrentTime(){let i=new Date;this.hours=i.getHours(),this.min=i.getMinutes(),console.log(this.hours,this.min),this.min<10&&(this.min=`0${this.min}`),this.hours<10&&(this.hours=`0${this.hours}`)}setSearchPlace(i){this.searchPlace=i,console.log(this.searchPlace)}getPlaceWeather(){this.getCurrentTime(),this.rest.getLocationByCityName(this.searchPlace).subscribe(i=>{console.log(i),this.weather=i},i=>{var n;console.log(i),this.presentAlert(null==i||null===(n=i.error)||void 0===n?void 0:n.message)})}getSunriseSumsetTime(i){var n=new Date(1e3*i),l=n.getHours();let a;return a=l<10?`0${l}`:l,a+":"+n.getMinutes()}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(d.v),e.Y36(u.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab1"]],decls:47,vars:26,consts:[[3,"translucent"],["color","primary"],["mode","ios"],[2,"--background-color","red"],[1,"input-bar"],["label","Place","label-placement","floating","fill","outline",3,"input"],["searchPlace",""],["color","warning",3,"click"],["name","search-outline"],[1,"time","temperature"],[1,"location"],[1,"weather-container"],["class","weather-icon","name","sunny-outline",4,"ngIf"],["class","weather-icon","name","partly-sunny-outline",4,"ngIf"],["class","weather-icon","name","cloud-outline",4,"ngIf"],["class","weather-icon","name","rainy-outline",4,"ngIf"],["class","weather-icon","name","thunderstorm-outline",4,"ngIf"],["class","weather-icon","name","snow-outline",4,"ngIf"],["class","weather-icon","name","cloud-offline-outline",4,"ngIf"],["class","weather-icon","name","moon-outline",4,"ngIf"],["class","weather-icon","name","cloudy-night-outline",4,"ngIf"],[2,"margin-top","0.5rem","opacity","0.8","margin-bottom","0px"],[1,"temperature"],[1,"feels-like"],[1,"description"],[1,"sun-set-rise"],["src","../../assets/icon/sunrise.svg","alt",""],["src","../../assets/icon/sunset.svg","alt",""],["name","sunny-outline",1,"weather-icon"],["name","partly-sunny-outline",1,"weather-icon"],["name","cloud-outline",1,"weather-icon"],["name","rainy-outline",1,"weather-icon"],["name","thunderstorm-outline",1,"weather-icon"],["name","snow-outline",1,"weather-icon"],["name","cloud-offline-outline",1,"weather-icon"],["name","moon-outline",1,"weather-icon"],["name","cloudy-night-outline",1,"weather-icon"]],template:function(i,n){if(1&i){const l=e.EpF();e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e._uU(3," Weather "),e.qZA()()(),e.TgZ(4,"ion-content",3)(5,"div",4)(6,"ion-input",5,6),e.NdJ("input",function(){e.CHM(l);const s=e.MAs(7);return e.KtG(n.setSearchPlace(s.value))}),e.qZA(),e.TgZ(8,"ion-button",7),e.NdJ("click",function(){return n.getPlaceWeather()}),e._UZ(9,"ion-icon",8),e.qZA()(),e.TgZ(10,"div",9),e._uU(11),e.qZA(),e.TgZ(12,"div")(13,"div",10),e._uU(14),e.qZA()(),e.TgZ(15,"div",11),e.YNc(16,_,1,0,"ion-icon",12),e.YNc(17,T,1,0,"ion-icon",13),e.YNc(18,P,1,0,"ion-icon",14),e.YNc(19,v,1,0,"ion-icon",14),e.YNc(20,b,1,0,"ion-icon",15),e.YNc(21,y,1,0,"ion-icon",15),e.YNc(22,Z,1,0,"ion-icon",16),e.YNc(23,C,1,0,"ion-icon",17),e.YNc(24,M,1,0,"ion-icon",18),e.YNc(25,I,1,0,"ion-icon",19),e.YNc(26,U,1,0,"ion-icon",20),e.YNc(27,O,1,0,"ion-icon",14),e.YNc(28,J,1,0,"ion-icon",14),e.YNc(29,A,1,0,"ion-icon",14),e.YNc(30,N,1,0,"ion-icon",15),e.YNc(31,Y,1,0,"ion-icon",15),e.TgZ(32,"p",21),e._uU(33),e.qZA(),e.TgZ(34,"div",22),e._uU(35),e.qZA(),e.TgZ(36,"div",23),e._uU(37),e.qZA(),e.TgZ(38,"div",24)(39,"div",25),e._UZ(40,"img",26),e.TgZ(41,"p"),e._uU(42),e.qZA()(),e.TgZ(43,"div",25),e._UZ(44,"img",27),e.TgZ(45,"p"),e._uU(46),e.qZA()()()()()}2&i&&(e.Q6J("translucent",!0),e.xp6(11),e.AsE(" ",n.hours,":",n.min," "),e.xp6(3),e.AsE("",null==n.weather?null:n.weather.name,", ",null==n.weather||null==n.weather.sys?null:n.weather.sys.country,""),e.xp6(2),e.Q6J("ngIf","01d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","02d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","03d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","04d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","09d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","10d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","11d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)||"11n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","13d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)||"13n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","50d"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)||"50n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","01n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","02n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","03n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","04n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","09n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","09n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(1),e.Q6J("ngIf","10n"==(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].icon)),e.xp6(2),e.Oqu(null==n.weather||null==n.weather.weather[0]?null:n.weather.weather[0].description),e.xp6(2),e.hij("",null==n.weather||null==n.weather.main?null:n.weather.main.temp,"\xb0C"),e.xp6(2),e.hij("Feels Like ",null==n.weather||null==n.weather.main?null:n.weather.main.feels_like,"\xb0C"),e.xp6(5),e.Oqu(n.sunrise),e.xp6(4),e.Oqu(n.sunset))},dependencies:[u.YG,u.W2,u.Gu,u.gu,u.pK,u.wd,u.sr,u.j9,g.O5],styles:[".weather-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:40vh}.weather-icon[_ngcontent-%COMP%]{font-size:48px}.temperature[_ngcontent-%COMP%]{font-size:36px;font-weight:700;margin-top:.5rem}.location[_ngcontent-%COMP%]{font-size:24px;text-align:center;padding:15px}.description[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:100vw;margin-top:2rem}.description[_ngcontent-%COMP%]   .sun-set-rise[_ngcontent-%COMP%]{height:2rem;display:flex;justify-content:space-around;align-items:center;width:26%}.description[_ngcontent-%COMP%]   .sun-set-rise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2rem}.input-bar[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:space-around}.input-bar[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--border-radius:10px;width:70vw}.input-bar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:10px;margin:0;width:20vw}.feels-like[_ngcontent-%COMP%]{margin-top:.4rem}.time[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:13vh;font-size:4rem;color:#8b8b8b}"]}),o})()}];let S=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[w.Bz.forChild(Q),w.Bz]}),o})(),j=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Pc,g.ez,m.u5,p.e,S]}),o})()}}]);