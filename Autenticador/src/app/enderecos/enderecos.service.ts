import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Endereco } from "./endereco.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class EnderecosService {
  path = "/enderecos";
  constructor(private http: HttpClient) {}

  getEnderecos(idUsuario: number) {
    return this.http.get<Endereco[]>(
      `${environment.urlWebApi}${this.path}/${idUsuario}`
    );
  }

  addEndereco(endereco: Endereco) {
    return this.http.post(`${environment.urlWebApi}${this.path}`, endereco);
  }

  deleteEndereco(idEndereco: number) {
    return this.http.delete<Endereco[]>(
      `${environment.urlWebApi}${this.path}/${idEndereco}`
    );
  }

  ativarEndereco(idEndereco: number) {
    return this.http.put<Endereco[]>(
      `${environment.urlWebApi}${this.path}/${idEndereco}`,
      {}
    );
  }
}
