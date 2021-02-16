import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Avaliacao } from "./avaliacao.model";
import { AvaliacoesService } from "../avaliacoes.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-avaliacao",
  templateUrl: "./avaliacao.component.html",
  styleUrls: ["./avaliacao.component.scss"],
})
export class AvaliacaoComponent implements OnInit, OnDestroy {
  @Input() editable = true;
  @Input() avaliacao: Avaliacao;
  @Output() avaliacaoUpdated = new EventEmitter<number>();

  sub: Subscription;
  title = "Avalie ";
  descricao = "Descreva sua experiência com ";

  constructor(private avaliacoesService: AvaliacoesService) {}

  ngOnInit() {
    var tipo = "";

    if (!this.editable) {
      this.title = "Avaliação d"
    }
    if (this.avaliacao.tipo == Avaliacao.tipoEncomenda()) {
      tipo = "a encomenda.";
    } else if (this.avaliacao.tipo == Avaliacao.tipoRecebimento()) {
      tipo = "o recebimento.";
    }
    this.title += tipo;
    this.descricao += tipo;
  }

  sendAvalicao() {
    console.log(this.avaliacao);
    this.sub = this.avaliacoesService
      .updateAvaliacao(this.avaliacao)
      .subscribe(() => {
        this.avaliacaoUpdated.next(this.avaliacao.id);
      });
  }

  onRatingChange(nota: number) {
    this.avaliacao.nota = nota;
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}
