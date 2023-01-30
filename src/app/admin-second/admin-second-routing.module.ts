import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSecondPage } from './admin-second.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSecondPageRoutingModule {}
