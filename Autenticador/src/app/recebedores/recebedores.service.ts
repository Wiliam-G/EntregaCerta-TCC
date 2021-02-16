import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../auth/user.model";

@Injectable({
  providedIn: "root",
})
export class RecebedoresService {
  constructor(private http: HttpClient) {}

  path = "recebedores";

  addRecebedor(codigoRecebedor: string, idDestinatario: number) {
    return this.http.post(`${environment.urlWebApi}\\${this.path}\\`, {
      idDestinatario,
      codigoRecebedor,
    });
  }

  getRecebedores(idDestinatario: number) {
    return this.http.get<User[]>(
      `${environment.urlWebApi}\\${this.path}\\${idDestinatario}`
    );
  }

  removeRecebedor(idDestinatario: number, idRecebedor: number) {
    return this.http.delete(
      `${environment.urlWebApi}\\${this.path}\\${idRecebedor}\\destinatario\\${idDestinatario}`
    );
  }
}
