class MonoAPI {
  xToken;
  API_HOST = 'https://api.monobank.ua';

  constructor(xToken) {
    this.xToken = xToken;
  }

  async fetchFromMonobankAPI(path) {
    const response = await fetch(new URL(path, this.API_HOST).toString(), {
      headers: { 'X-Token': this.xToken },
    });

    if (!response.ok) throw new Error('Failed to fetch data from Monobank API');

    return response.json();
  }

  fetchClientInfo() {
    return this.fetchFromMonobankAPI('/personal/client-info');
  }

  fetchStatements({ account = '0', from, to }) {
    return this.fetchFromMonobankAPI(
      `/personal/statement/${account}/${+from}/${+to}`,
    );
  }

  fetchCurrencies() {
    return this.fetchFromMonobankAPI('/bank/currency');
  }
}

module.exports = {
  MonoAPI,
};
