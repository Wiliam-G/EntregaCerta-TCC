import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "encomendas",
    pathMatch: "full",
  },
  {
    path: "encomendas",
    loadChildren: () =>
      import("./encomendas/encomendas.module").then(
        (m) => m.EncomendasPageModule
      ),
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'codigo-identificacao',
    loadChildren: () => import('./codigo-identificacao/codigo-identificacao.module').then( m => m.CodigoIdentificacaoPageModule)
  },
  {
    path: 'recebedores',
    loadChildren: () => import('./recebedores/recebedores.module').then( m => m.RecebedoresPageModule)
  },
  {
    path: 'enderecos',
    loadChildren: () => import('./enderecos/enderecos.module').then( m => m.EnderecosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
