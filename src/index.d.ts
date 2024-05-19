import {
  MonobankClientInfo,
  MonobankStatementPathParameters,
  MonobankStatements,
} from './types';

export class MonoAPI {
  constructor(token: string);
  fetchClientInfo: () => Promise<MonobankClientInfo>;
  fetchStatements: (
    pathParams: MonobankStatementPathParameters,
  ) => Promise<MonobankStatements>;
}
