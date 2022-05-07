import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../Services/credentials.service';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.page.html',
  styleUrls: ['./guess.page.scss'],
})
export class GuessPage implements OnInit {
  constructor(private service: CredentialsService) {}
  hidden = true;
  option = '';
  //If we replace '' with 'Yellow' the correct option will display but there is an issue with the logic where this doesnt exactly work i have no idea why ;/
  value = ''; //Yellow will make the strings equal
  onEnter(value: string) {
    this.hidden = false;
    if (value == 'Yellow') {
      this.value = 'Yellow';
    }
  }

  //Retrieves the JSON from the web and attempts to compare the user entry to the pre determined answer from the JSON
  ngOnInit() {
    this.service.GetLoginData().subscribe((data) => {
      if (this.value === data.Login) {
        this.option = 'Correct this object is in fact yellow';
      } else {
        this.option = 'Incorect this object is actually yellow';
      }
    });
  }
}
