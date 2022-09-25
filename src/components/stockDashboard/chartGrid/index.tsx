import Chart from "../chart";
import { ChartGridWrapper } from "./styles";

interface IChartGridProps {
  cryptocurrencies: Array<string>;
}

const ChartGrid = ({ cryptocurrencies }: IChartGridProps) => {
  return (
    <ChartGridWrapper>
      {cryptocurrencies.map((currency) => (
        <Chart key={currency} currencySymbol={currency} />
      ))}
    </ChartGridWrapper>
  );
};

export default ChartGrid;
