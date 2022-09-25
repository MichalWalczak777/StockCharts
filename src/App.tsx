import React from "react";
import Dashboard from "./components/stockDashboard/dashboard";
import logo from "./logo.svg";
import { cryptocurrencies } from "./utils";

function App() {
  return (
    <div>
      <Dashboard cryptocurrencies={cryptocurrencies} />
    </div>
  );
}

export default App;
