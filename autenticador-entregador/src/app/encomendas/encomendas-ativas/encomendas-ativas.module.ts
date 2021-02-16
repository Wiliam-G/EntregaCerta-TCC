import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EncomendasAtivasPageRoutingModule } from "./encomendas-ativas-routing.module";

import { EncomendasAtivasPage } from "./encomendas-ativas.page";
import { EncomendaAtivaItemComponent } from "./encomenda-ativa-item/encomenda-ativa-item.component";
import { EncomendaDetailModalComponent } from './encomenda-ativa-item/encomenda-detail-modal/encomenda-detail-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendasAtivasPageRoutingModule,
  ],
  declarations: [EncomendasAtivasPage, EncomendaAtivaItemComponent, EncomendaDetailModalComponent],
  entryComponents: [EncomendaDetailModalComponent]
})
export class EncomendasAtivasPageModule {}
