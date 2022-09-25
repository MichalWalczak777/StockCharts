import axios from "axios";
import { useState, useEffect } from "react";
import { StockDataModel } from "../models";
import { convertDate } from "./utils";

const Chart = () => {
  const [stockData, setStockData] = useState<Array<StockDataModel>>();

  useEffect(() => {
    const downloadStockData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/1x-short-bitcoin-token/ohlc?vs_currency=usd&days=1`
      );
      const data: Array<Array<number>> = response?.data;
      const closeIndexData: Array<StockDataModel> = data?.map((OHLCArray) => ({
        time: convertDate(new Date(OHLCArray[0])),
        closed: OHLCArray[OHLCArray.length - 1],
      }));
      closeIndexData && setStockData(closeIndexData);
    };
    downloadStockData();
  }, []);
  return null;
};

export default Chart;
