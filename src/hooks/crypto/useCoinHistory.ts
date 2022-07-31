import axios, { AxiosError } from "axios";
import { getDate, getMonth, getYear } from "date-fns";
import { apiUrl } from "~/const/api";
import { useEffect, useState } from "react";

type Coin = {
  market_data: {
    current_price: {
      jpy: number;
    };
  };
};

export const useCoinHistory = (id: string, date: Date | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinHistory, setCoinHistory] = useState<Coin>();
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const fetchCoinHistory = async () => {
      if (date === null) {
        return;
      }
      try {
        setIsLoading(true);
        const res = await axios.get<Coin>(
          apiUrl.coinGecko.coins.getHistory(id, {
            year: getYear(date),
            month: getMonth(date) + 1,
            day: getDate(date),
          })
        );
        setCoinHistory(res.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoinHistory();
  }, [date, id]);

  return { coinHistory, isLoading, error };
};
