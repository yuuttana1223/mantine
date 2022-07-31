import { useCallback, useState } from "react";

export const useDate = (initialState: Date | null) => {
  const [date, setDate] = useState<Date | null>(initialState);
  const handleChangeDate = useCallback((date: Date | null) => {
    setDate(date);
  }, []);

  return { date, handleChangeDate };
};
