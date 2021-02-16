import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Encomenda } from "src/app/shared/encomenda-item/encomenda.model";

@Component({
  selector: "app-encomenda-detail-modal",
  templateUrl: "./encomenda-detail-modal.component.html",
  styleUrls: ["./encomenda-detail-modal.component.scss"],
})
export class EncomendaDetailModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  @Input() recebida;
  @Input() encomenda: Encomenda;

  ngOnInit() {
    // if (this.recebida) {
    //   this.encomenda.avaliacoes = this.encomenda.avaliacoes.filter(
    //     (avaliacao) => avaliacao.dataAvaliacao != null
    //   );
    // }
  }

  onClose() {
    this.modalCtrl.dismiss();
  }

  onRatingChange(event: any) {
    console.log(event);
  }

  sendFeedBack() {}
}
