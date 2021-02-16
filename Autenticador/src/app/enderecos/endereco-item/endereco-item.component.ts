import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Endereco } from "../endereco.model";

import { Capacitor, Plugins } from "@capacitor/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subscription } from "rxjs";
import { ActionSheetController } from "@ionic/angular";
import { EnderecosService } from "../enderecos.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-endereco-item",
  templateUrl: "./endereco-item.component.html",
  styleUrls: ["./endereco-item.component.scss"],
})
export class EnderecoItemComponent implements OnInit {
  @Input() endereco: Endereco;
  @Input() isUnique;
  @Output() enderecoChanged = new EventEmitter();

  sub: Subscription;

  constructor(
    private http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    private enderecosService: EnderecosService
  ) {}

  ngOnInit() {}

  getLocation() {
    if (Capacitor.Plugins.Geolocation) {
      Plugins.Geolocation.getCurrentPosition().then((currentPosition) => {
        this.getAddress(
          currentPosition.coords.latitude,
          currentPosition.coords.longitude
        );
      });
    }
  }

  searchLocation() {
    console.log("search");
  }

  private getAddress(lat: number, lng: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`
      )
      .subscribe((res) => {
        const parts = res.results[0].address_components;
        console.log(parts);
        this.endereco.rua = parts[1].long_name;
        this.endereco.numero = parts[0].long_name;
        this.endereco.bairro = parts[2].long_name;
        this.endereco.cidade = parts[3].long_name;
        this.endereco.estado = parts[4].long_name;
        this.endereco.cep = parts[6].long_name;
      });
  }

  locationPick(endereco: Endereco) {
    this.endereco = endereco;
  }

  onClickOptions() {
    var buttons = [];

    if (!this.isUnique && !this.endereco.ativo) {
      buttons.push({
        text: "Ativar",
        icon: "checkmark",
        handler: () => {
          console.log("ativar");
          this.enderecosService
            .ativarEndereco(this.endereco.id)
            .subscribe(() => {
              this.enderecoChanged.emit();
            });
        },
      });
      buttons.push({
        text: "Excluir",
        icon: "trash",
        handler: () => {
          console.log("excluir");
          this.enderecosService
            .deleteEndereco(this.endereco.id)
            .subscribe(() => {
              this.enderecoChanged.emit();
              console.log("Recarregar página");
            });
        },
      });
    }

    buttons.splice(1, 0, {
      text: "Editar",
      icon: "create",
      handler: () => {
        console.log("editar");
      },
    });

    // buttons.join();

    this.actionSheetCtrl
      .create({
        header: this.endereco.rua + " - " + this.endereco.numero,
        buttons: buttons,
      })
      .then((actionSheetEl) => {
        actionSheetEl.present();
      });
  }
}
