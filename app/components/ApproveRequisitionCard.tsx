// components/ApprovedRequisitionCard.tsx
import React from "react";
import { ApprovedRequisition } from "../types";
import {
  DocumentTextIcon,
  TruckIcon,
  DocumentArrowDownIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

interface ApprovedRequisitionCardProps {
  requisition: ApprovedRequisition;
}

const priorityStyles: Record<ApprovedRequisition["priority"], string> = {
  "HIGH PRIORITY": "bg-red-100 text-red-700",
  "MEDIUM PRIORITY": "bg-yellow-100 text-yellow-700",
  "LOW PRIORITY": "bg-green-100 text-green-700",
};

const statusStyles: Record<ApprovedRequisition["status"], string> = {
  "In Procurement": "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  "On Hold": "bg-red-100 text-red-700",
};

export default function ApprovedRequisitionCard({
  requisition,
}: ApprovedRequisitionCardProps) {
  const {
    id,
    priority,
    status,
    department,
    requestedBy,
    approvedDate,
    approvedBy,
    deliveredDate,
    requestedItems,
    totalValue,
    itemsCount,
  } = requisition;

  const priorityClass = priorityStyles[priority] || "bg-gray-100 text-gray-700";
  const statusClass = statusStyles[status] || "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      {/* Header & Status/Total Value */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-3">
            <p className="text-lg font-bold text-gray-900">{id}</p>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusClass}`}
            >
              {status}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityClass}`}
            >
              {priority.replace(" PRIORITY", "")}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-1">
            {department}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-gray-900">
            ${totalValue.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">{itemsCount} items</p>
        </div>
      </div>

      {/* History Details */}
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p className="flex items-center">
          <span className="mr-4">
            A Requested by: <span className="font-medium">{requestedBy}</span>
          </span>
          <span className="mr-4">
            Approved: <span className="font-medium">{approvedDate}</span>
          </span>
          {deliveredDate && (
            <span className="flex items-center">
              <TruckIcon className="w-4 h-4 mr-1 text-green-600" />
              Delivered:{" "}
              <span className="font-medium ml-1">{deliveredDate}</span>
            </span>
          )}
        </p>
        <p className="text-xs text-gray-500">Approved by: {approvedBy}</p>
      </div>

      {/* Requested Items */}
      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Items:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-4">
          {requestedItems.map((item, index) => (
            <li key={index}>
              {item.name} (Qty: {item.qty}) -{" "}
              <span className="font-semibold">
                ${item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-150">
          <DocumentTextIcon className="w-5 h-5 mr-2" /> View Details
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-150">
          <TruckIcon className="w-5 h-5 mr-2" /> Track Status
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-150">
          <DocumentArrowDownIcon className="w-5 h-5 mr-2" /> Receipt
        </button>
      </div>
    </div>
  );
}
