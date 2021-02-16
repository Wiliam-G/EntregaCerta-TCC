import { Endereco } from './endereco.model';

export class Encomenda {
  constructor(
    public id: number,
    public entregador: string,
    public destinatario: string,
    public codigoEncomenda: string,
    public dataEntrega: Date,
    public dataEnvio: Date,
    public endereco: Endereco
  ) {}
}
