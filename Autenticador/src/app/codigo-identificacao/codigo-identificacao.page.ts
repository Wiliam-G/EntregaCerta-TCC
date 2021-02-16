import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../auth/user.model";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-codigo-identificacao",
  templateUrl: "./codigo-identificacao.page.html",
  styleUrls: ["./codigo-identificacao.page.scss"],
})
export class CodigoIdentificacaoPage implements OnInit, OnDestroy {
  elementType: "url" | "canvas" | "img" = "url";
  value: string;
  count = 0;
  interval: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.value = this.authService.user.codigo;
    this.interval = setInterval(() => {
      this.authService.updateCodigo().subscribe((codigo) => {
        this.authService._user.codigo = codigo;
        this.value = codigo;
      });
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
