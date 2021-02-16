import { Funcionario } from '../../auth/funcionario.model';

export interface Encomenda {
  id: number;
  dataEntregaPrevista: Date;
  dataRecebimento: Date;
  dataEnvio: Date;
  codigoEncomenda: string;
  idDestinatario: number;
  idRecebedor: number;
  idEmpresa: number;
  idFuncionario: number;
  idEndereco: number;
  destinatario?: Destinatario;
  recebedor?: Destinatario;
  empresa?: Empresa;
  funcionario?: Funcionario;
  endereco?: Endereco;
}

export interface Empresa {
  id: number;
  nomeEmpresa: string;
  funcionarios: Funcionario[];
}

export interface Endereco {
  id: number;
  idUsuario: number;
  rua: string;
  numero: number;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  staticImageMapUrl: string;
  lat: number;
  lng: number;
  ativo: boolean;
}

export interface Destinatario {
  id: number;
  nome: string;
  telefone: string;
  codigo: string;
  enderecos?: Endereco[];
}
