import { ApiService } from "@apicase/services";
import fetch from "@apicase/adapter-fetch";

const BASE_URL = `https://www.alphavantage.co/query`;

const beforeIntradayHook = ({ payload, next }) => {
  payload.query = {
    ...payload.query,
    function: "TIME_SERIES_DAILY",
    apikey: "NWZJHLTMZVD59CNL"
  }
  console.log(payload);
  next(payload);
};

const IntradayService = new ApiService({
  adapter: fetch,
  url: BASE_URL,
  method: "GET",
  mode: 'cors',
  hooks: {
    before: beforeIntradayHook
  }
});

const Intraday = {
  getAll: async (symbol) => {
    return await IntradayService.doRequest({ query: {symbol}})
  }
};

export default { Intraday };
