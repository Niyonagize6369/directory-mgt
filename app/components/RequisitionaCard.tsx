// components/RequisitionCard.tsx
import React from "react";
import {
  DocumentTextIcon,
  UserIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Requisition } from "../types";

interface RequisitionCardProps {
  requisition: Requisition;
}

const priorityStyles: Record<Requisition["priority"], string> = {
  "HIGH PRIORITY": "bg-red-100 text-red-700 border-red-500",
  "MEDIUM PRIORITY": "bg-yellow-100 text-yellow-700 border-yellow-500",
  "LOW PRIORITY": "bg-green-100 text-green-700 border-green-500",
};

export default function RequisitionCard({ requisition }: RequisitionCardProps) {
  const {
    id,
    priority,
    department,
    submitter,
    submittedDate,
    risk,
    requestedItems,
    totalValue,
    itemsCount,
  } = requisition;
  const priorityClass =
    priorityStyles[priority] || "bg-gray-100 text-gray-700 border-gray-400";

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 ${priorityClass
        .split(" ")
        .find((c) => c.startsWith("border-"))}`}
    >
      {/* Header & Total Value */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-3">
            <p className="text-lg font-bold text-gray-900">{id}</p>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityClass
                .split(" ")
                .slice(0, 2)
                .join(" ")}`}
            >
              {priority}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-1">
            {department}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">
            ${totalValue.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">{itemsCount} items</p>
        </div>
      </div>

      {/* Sub-details */}
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p className="flex items-center">
          <UserIcon className="w-4 h-4 mr-2" />
          {submitter}
        </p>
        <p className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-2" />
          Submitted: {submittedDate}
        </p>
        <p className="flex items-center text-red-600">
          <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
          {risk}
        </p>
      </div>

      {/* Requested Items */}
      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Requested Items:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
          <DocumentTextIcon className="w-5 h-5 mr-2" /> Review Details
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-150">
          Sign & Approve
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition duration-150">
          X Reject
        </button>
      </div>
    </div>
  );
}
