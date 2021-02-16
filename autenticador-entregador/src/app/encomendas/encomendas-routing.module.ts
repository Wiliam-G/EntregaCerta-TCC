import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EncomendasPage } from "./encomendas.page";

const routes: Routes = [
  {
    path: "tabs",
    component: EncomendasPage,
    children: [
      {
        path: "encomendas-ativas",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./encomendas-ativas/encomendas-ativas.module").then(
                (m) => m.EncomendasAtivasPageModule
              ),
          },
        ],
      },
      {
        path: "encomendas-recebidas",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./encomendas-recebidas/encomendas-recebidas.module").then(
                (m) => m.EncomendasRecebidasPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: "",
    redirectTo: "/encomendas/tabs/encomendas-ativas",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncomendasPageRoutingModule {}
