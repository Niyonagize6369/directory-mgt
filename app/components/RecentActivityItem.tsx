// components/RecentActivityItem.tsx
import React from "react";
import { RecentActivity } from "../types";

interface RecentActivityItemProps {
  activity: RecentActivity;
}

export default function RecentActivityItem({
  activity,
}: RecentActivityItemProps) {
  const {
    reportName,
    action,
    timeAgo,
    actor,
    icon: Icon,
    iconClass,
  } = activity;

  return (
    <div className="flex items-start mb-4 last:mb-0">
      <div className={`p-1.5 rounded-full mr-3 ${iconClass}`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">
          {reportName} <span className="font-normal">{action}</span>
        </p>
        <p className="text-xs text-gray-500 mt-0.5">
          {timeAgo} by{" "}
          <span className="font-medium text-gray-700">{actor}</span>
        </p>
      </div>
    </div>
  );
}
