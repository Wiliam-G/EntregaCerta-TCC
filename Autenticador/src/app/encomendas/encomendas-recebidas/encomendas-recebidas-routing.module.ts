import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncomendasRecebidasPage } from './encomendas-recebidas.page';

const routes: Routes = [
  {
    path: '',
    component: EncomendasRecebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncomendasRecebidasPageRoutingModule {}
