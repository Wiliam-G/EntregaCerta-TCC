import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EncomendaDetailModalComponent } from "./encomenda-detail-modal/encomenda-detail-modal.component";
import { Encomenda } from "../encomenda.model";
import { EncomendasService } from "../encomendas.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-encomenda-ativa-item",
  templateUrl: "./encomenda-ativa-item.component.html",
  styleUrls: ["./encomenda-ativa-item.component.scss"],
})
export class EncomendaAtivaItemComponent implements OnInit {
  @Input() encomenda: Encomenda;
  @Input() idRecebedor: number;
  @Output() approvedEncomenda = new EventEmitter();

  constructor(
    private modalCtrl: ModalController,
    private encomendasService: EncomendasService,
    private authService: AuthService
  ) {}

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

  confirmarEntrega() {
    console.log("confirmado");
    this.encomendasService
      .approveDelivery(
        this.encomenda.id,
        this.authService.user.id,
        this.idRecebedor
      )
      .subscribe((res) => {
        this.approvedEncomenda.emit();
      });
  }
}
