import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "../../styles";
import ChartGrid from "../chartGrid";
import DashboardMenu from "../dashboardMenu";
import { Logo } from "./styles";

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

  return (
    <Container>
        <Logo>STOCK CHARTS</Logo>
        <DashboardMenu/>
        <ChartGrid cryptocurrencies={currencies} />;
    </Container>
  )
};

export default Dashboard;
