export class Endereco {
  constructor(
    public nome: string,
    public numero: number,
    public cep: string,
    public estado: string,
    public cidade: string,
    public bairro: string,
    public coords: Coordinates
  ) {}
}

export interface Coordinates {
    lat: number,
    lng: number
}