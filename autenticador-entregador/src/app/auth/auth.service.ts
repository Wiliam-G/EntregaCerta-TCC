import { Injectable } from "@angular/core";

import { Funcionario } from "./funcionario.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _funcionario: Funcionario = {
    id: 1,
    nome: "Luan Felipe de Oliveira",
    idEmpresa: 1,
    admin: false,
  };

  constructor() {}

  get user() {
    return this._funcionario;
  }
}
