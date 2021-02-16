import { Component, OnInit, Input } from "@angular/core";
import { Avaliacao } from "./avaliacao/avaliacao.model";
import { AvaliacoesService } from "./avaliacoes.service";
import { AuthService } from "src/app/auth/auth.service";
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-avaliacoes-modal",
  templateUrl: "./avaliacoes-modal.component.html",
  styleUrls: ["./avaliacoes-modal.component.scss"],
})
export class AvaliacoesModalComponent implements OnInit {
  @Input() encomendaId: number;
  avaliacoes: Avaliacao[];

  constructor(
    private avaliacoesService: AvaliacoesService,
    private authService: AuthService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getAvaliacoes();
  }

  getAvaliacoes() {
    this.avaliacoesService
      .getAvaliacoes(this.encomendaId, this.authService.user.id)
      .subscribe((avaliacoes) => {
        this.avaliacoes = avaliacoes;
      });
  }

  avaliacaoUpdated(idAvaliacao) {
    this.avaliacoes = this.avaliacoes.filter(
      (avaliacao) => avaliacao.id != idAvaliacao
    );

    if (this.avaliacoes.length == 0) {
      this.modalCtrl.dismiss("fodase");
    }
  }
}
