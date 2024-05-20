import { MonoAPI } from '../src';
import 'dotenv/config';

describe('Basic test for Currencies fetching', () => {
  const monoAPI = new MonoAPI('');

  it('should return currencies', async () => {
    const currencies = await monoAPI.fetchCurrencies();

    expect(Array.isArray(currencies)).toBeTruthy();
  });
});
