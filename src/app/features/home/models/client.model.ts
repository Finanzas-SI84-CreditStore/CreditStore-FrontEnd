// src/app/features/home/models/client.model.ts
export interface Client {
  id: number;
  name: string;
  paymentDate: string;
  amount: number;
  maxCredit: number;
  progress: number;
}

export class ClientModel {
}
