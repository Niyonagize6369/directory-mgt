// components/ExecutiveApprovalItem.tsx
import React from "react";
import { ExecutiveApproval } from "../types";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

interface ExecutiveApprovalItemProps {
  approval: ExecutiveApproval;
}

const priorityStyles: Record<ExecutiveApproval["priority"], string> = {
  "High priority": "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

export default function ExecutiveApprovalItem({
  approval,
}: ExecutiveApprovalItemProps) {
  const { id, title, priority, description, details, amount } = approval;
  const priorityClass = priorityStyles[priority] || "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-xl p-4 mb-4 border border-gray-100 transition duration-150 hover:shadow-sm">
      <div className="flex justify-between items-start mb-3">
        {/* Title and Priority */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-500">{id}</span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityClass}`}
            >
              {priority}
            </span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mt-1">{title}</h4>
        </div>

        {/* Amount */}
        <p className="text-xl font-bold text-gray-900">
          ${amount.toLocaleString()}
        </p>
      </div>

      {/* Details */}
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-xs text-gray-500 mb-4">{details}</p>

      {/* Actions */}
      <div className="flex space-x-3">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-150 shadow-md">
          <CheckCircleIcon className="w-4 h-4 mr-2" /> Approve
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition duration-150">
          <XCircleIcon className="w-4 h-4 mr-2" /> Reject
        </button>
      </div>
    </div>
  );
}
