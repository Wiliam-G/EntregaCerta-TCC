import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Encomenda } from "./encomenda.model";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class EncomendasService {
  path = "/encomendas";

  constructor(private http: HttpClient, private authService: AuthService) {}

  getEncomendas(idDestinatario: number) {
    return this.http.get<Encomenda[]>(
      `${environment.urlWebApi}${this.path}/destinatario/${idDestinatario}/empresa/${this.authService.user.idEmpresa}`
    );
  }

  approveDelivery(
    idEncomenda: number,
    idFuncionario: number,
    idRecebedor: number
  ) {
    return this.http.put(`${environment.urlWebApi}${this.path}/${idEncomenda}`, {
      idFuncionario,
      idRecebedor,
    });
  }
}
