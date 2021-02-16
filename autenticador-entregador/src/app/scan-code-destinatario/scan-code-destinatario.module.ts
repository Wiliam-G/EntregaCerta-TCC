import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { ScanCodeDestinatarioPageRoutingModule } from './scan-code-destinatario-routing.module';

import { ScanCodeDestinatarioPage } from './scan-code-destinatario.page';
import { DestinatarioEncomendasComponent } from './destinatario-encomendas/destinatario-encomendas.component';
import { EncomendaAtivaItemComponent } from './destinatario-encomendas/encomenda-ativa-item/encomenda-ativa-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanCodeDestinatarioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ScanCodeDestinatarioPage, DestinatarioEncomendasComponent, EncomendaAtivaItemComponent],
  entryComponents: [DestinatarioEncomendasComponent]
})
export class ScanCodeDestinatarioPageModule {}
