import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Avaliacao } from "./avaliacao/avaliacao.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AvaliacoesService {
  path = "/avaliacoes";

  constructor(private http: HttpClient) {}

  getAvaliacoes(idEncomenda: number, idUsuario: number) {
    return this.http.get<Avaliacao[]>(
      `${environment.urlWebApi}${this.path}/encomenda/${idEncomenda}/usuario/${idUsuario}`
    );
  }

  updateAvaliacao(avaliacao: Avaliacao) {
    return this.http.put(
      `${environment.urlWebApi}${this.path}/${avaliacao.id}`,
      avaliacao
    );
  }
}
