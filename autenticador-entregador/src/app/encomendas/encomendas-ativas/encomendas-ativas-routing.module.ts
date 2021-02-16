import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncomendasAtivasPage } from './encomendas-ativas.page';

const routes: Routes = [
  {
    path: '',
    component: EncomendasAtivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncomendasAtivasPageRoutingModule {}
