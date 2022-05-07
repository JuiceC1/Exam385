import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedInfoPageRoutingModule } from './saved-info-routing.module';

import { SavedInfoPage } from './saved-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedInfoPageRoutingModule
  ],
  declarations: [SavedInfoPage]
})
export class SavedInfoPageModule {}
