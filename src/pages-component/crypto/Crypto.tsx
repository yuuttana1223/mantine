import { DatePicker } from "@mantine/dates";
import { Layout } from "~/layout";
import { useMemo } from "react";
import { Group, Loader, Text } from "@mantine/core";
import { LightningBoltIcon } from "@heroicons/react/solid";
import { useDate } from "~/hooks/form/useDate";
import { useCoinHistory } from "~/hooks/crypto/useCoinHistory";

export const Crypto = () => {
  const { date, handleChangeDate, isLoading } = useDate(new Date());
  const {
    query: { data: bitcoin },
  } = useCoinHistory("bitcoin", date);
  const {
    query: { data: ethereum },
  } = useCoinHistory("ethereum", date);

  return (
    <Layout title="crypto">
      <Group direction="column" position="center">
        <LightningBoltIcon className="mb-4 h-10 w-10 text-blue-500" />
        {isLoading && <Loader />}
        <Text mt="md">
          <Text color="blue" component="span">
            Bitcoin
          </Text>{" "}
          {Math.round(Number(bitcoin?.market_data?.current_price.jpy) * 100) /
            100}
        </Text>
        <Text>
          <Text color="cyan" component="span">
            Ethereum
          </Text>{" "}
          {Math.round(Number(ethereum?.market_data?.current_price.jpy) * 100) /
            100}
        </Text>
        <DatePicker my="md" value={date} onChange={handleChangeDate} />
      </Group>
    </Layout>
  );
};
