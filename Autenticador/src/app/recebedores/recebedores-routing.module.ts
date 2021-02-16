import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecebedoresPage } from './recebedores.page';

const routes: Routes = [
  {
    path: '',
    component: RecebedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecebedoresPageRoutingModule {}
