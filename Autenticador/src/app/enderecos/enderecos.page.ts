import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Endereco } from "./endereco.model";
import { EnderecosService } from "./enderecos.service";
import { ModalController } from "@ionic/angular";
import { EnderecoFormComponent } from "./endereco-form/endereco-form.component";

@Component({
  selector: "app-enderecos",
  templateUrl: "./enderecos.page.html",
  styleUrls: ["./enderecos.page.scss"],
})
export class EnderecosPage implements OnInit {
  enderecoAtivo: Endereco;
  enderecos: Endereco[];
  isUnique: boolean = false;
  constructor(
    private authService: AuthService,
    private enderecosService: EnderecosService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getEnderecos();
  }

  getEnderecos() {
    this.enderecosService
      .getEnderecos(this.authService.user.id)
      .subscribe((enderecos) => {
        console.log(enderecos);
        this.enderecoAtivo = enderecos.find((endereco) => {
          return endereco.ativo == true;
        });

        this.enderecos = enderecos.filter((endereco) => {
          return endereco.ativo == false;
        });

        if (enderecos.length == 1) {
          this.isUnique = true;
        }
      });
  }

  newEndereco() {
    this.modalCtrl
      .create({ component: EnderecoFormComponent })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData);
        if (resultData.data.added) {
          this.getEnderecos();
        }
      });
  }
}
