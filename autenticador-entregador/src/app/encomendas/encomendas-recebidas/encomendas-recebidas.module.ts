import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncomendasRecebidasPageRoutingModule } from './encomendas-recebidas-routing.module';

import { EncomendasRecebidasPage } from './encomendas-recebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendasRecebidasPageRoutingModule
  ],
  declarations: [EncomendasRecebidasPage]
})
export class EncomendasRecebidasPageModule {}
