import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClacMedicalPage } from './clac-medical';

@NgModule({
  declarations: [
    ClacMedicalPage,
  ],
  imports: [
    IonicPageModule.forChild(ClacMedicalPage),
  ],
})
export class ClacMedicalPageModule {}
