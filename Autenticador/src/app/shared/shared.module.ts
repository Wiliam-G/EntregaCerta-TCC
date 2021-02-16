import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StarRatingComponent } from "./star-rating/star-rating.component";
import { LocationPickerComponent } from "./pickers/location-picker/location-picker.component";
import { AvaliacaoComponent } from "./avaliacoes-modal/avaliacao/avaliacao.component";
import { EncomendaDetailModalComponent } from "./encomenda-item/encomenda-detail-modal/encomenda-detail-modal.component";
import { EncomendatemComponent } from "./encomenda-item/encomenda-item.component";
import { AvaliacoesModalComponent } from "./avaliacoes-modal/avaliacoes-modal.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [
    StarRatingComponent,
    LocationPickerComponent,
    AvaliacaoComponent,
    EncomendatemComponent,
  ],
  declarations: [
    StarRatingComponent,
    LocationPickerComponent,
    AvaliacaoComponent,
    EncomendatemComponent,
    EncomendaDetailModalComponent,
    AvaliacoesModalComponent,
  ],
  entryComponents: [EncomendaDetailModalComponent, AvaliacoesModalComponent],
})
export class SharedModule {}
