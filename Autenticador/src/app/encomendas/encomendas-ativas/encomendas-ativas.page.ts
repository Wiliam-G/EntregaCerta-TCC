import { Component, OnInit, OnDestroy } from "@angular/core";
import { EncomendasService } from "../encomendas.service";
import { Encomenda } from "../../shared/encomenda-item/encomenda.model";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-encomendas-ativas",
  templateUrl: "./encomendas-ativas.page.html",
  styleUrls: ["./encomendas-ativas.page.scss"],
})
export class EncomendasAtivasPage implements OnInit, OnDestroy {
  segmentEncomendas = "all";
  encomendaSub: Subscription;
  encomendasFuture: Encomenda[];
  encomendasToday: Encomenda[];
  encomendasLate: Encomenda[];
  encomendasFutureFiltered: Encomenda[];
  encomendasTodayFiltered: Encomenda[];
  encomendasLateFiltered: Encomenda[];
  dt = new Date();
  today = new Date(
    this.dt.getFullYear(),
    this.dt.getMonth(),
    this.dt.getDate()
  );

  constructor(
    private encomendasService: EncomendasService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.encomendasService
      .getEncomendas(this.authService.user.id)
      .subscribe((encomendas) => {
        this.encomendasToday = encomendas.filter((encomenda) => {
          return (
            toDate(encomenda.dataEntregaPrevista.toString()).getTime() ===
            this.today.getTime()
          );
        });
        this.encomendasFuture = encomendas.filter((encomenda) => {
          return (
            toDate(encomenda.dataEntregaPrevista.toString()).getTime() >
            this.today.getTime()
          );
        });
        this.encomendasLate = encomendas.filter((encomenda) => {
          return (
            toDate(encomenda.dataEntregaPrevista.toString()).getTime() <
            this.today.getTime()
          );
        });

        this.onFilterUpdate();
      });
  }

  onFilterUpdate() {
    if (this.segmentEncomendas === "all") {
      this.encomendasFutureFiltered = this.encomendasFuture;
      this.encomendasTodayFiltered = this.encomendasToday;
      this.encomendasLateFiltered = this.encomendasLate;
    } else {
      this.encomendasFutureFiltered = this.encomendasFuture.filter(
        (encomenda) => {
          return encomenda.idDestinatario == this.authService.user.id;
        }
      );
      this.encomendasTodayFiltered = this.encomendasToday.filter(
        (encomenda) => {
          return encomenda.idDestinatario == this.authService.user.id;
        }
      );
      this.encomendasLateFiltered = this.encomendasLate.filter((encomenda) => {
        return encomenda.idDestinatario == this.authService.user.id;
      });
    }
  }

  ngOnDestroy() {
    if (this.encomendaSub) {
      this.encomendaSub.unsubscribe();
    }
  }
}

function toDate(dateStr: string) {
  var parts = dateStr.split("-");
  return new Date(
    parseInt(parts[0]),
    parseInt(parts[1]) - 1,
    parseInt(parts[2])
  );
}
