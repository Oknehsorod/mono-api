# MonoAPI

<p align="center">
<img alt="mono api" src="https://api.monobank.ua/docs/logo.png" width="200px">
</p>

<h5 align="center">This is typed and tested wrapper for MonoAPI by Monobank</h5>

## Token Creation

To create MonoAPI token you need to visit Official [MonoAPI](https://api.monobank.ua/index.html 'MonoAPI') page and create you token.

## Install

| Package Manager |         Script          |
| :-------------: | :---------------------: |
|       NPM       |     npm i mono-api      |
|      YARN       | yarn add npm i mono-api |
|      PNPM       |    pnpm add mono-api    |

## Examples

**JavaScript/TypeScript:**

```javascript
const monoAPI = new MonoAPI('<your-token>');

const clientInfo = await monoAPI.fetchClientInfo();

const today = new Date();
const oneWeekAgo = new Date(today);
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

const statements = await monoAPI.fetchStatements({
  from: oneWeekAgo,
  to: today,
});
```

## Suggestion

If you want to offer me to add new methods to this API, feel free to create an issue.
