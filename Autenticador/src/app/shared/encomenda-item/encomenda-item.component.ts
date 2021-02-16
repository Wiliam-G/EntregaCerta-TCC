 import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Encomenda } from "../../shared/encomenda-item/encomenda.model";
import { EncomendaDetailModalComponent } from "./encomenda-detail-modal/encomenda-detail-modal.component";
import { AvaliacoesModalComponent } from "../avaliacoes-modal/avaliacoes-modal.component";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-encomenda-item",
  templateUrl: "./encomenda-item.component.html",
  styleUrls: ["./encomenda-item.component.scss"],
})
export class EncomendatemComponent implements OnInit {
  @Input() encomenda: Encomenda;
  @Input() recebida = false;
  @Output() refresh = new EventEmitter();
  title = "Avalie o ";
  descricao = "Descreva sua experiência com ";

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  openEncomendaDetails() {
    this.modalCtrl
      .create({
        component: EncomendaDetailModalComponent,
        componentProps: { encomenda: this.encomenda, recebida: this.recebida },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  avaliarEncomenda() {
    this.modalCtrl
      .create({
        component: AvaliacoesModalComponent,
        componentProps: { encomendaId: this.encomenda.id },
        cssClass: "avaliacaoModal",
      })
      .then((modalEl) => {
        modalEl.present();

        modalEl.onDidDismiss().then((res) => {
          // if (res.data != undefined) {
          //   this.encomenda.avaliacoes.forEach(
          //     (avaliacao) => {
          //       avaliacao.avaliado = true;
          //     }
          //   );
          // }
          this.refresh.emit();
        });
      });
  }

  hasPendentAvaliacao() {
    if (this.recebida) {
      return (
        this.encomenda.avaliacoes.filter((avaliacao) => {
          return (
            !avaliacao.avaliado &&
            avaliacao.idUsuario == this.authService.user.id
          );
        }).length > 0
      );
    }
    return false;
  }
}
