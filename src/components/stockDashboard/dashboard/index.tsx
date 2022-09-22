import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const downloadStockData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/1x-short-bitcoin-token/ohlc?vs_currency=usd&days=1`
      );
    };
    downloadStockData();
  }, []);

  return null;
};

export default Dashboard;
