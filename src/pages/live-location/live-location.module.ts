import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveLocationPage } from './live-location';

@NgModule({
  declarations: [
    LiveLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveLocationPage),
  ],
})
export class LiveLocationPageModule {}
