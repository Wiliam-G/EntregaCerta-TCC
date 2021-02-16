import { Component, OnInit, Input } from "@angular/core";
import { Encomenda } from "../../encomenda.model";
import { ModalController } from "@ionic/angular";
import { EncomendaDetailModalComponent } from "./encomenda-detail-modal/encomenda-detail-modal.component";

@Component({
  selector: "app-encomenda-ativa-item",
  templateUrl: "./encomenda-ativa-item.component.html",
  styleUrls: ["./encomenda-ativa-item.component.scss"],
})
export class EncomendaAtivaItemComponent implements OnInit {
  @Input() encomenda: Encomenda;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  detalharEncomenda() {
    this.modalCtrl
      .create({
        component: EncomendaDetailModalComponent,
        componentProps: { encomenda: this.encomenda },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
