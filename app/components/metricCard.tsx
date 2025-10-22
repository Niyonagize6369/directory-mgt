// components/MetricCard.tsx
import React from "react";
import { MetricData } from "../types";

export default function MetricCard({
  title,
  value,
  icon: Icon,
  colorClass,
}: MetricData) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 flex items-center justify-between transition duration-300 ease-in-out hover:shadow-xl`}
    >
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${colorClass} bg-opacity-10 text-xl`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
    </div>
  );
}
