import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'encomendas',
    loadChildren: () => import('./encomendas/encomendas.module').then( m => m.EncomendasPageModule)
  },
  {
    path: '',
    redirectTo: 'scan-code-destinatario',
    pathMatch: 'full'
  },
  {
    path: 'scan-code-destinatario',
    loadChildren: () => import('./scan-code-destinatario/scan-code-destinatario.module').then( m => m.ScanCodeDestinatarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
