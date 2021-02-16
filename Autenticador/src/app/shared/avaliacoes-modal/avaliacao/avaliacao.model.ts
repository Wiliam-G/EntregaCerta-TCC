import { Encomenda } from "src/app/shared/encomenda-item/encomenda.model";

export class Avaliacao {
  id: number;
  nota: number;
  descricao: string;
  dataAvaliacao: Date;
  idUsuario: number;
  avaliado: boolean;
  tipo: number;
  encomendaId: number;
  encomenda?: Encomenda;

  public static tipoEncomenda() {
    return 1;
  }
  
  public static tipoRecebimento() {
    return 2;
  }
}
