import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EncomendasService } from "./encomendas.service";
import { Encomenda } from "./encomenda.model";

@Component({
  selector: "app-destinatario-encomendas",
  templateUrl: "./destinatario-encomendas.component.html",
  styleUrls: ["./destinatario-encomendas.component.scss"],
})
export class DestinatarioEncomendasComponent implements OnInit {
  @Input() idDestinatario: number;
  encomendas: Encomenda[];

  constructor(
    private modalCtrl: ModalController,
    private encomendasService: EncomendasService
  ) {}

  ngOnInit() {
    console.log(this.idDestinatario);
    this.encomendasService
      .getEncomendas(this.idDestinatario)
      .subscribe((encomendas) => {
        console.log(encomendas);
        this.encomendas = encomendas;
      });
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  approvedEncomenda() {
    this.modalCtrl.dismiss();
  }
}
