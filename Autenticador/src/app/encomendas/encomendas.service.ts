import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Encomenda } from "../shared/encomenda-item/encomenda.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class EncomendasService {
  // private _encomendas = new BehaviorSubject<Encomenda[]>([]);
  path = "/encomendas";

  constructor(private http: HttpClient) {}

  // fetchedEncomendas() {
  //   // this._encomendas.next();
  // }

  // get encomendas() {
  //   return this._encomendas.asObservable();
  // }

  public getEncomendas(idUsuario: number) {
    return this.http.get<Encomenda[]>(
      `${environment.urlWebApi}${this.path}/destinatario/${idUsuario}/ativas`
    );
  
  }

  public getEncomendasRecebidas(idUsuario: number) {
    return this.http.get<Encomenda[]>(
      `${environment.urlWebApi}${this.path}/destinatario/${idUsuario}/recebidas`
    );
  }
}
