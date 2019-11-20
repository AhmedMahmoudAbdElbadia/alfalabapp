import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcBmiPage } from './calc-bmi';

@NgModule({
  declarations: [
    CalcBmiPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcBmiPage),
  ],
})
export class CalcBmiPageModule {}
