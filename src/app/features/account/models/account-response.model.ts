export interface AccountResponse {
    id: number;
    purchaseValue: number;
    interestType: string;
    capitalizationPeriod: string;
    interestPeriod: number;
    interestRate: number;
    creditType: string;
    installmentCount: number;
    gracePeriod: boolean;
    gracePeriodLength: number;
  }