import Chart from "../chart";
import ChartGrid from "../chartGrid";

interface IDashboardProps {
  cryptocurrencies: Array<string>;
}

const Dashboard = ({ cryptocurrencies }: IDashboardProps) => {
  return <ChartGrid cryptocurrencies={cryptocurrencies} />;
};

export default Dashboard;
