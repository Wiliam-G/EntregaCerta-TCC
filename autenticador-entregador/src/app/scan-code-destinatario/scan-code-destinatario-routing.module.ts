import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanCodeDestinatarioPage } from './scan-code-destinatario.page';

const routes: Routes = [
  {
    path: '',
    component: ScanCodeDestinatarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanCodeDestinatarioPageRoutingModule {}
