import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { AuthService } from "../auth/auth.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Endereco } from "../enderecos/endereco.model";
import { Subscription, Subject } from "rxjs";
import { DadosPessoaisService } from "./dados-pessoais.service";

@Component({
  selector: "app-dados-pessoais",
  templateUrl: "./dados-pessoais.page.html",
  styleUrls: ["./dados-pessoais.page.scss"],
})
export class DadosPessoaisPage implements OnInit {
  user: User;
  form: FormGroup;
  edit = false;
  newEndereco: Endereco;

  formSub: Subject<boolean>;

  constructor(
    private fb: FormBuilder,
    private service: DadosPessoaisService
  ) {}

  ngOnInit() {
    this.getDadosPessoais();
  }

  getDadosPessoais() {
    this.service.getDadosPessoais().subscribe((dadosPessoais) => {
      this.user = dadosPessoais;

      this.form = this.fb.group({
        nome: [this.user.nome, Validators.required],
        telefone: [this.user.telefone, Validators.required],
      });

      this.formSub = new Subject();
    });
  }


  editFields() {
    this.edit = !this.edit;
    if (this.edit) {
      this.setForm();
    }
  }

  setForm() {
    this.form.patchValue({ nome: this.user.nome });
    this.form.patchValue({ telefone: this.user.telefone });
  }

  submit() {
    this.formSub.next(true);
    let usuario: User = {
      id: this.user.id,
      nome: this.form.get("nome").value,
      telefone: this.form.get("telefone").value,
      codigo: this.user.codigo,
    };

    this.service.updateDadosPessoais(usuario).subscribe((res) => {
      // this.authService.updateUser(
      //   this.form.get("nome").value,
      //   this.form.get("telefone").value,
      //   this.newEndereco
      // );
      // this.getDadosPessoais();
      this.user = usuario;
    });
    this.editFields();
  }
}
