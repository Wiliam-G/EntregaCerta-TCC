import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Encomenda } from "./encomenda.model";
import { Endereco } from "./endereco.model";

@Injectable({
  providedIn: "root",
})
export class EncomendasService {
  endereco = new Endereco("Rua João", 180, "1111111", "sp", "sp", "prs", {
    lat: 15,
    lng: 40,
  });

  private _encomendas = new BehaviorSubject<Encomenda[]>([
    {
      id: 1,
      entregador: "João",
      destinatario: "Luan",
      codigoEncomenda: "45a4s5d4",
      dataEntrega: new Date(),
      dataEnvio: new Date(),
      endereco: this.endereco,
    },
    {
      id: 1,
      entregador: "João",
      destinatario: "Luan",
      codigoEncomenda: "45a4s5d4",
      dataEntrega: new Date(new Date().getDay()),
      dataEnvio: new Date(),
      endereco: this.endereco,
    },
  ]);

  constructor() {}

  fetchedEncomendas() {
    // this._encomendas.next();
  }

  get encomendas() {
    return this._encomendas.asObservable();
  }
}
