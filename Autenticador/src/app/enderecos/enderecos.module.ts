import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecosPageRoutingModule } from './enderecos-routing.module';

import { EnderecosPage } from './enderecos.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { EnderecoItemComponent } from './endereco-item/endereco-item.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnderecosPageRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [EnderecosPage, EnderecoItemComponent, EnderecoFormComponent],
  entryComponents: [EnderecoFormComponent]
})
export class EnderecosPageModule {}
