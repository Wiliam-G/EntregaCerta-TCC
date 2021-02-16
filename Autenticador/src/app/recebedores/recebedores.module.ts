import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecebedoresPageRoutingModule } from "./recebedores-routing.module";

import { RecebedoresPage } from "./recebedores.page";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecebedoresPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [RecebedoresPage],
})
export class RecebedoresPageModule {}
