import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchesMapPage } from './branches-map';

@NgModule({
  declarations: [
    BranchesMapPage,
  ],
  imports: [
    IonicPageModule.forChild(BranchesMapPage),
  ],
})
export class BranchesMapPageModule {}
