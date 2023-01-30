import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSecondPageRoutingModule } from './admin-second-routing.module';

import { AdminSecondPage } from './admin-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSecondPageRoutingModule
  ],
  declarations: [AdminSecondPage]
})
export class AdminSecondPageModule {}
