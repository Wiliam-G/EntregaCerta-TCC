import { Component, OnInit } from "@angular/core";
import { RecebedoresService } from "./recebedores.service";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recebedores",
  templateUrl: "./recebedores.page.html",
  styleUrls: ["./recebedores.page.scss"],
})
export class RecebedoresPage implements OnInit {
  constructor(
    private recebedoresService: RecebedoresService,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  recebedores: User[];

  ngOnInit() {
    this.getRecebedores();
  }

  getRecebedores() {
    this.recebedoresService
      .getRecebedores(this.authService.user.id)
      .subscribe((recebedores) => {
        this.recebedores = recebedores;
      });
  }

  scanRecebedor() {
    let codigoRecebedor = "1872";

    this.recebedoresService
      .addRecebedor(codigoRecebedor, this.authService.user.id)
      .subscribe(
        (res) => {
          this.getRecebedores();
        },
        (err) => {
          console.log(err);
          if (err.error.typeError == "RecebedorExistente") {
            this.alertCtrl
              .create({
                header: "Recebedor já cadastrado",
                message: err.error.message,
              })
              .then((alertEl) => {
                alertEl.present();
              });
          }
        }
      );
  }

  removeRecebedor(recebedor: User) {
    this.alertCtrl
      .create({
        header: "Remover recebedor",
        message: `Deseja remover ${recebedor.nome} como seu recebedor`,
        buttons: [
          {
            text: "Sim",
            handler: () => {
              this.recebedoresService
                .removeRecebedor(this.authService.user.id, recebedor.id)
                .subscribe((res) => {
                  this.getRecebedores();
                });
            },
          },
          {
            text: "Nâo",
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
