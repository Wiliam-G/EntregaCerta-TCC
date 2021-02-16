import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoIdentificacaoPageRoutingModule } from './codigo-identificacao-routing.module';

import { CodigoIdentificacaoPage } from './codigo-identificacao.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoIdentificacaoPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [CodigoIdentificacaoPage]
})
export class CodigoIdentificacaoPageModule {}
