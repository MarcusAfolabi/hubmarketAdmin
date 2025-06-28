"use client";

import React, { useState } from "react";
import AreaChart from "@/app/components/commons/AreaChart";
import { RecentReviews } from "./components/Review";
import { Greetings } from "@/utils/Greetings";
import OrdersTable from "./orders/components/OrdersTable";
import Overview from "./components/Overview";

const Home: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("this_week");

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="space-y-4 text-gray-700">
      <div className="flex items-center justify-between">
        <Greetings userName="David" />
        <div className="card p-1 text-white">
          <select value={selectedPeriod} onChange={handlePeriodChange}>
            <option value="this_week">This week</option>
            <option value="last_week">Last week</option>
            <option value="last_month">Last month</option>
            <option value="last_year">Last year</option>
          </select>
        </div>
      </div>

      <Overview period={selectedPeriod} />  

      <div className="flex justify-between gap-4">
        <div className="card w-[70%]">
          <AreaChart />
        </div>
        <div className="card w-[30%] p-6">
          <RecentReviews />
        </div>
      </div>

      <OrdersTable limit={10} />
    </div>
  );
};

export default Home;
