import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitHomePage } from './visit-home';

@NgModule({
  declarations: [
    VisitHomePage,
  ],
  imports: [
    IonicPageModule.forChild(VisitHomePage),
  ],
})
export class VisitHomePageModule {}
