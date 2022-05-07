import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(private platform: Platform, private geo: Geolocation) {}

  //Initizle map after the whole webpage is visible
  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }

  loadMap() {
    //Loads the map and points at your current location
    const map = GoogleMaps.create('map');

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      const coordinates: LatLng = new LatLng(this.lat, this.lng);

      map.setCameraTarget(coordinates);
      map.setCameraZoom(8);
    });
  }
  lat;
  lng;
  ngOnInit() {}
  //Displays you latitude and longitude assuming you agree to share your location
  WherAmI() {
    this.geo
      .getCurrentPosition({
        timeout: 10000,
        enableHighAccuracy: true,
      })
      .then((res) => {
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
