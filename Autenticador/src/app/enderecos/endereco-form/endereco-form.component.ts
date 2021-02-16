import { Component, OnInit, Input } from "@angular/core";
import { Endereco } from "../endereco.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { EnderecosService } from "../enderecos.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-endereco-form",
  templateUrl: "./endereco-form.component.html",
  styleUrls: ["./endereco-form.component.scss"],
})
export class EnderecoFormComponent implements OnInit {
  @Input() endereco: Endereco;
  selectedLocationImage = "";
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private enderecosService: EnderecosService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      bairro: [{ value: "", disabled: true }, Validators.required],
      cep: [{ value: "", disabled: true }, Validators.required],
      cidade: [{ value: "", disabled: true }, Validators.required],
      estado: [{ value: "", disabled: true }, Validators.required],
      lat: [{ value: "", disabled: true }, Validators.required],
      lng: [{ value: "", disabled: true }, Validators.required],
      numero: [{ value: "", disabled: true }, Validators.required],
      rua: [{ value: "", disabled: true }, Validators.required],
    });
  }

  locationPick(pickedLocation: Endereco) {
    console.log(pickedLocation);

    this.selectedLocationImage = pickedLocation.staticImageMapUrl;

    this.endereco = pickedLocation;

    // this.form.patchValue({
    //   rua: pickedLocation.rua,
    //   numero: pickedLocation.numero,
    //   cep: pickedLocation.cep,
    //   bairro: pickedLocation.bairro,
    //   cidade: pickedLocation.cidade,
    //   estado: pickedLocation.estado,
    // });
  }

  addEndereco() {
    this.endereco.idUsuario = this.authService.user.id;
    this.endereco.ativo = false;
    this.enderecosService.addEndereco(this.endereco).subscribe((res) => {
      this.modalCtrl.dismiss({added: true});
    });
  }

  cancel() {
    this.modalCtrl.dismiss({added: false});
  }
}
