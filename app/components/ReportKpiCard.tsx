// components/ReportKpiCard.tsx
import React from "react";
import { ReportKpi } from "../types";

export default function ReportKpiCard({
  title,
  value,
  unit,
  icon: Icon,
}: ReportKpi) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-36 transition duration-300 hover:shadow-xl">
      {/* Title */}
      <div className="text-sm font-medium text-gray-500 mb-2">{title}</div>

      {/* Value and Icon */}
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <span className="text-4xl font-bold text-gray-900">{unit}</span>
          <span className="text-4xl font-bold text-gray-900 ml-1">{value}</span>
        </div>
        <Icon className="w-8 h-8 text-gray-300" />
      </div>
    </div>
  );
}
