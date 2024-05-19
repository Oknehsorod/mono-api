export interface MonobankClientInfo {
  clientId: string;
  name: string;
  webHookUrl: string;
  permissions: string;
  accounts: MonobankClientInfoAccount[];
}

export interface MonobankClientInfoAccount {
  id: string;
  sendId: string;
  currencyCode: number;
  cashbackType: string;
  balance: number;
  creditLimit: number;
  maskedPan: string[];
  type: string;
  iban: string;
}
