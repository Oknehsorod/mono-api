import { MonoAPI } from '../src';
import 'dotenv/config';

describe('Basic test for Client Info fetching', () => {
  const monoAPI = new MonoAPI(process.env.MONO_API_KEY as string);

  it('should return client info', async () => {
    const clientInfo = await monoAPI.fetchClientInfo();

    expect(typeof clientInfo.clientId === 'string').toBeTruthy();
    expect(typeof clientInfo.name === 'string').toBeTruthy();
    expect(typeof clientInfo.permissions === 'string').toBeTruthy();
    expect(Array.isArray(clientInfo.accounts)).toBeTruthy();
  });
});
