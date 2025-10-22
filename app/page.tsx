// pages/index.tsx
import React from "react";
import Sidebar from "@/app/components/Sidebar";
import MetricCard from "@/app/components/metricCard";
import RequisitionCard from "@/app/components/RequisitionaCard";
import { MetricData, Requisition } from "@/app/types";

// Icon Imports for Metric Cards and Header
import {
  ClockIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const metricData: MetricData[] = [
  {
    title: "Pending Review",
    value: "3",
    icon: ClockIcon,
    colorClass: "text-yellow-500",
  },
  {
    title: "High Priority",
    value: "1",
    icon: ExclamationTriangleIcon,
    colorClass: "text-red-500",
  },
  {
    title: "Total Value",
    value: "$3,500",
    icon: DocumentTextIcon,
    colorClass: "text-blue-500",
  },
  {
    title: "Avg. Processing",
    value: "2.5 Hrs",
    icon: CheckCircleIcon,
    colorClass: "text-green-500",
  },
];

const requisitions: Requisition[] = [
  {
    id: "REQ-2025-001",
    priority: "HIGH PRIORITY",
    department: "Diamond Cutting",
    submitter: "Rachel Niyonagize - Cutting Supervisor",
    submittedDate: "2025-01-15 09:30",
    risk: "Production stoppage risk",
    totalValue: 14100,
    itemsCount: 2,
    requestedItems: [
      {
        name: "Diamond Cutting Blade - Industrial Grade",
        qty: 5,
        price: 12500,
      },
      { name: "Precision Measuring Tools Set", qty: 2, price: 1600 },
    ],
  },
  {
    id: "REQ-2025-002",
    priority: "MEDIUM PRIORITY",
    department: "Gold Processing Unit",
    submitter: "A. Rachel Niyonagize - Processing Lead",
    submittedDate: "2025-01-14 14:20",
    risk: "Standard procurement",
    totalValue: 6300,
    itemsCount: 2,
    requestedItems: [
      { name: "Gold Refining Chemicals", qty: 10, price: 4500 },
      { name: "Safety Equipment - Protective Gear", qty: 15, price: 1800 },
    ],
  },
];

const PendingApprovalsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar */}
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
          {/* Left space for logo/search if needed, but keeping it empty for this design */}
          <div className="grow"></div>
          <div className="flex items-center space-x-6">
            <button>
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                Rachel Niyonagize
              </p>
              <p className="text-xs text-gray-500">Managing Director</p>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg text-white">
              RN
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Pending Approvals
            </h1>
            <p className="text-gray-500 mt-1">
              Requisitions requiring operations review and approval
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {metricData.map((data, index) => (
              <MetricCard
                key={index}
                title={data.title}
                value={data.value}
                icon={data.icon}
                colorClass={data.colorClass}
              />
            ))}
          </div>

          {/* Requisitions List */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Requisitions Awaiting Your Approval
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Review details and provide digital signature for approval
            </p>

            <div className="space-y-6">
              {requisitions.map((req) => (
                <RequisitionCard key={req.id} requisition={req} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PendingApprovalsPage;
