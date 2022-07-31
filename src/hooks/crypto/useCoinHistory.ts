import axios from "axios";
import { getDate, getMonth, getYear } from "date-fns";
import { apiUrl } from "~/const/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Coin = {
  market_data: {
    current_price: {
      jpy: number;
    };
  };
};

/**
 * @param {id: string, date: Date | null} オブジェクト形式で引数を一つにしないとuseMutationの引数に入れれない
 */
const fetchCoinHistory = async ({
  id,
  date,
}: {
  id: string;
  date: Date | null;
}) => {
  if (date === null) {
    return;
  }
  const res = await axios.get<Coin>(
    apiUrl.coinGecko.coins.getHistory(id, {
      year: getYear(date),
      month: getMonth(date) + 1,
      day: getDate(date),
    })
  );
  return res.data;
};

export const useCoinHistory = (id: string, date: Date | null) => {
  const queryClient = useQueryClient();

  const query = useQuery([id], () => fetchCoinHistory({ id, date }));

  const mutation = useMutation(fetchCoinHistory, {
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData([id], data);
      }
    },
  });

  return { query, mutation };
};
