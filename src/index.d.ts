import {
  MonobankClientInfo,
  MonobankStatementPathParameters,
  MonobankStatements,
  MonobankCurrencies,
} from './types';

export type * from './types';

export class MonoAPI {
  constructor(token: string);
  fetchClientInfo: () => Promise<MonobankClientInfo>;
  fetchStatements: (
    pathParams: MonobankStatementPathParameters,
  ) => Promise<MonobankStatements>;
  fetchCurrencies: () => Promise<MonobankCurrencies>;
}
