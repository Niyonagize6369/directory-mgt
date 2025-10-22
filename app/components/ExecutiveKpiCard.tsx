// components/ExecutiveKpiCard.tsx
import React from "react";
import { ExecutiveKpi } from "../types";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function ExecutiveKpiCard({
  title,
  value,
  unit,
  change,
  changeType,
  icon: Icon,
}: ExecutiveKpi) {
  const isPositive = changeType === "positive";
  const changeClass = isPositive ? "text-green-600" : "text-red-600";
  const ChangeIcon = isPositive ? ArrowUpIcon : ArrowDownIcon;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-40 transition duration-300 hover:shadow-xl">
      {/* Title and Icon */}
      <div className="flex justify-between items-center text-sm font-medium text-gray-500 mb-2">
        <span>{title}</span>
        <Icon className="w-5 h-5 text-gray-400" />{" "}
        {/* Using the passed-in icon */}
      </div>

      {/* Value */}
      <div className="flex items-end mb-4">
        <span className="text-4xl font-bold text-gray-900">{unit}</span>
        <span className="text-4xl font-bold text-gray-900 ml-1">{value}</span>
      </div>

      {/* Change Indicator */}
      <div className="flex items-center text-sm font-medium">
        <ChangeIcon className={`w-4 h-4 mr-1 ${changeClass}`} />
        <span className={changeClass}>{change}</span>
        <span className="ml-2 text-gray-500">vs last month</span>
      </div>
    </div>
  );
}
