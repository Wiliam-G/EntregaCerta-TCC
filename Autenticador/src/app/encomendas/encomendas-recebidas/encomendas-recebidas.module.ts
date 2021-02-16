import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncomendasRecebidasPageRoutingModule } from './encomendas-recebidas-routing.module';

import { EncomendasRecebidasPage } from './encomendas-recebidas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendasRecebidasPageRoutingModule,
    SharedModule
  ],
  declarations: [EncomendasRecebidasPage]
})
export class EncomendasRecebidasPageModule {}
