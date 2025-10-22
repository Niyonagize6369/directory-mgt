// components/AvailableReportCard.tsx
import React from "react";
import { AvailableReport } from "../types";
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

interface AvailableReportCardProps {
  report: AvailableReport;
}

export default function AvailableReportCard({
  report,
}: AvailableReportCardProps) {
  const { title, description, generatedDate, size, format, status } = report;
  const statusClass =
    status === "READY"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center transition duration-150 hover:bg-gray-50">
      {/* Report Details */}
      <div className="flex flex-col grow mr-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-1">
          {title}
          <span
            className={`ml-3 text-xs font-semibold px-2 py-0.5 rounded-full ${statusClass}`}
          >
            {status}
          </span>
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-400 mt-1">
          Generated: {generatedDate} • Size: {size} • Format: {format}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3 shrink-0">
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1">
          Preview
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-150 shadow-md">
          <ArrowDownTrayIcon className="w-4 h-4 mr-2" /> Download
        </button>
      </div>
    </div>
  );
}
