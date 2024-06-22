export interface AccountResponse {
  id: number;
  valorCompra: number;
  tipoTasa: string;
  capitalizacionTasa: string;
  valorTasa: number;
  tipoCredito: string;
  numeroCuotas: number;
  plazoGracia: boolean;
  periodoGracia: number;
  paymentDate: Date;
}

 