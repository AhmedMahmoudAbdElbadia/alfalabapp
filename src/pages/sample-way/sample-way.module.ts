import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleWayPage } from './sample-way';

@NgModule({
  declarations: [
    SampleWayPage,
  ],
  imports: [
    IonicPageModule.forChild(SampleWayPage),
  ],
})
export class SampleWayPageModule {}
