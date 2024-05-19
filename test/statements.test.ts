import { MonoAPI } from '../src';
import 'dotenv/config';

describe('Basic test for Statements fetching', () => {
  const monoAPI = new MonoAPI(process.env.MONO_API_KEY as string);

  it('should return statements', async () => {
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const statements = await monoAPI.fetchStatements({
      from: oneWeekAgo,
      to: today,
    });

    expect(Array.isArray(statements)).toBeTruthy();
  });
});
