import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-saved-info',
  templateUrl: './saved-info.page.html',
  styleUrls: ['./saved-info.page.scss'],
})
export class SavedInfoPage implements OnInit {
  myStatus: string = '';

  constructor(private storage: Storage) {}

  ngOnInit() {}

  //on button click saves the selection which works
  SaveStatus() {
    this.storage
      .create()
      .then(() => {
        this.storage
          .set('status', this.myStatus)
          .then(() => console.log(this.myStatus))
          .catch();
      })
      .catch();
  }
}
