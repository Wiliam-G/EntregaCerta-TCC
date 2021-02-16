import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { typeWithParameters } from "@angular/compiler/src/render3/util";
import { User } from "../auth/user.model";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class DadosPessoaisService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getDadosPessoais() {
    let id = 1;

    return this.http.get<User>(`${environment.urlWebApi}\\usuarios\\${id}`);
  }

  updateDadosPessoais(usuario: User) {
    return this.http.put(
      `${environment.urlWebApi}\\usuarios\\${usuario.id}`,
      usuario
    );
  }
}
