import { User } from '../../auth/user.model';
import { Endereco } from '../../enderecos/endereco.model';
import { Avaliacao } from '../avaliacoes-modal/avaliacao/avaliacao.model';
// import { Avaliacao } from '../avaliacao/avaliacao.model';

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
  destinatario?: User;
  recebedor?: User;
  empresa?: Empresa;
  funcionario?: Funcionario;
  endereco?: Endereco;
  avaliacoes?: Avaliacao[];
}

export interface Empresa {
  id: number;
  nomeEmpresa: string;
  funcionarios: Funcionario[];
}

export interface Funcionario {
  id: number;
  idEmpresa: number;
  nome: string;
  admin: boolean;
  empresa: Empresa;
}
