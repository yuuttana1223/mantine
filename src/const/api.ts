const COIN_GECKO_API_BASE_URL = "https://api.coingecko.com/api/v3";

type Date = {
  day?: number;
  month?: number;
  year?: number;
};

export const apiUrl = {
  coinGecko: {
    base: COIN_GECKO_API_BASE_URL,
    coins: {
      list: `${COIN_GECKO_API_BASE_URL}/coins/list`,
      /**
       * @param {string} coinId eg. bitcoin or ethereum...
       */
      getHistory: (id: string, { year, month, day }: Date) =>
        `${COIN_GECKO_API_BASE_URL}/coins/${id}/history?date=${day}-${month}-${year}`,
    },
  },
} as const;
