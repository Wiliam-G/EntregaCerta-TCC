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
