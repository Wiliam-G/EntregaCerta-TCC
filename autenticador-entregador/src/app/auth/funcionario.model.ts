import { Empresa } from '../scan-code-destinatario/destinatario-encomendas/encomenda.model';

export interface Funcionario {
  id: number;
  nome: string;
  idEmpresa: number;
  admin: boolean;
  empresa?: Empresa;
}
