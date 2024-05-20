export interface MonobankCurrency {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateSell: number;
  rateBuy: number;
  rateCross: number;
}

export type MonobankCurrencies = MonobankCurrency[];
