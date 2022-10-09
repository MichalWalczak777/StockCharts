import axios from "axios";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import { StockDataModel } from "../models";
import { ChartWrapper } from "./styles";
import { convertDate } from "./utils";

interface IChartProps {
  currencySymbol: string;
}

const Chart = ({ currencySymbol }: IChartProps) => {
  const [stockData, setStockData] = useState<Array<StockDataModel>>();

  useEffect(() => {
    const downloadStockData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${currencySymbol}/ohlc?vs_currency=usd&days=1`
      );
      const data: Array<Array<number>> = response?.data;
      const closeIndexData: Array<StockDataModel> = data?.map((OHLCArray) => ({
        time: convertDate(new Date(OHLCArray[0])),
        close: OHLCArray[OHLCArray.length - 1],
      }));
      closeIndexData && setStockData(closeIndexData);
    };
    downloadStockData();
  }, [currencySymbol]);
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={stockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default Chart;
