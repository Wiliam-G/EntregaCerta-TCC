import { Injectable } from "@angular/core";

import { User } from "./user.model";
import { Endereco } from "../enderecos/endereco.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  path = "/usuarios";

  public _user: User = {
    id: 1,
    nome: "Luan Felipe de Oliveira",
    telefone: "11111111",
    codigo: "teste",
  };

  // private _user = new BehaviorSubject<User>(new User());

  constructor(private http: HttpClient) {}

  get user() {
    // this._user.subscribe(usuario => {
    //   return usuario;
    // });
    return this._user;
  }

  // set user(usuario: User) {
  //   this.user = usuario;
  // }

  setUser(usuario: User) {
    this._user = usuario;
  }

  getUsuario() {
    return this.http.get<User>(`${environment.urlWebApi}${this.path}`);
  }

  updateCodigo() {
    return this.http.put<string>(
      `${environment.urlWebApi}${this.path}/${this._user.id}/codigo`,
      {}
    );
  }

  // updateUser(nome: string, telefone: string, endereco: Endereco) {
  //   console.log(this.user);
  //   this.user.nome = nome;
  //   this.user.telefone = telefone;
  //   this.user.enderecos[0] = endereco;
  // }
}
