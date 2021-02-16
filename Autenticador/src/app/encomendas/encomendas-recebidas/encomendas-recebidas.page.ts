import { Component, OnInit } from "@angular/core";
import { EncomendasService } from "../encomendas.service";
import { AuthService } from "src/app/auth/auth.service";
import { Encomenda } from 'src/app/shared/encomenda-item/encomenda.model';

@Component({
  selector: "app-encomendas-recebidas",
  templateUrl: "./encomendas-recebidas.page.html",
  styleUrls: ["./encomendas-recebidas.page.scss"],
})
export class EncomendasRecebidasPage implements OnInit {
  encomendas: Encomenda[];
  constructor(
    private authService: AuthService,
    private encomendasService: EncomendasService
  ) {}

  ngOnInit() {
    this.getEncomendas();
  }

  getEncomendas() {
    this.encomendasService
      .getEncomendasRecebidas(this.authService.user.id)
      .subscribe((encomendas) => {
        this.encomendas = encomendas;
      });
  }
}
