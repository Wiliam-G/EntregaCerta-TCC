import { Endereco } from "../enderecos/endereco.model";

export class User {
  id: number;
  nome: string;
  telefone: string;
  codigo: string;
  enderecos?: Endereco[];
}
