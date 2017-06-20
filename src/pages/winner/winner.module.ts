import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Winner } from './winner';

@NgModule({
  declarations: [
    Winner,
  ],
  imports: [
    IonicPageModule.forChild(Winner),
  ],
  exports: [
    Winner
  ]
})
export class WinnerModule {}
