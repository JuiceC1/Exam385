import { Component, Input, OnInit } from '@angular/core';
import { CredentialsService } from '../Services/credentials.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myStatus: string = '';
  constructor(private storage: Storage) {}

  //This shows the slection the user made on the mood page
  ionViewDidEnter() {
    this.storage
      .create()
      .then(() => {
        this.storage
          .get('status')
          .then((status) => {
            this.myStatus = status;
          })
          .catch();
      })
      .catch();
  }

  //Nav bar is hidden
  hidden = true;
  //title is blank until user presses enter
  value = '';
  onEnter(value: string) {
    this.value = value + "'s App of random functionality";
    this.hidden = false;
  }
}
