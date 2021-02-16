import { Component, OnInit, OnDestroy } from "@angular/core";
import { EncomendasService } from "../encomendas.service";
import { Encomenda } from "../encomenda.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-encomendas-ativas",
  templateUrl: "./encomendas-ativas.page.html",
  styleUrls: ["./encomendas-ativas.page.scss"],
})
export class EncomendasAtivasPage implements OnInit, OnDestroy {
  segmentEncomendas = "all";
  encomendaSub: Subscription;
  encomendaList: Encomenda[];
  encomendasToday: Encomenda[];

  constructor(private encomendasService: EncomendasService) {}

  ngOnInit() {
    this.encomendaSub = this.encomendasService.encomendas.subscribe(
      (encomendas) => {
        this.encomendasToday = encomendas.filter(
          (encomenda) =>
            encomenda.dataEntrega.toString() == new Date().toString()
        );
        this.encomendaList = encomendas.filter(
          (encomenda) =>
            encomenda.dataEntrega.toString() != new Date().toString()
        );
        console.log(this.encomendaList);
      }
    );
  }

  onFilterUpdate() {
    console.log(this.segmentEncomendas);
  }

  ngOnDestroy() {
    if (this.encomendaSub) {
      this.encomendaSub.unsubscribe();
    }
  }
}
