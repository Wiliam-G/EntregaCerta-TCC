import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EncomendasAtivasPageRoutingModule } from "./encomendas-ativas-routing.module";

import { EncomendasAtivasPage } from "./encomendas-ativas.page";
import { SharedModule } from "src/app/shared/shared.module";
// import { AvaliacaoComponent } from "src/app/shared/avaliacao/avaliacao.component";
import { EncomendasPageModule } from "../encomendas.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendasAtivasPageRoutingModule,
    SharedModule
    ],
  declarations: [EncomendasAtivasPage],
})
export class EncomendasAtivasPageModule {}
