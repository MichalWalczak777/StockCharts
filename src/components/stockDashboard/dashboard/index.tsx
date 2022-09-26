import axios from "axios";
import { useState, useEffect } from "react";
import ChartGrid from "../chartGrid";

const Dashboard = () => {
  const requestedCurrenciesAmount: number = 10;
  const [currencies, setCurrencies] = useState<Array<string>>([]);

  useEffect(() => {
    const getCurrenciesByMarketCap = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=${requestedCurrenciesAmount}&page=1&sparkline=false`
      );
      const curreciesIDs: Array<string> = response.data.map(
        (currencyData: { id: string }) => currencyData.id
      );
      setCurrencies(curreciesIDs);
    };
    getCurrenciesByMarketCap();
  }, []);

  return <ChartGrid cryptocurrencies={currencies} />;
};

export default Dashboard;
