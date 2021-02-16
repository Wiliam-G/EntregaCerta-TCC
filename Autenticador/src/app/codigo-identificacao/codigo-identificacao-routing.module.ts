import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoIdentificacaoPage } from './codigo-identificacao.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoIdentificacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoIdentificacaoPageRoutingModule {}
