import { useCallback, useState } from "react";
import { useCoinHistory } from "../crypto/useCoinHistory";

export const useDate = (initialState: Date | null) => {
  const [date, setDate] = useState<Date | null>(initialState);
  const {
    mutation: { mutate: mutateBitcoin },
  } = useCoinHistory("bitcoin", date);

  const {
    mutation: { mutate: mutateEthereum },
  } = useCoinHistory("ethereum", date);

  const handleChangeDate = useCallback(
    (date: Date | null) => {
      setDate(date);
      mutateBitcoin({ id: "bitcoin", date });
      mutateEthereum({ id: "ethereum", date });
    },
    [mutateBitcoin, mutateEthereum]
  );

  return { date, handleChangeDate };
};
