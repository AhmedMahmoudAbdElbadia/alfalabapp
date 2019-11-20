import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcBmrPage } from './calc-bmr';

@NgModule({
  declarations: [
    CalcBmrPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcBmrPage),
  ],
})
export class CalcBmrPageModule {}
