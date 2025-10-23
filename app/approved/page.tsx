"use client";
// pages/approved.tsx
import React, { Key } from "react";

// FIX 1 & 2: Import all Heroicons from the same, correct 24/outline path
import {
  CheckCircleIcon,
  DocumentTextIcon,
  DocumentIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

// FIX 3: Import local components with correct capitalization
import Sidebar from "../components/Sidebar";
import MetricCard from "@/app/components/metricCard";
import ApprovedRequisitionCard from "@/app/components/ApproveRequisitionCard";

// FIX 4: Correctly import all necessary types
import {
  ApprovedMetricData,
  ApprovedRequisition,
  RequestedItem,
  HeroIcon,
} from "../types";

// === FIX: Data Definitions (They were missing from the code block, causing the ReferenceError) ===

const metricData: ApprovedMetricData[] = [
  {
    title: "Total Approved",
    value: 4,
    icon: CheckCircleIcon,
    colorClass: "text-green-500",
  },
  {
    title: "In Procurement",
    value: 1,
    icon: DocumentIcon,
    colorClass: "text-blue-500",
  },
  {
    title: "Delivered",
    value: 3,
    icon: CheckCircleIcon,
    colorClass: "text-green-500",
  },
  {
    title: "Total Value",
    value: "$32,100",
    icon: DocumentTextIcon,
    colorClass: "text-gray-500",
  },
];

const requestedItems1: RequestedItem[] = [
  { name: "Diamond Cutting Blade - Industrial Grade", qty: 5, price: 12500 },
  { name: "Precision Measuring Tools Set", qty: 2, price: 1600 },
];

const requestedItems2: RequestedItem[] = [
  { name: "Gold Refining Chemicals", qty: 10, price: 4500 },
  { name: "Safety Equipment - Protective Gear", qty: 15, price: 1800 },
];

const historyRequisitions: ApprovedRequisition[] = [
  //   {
  //     id: "REQ-2025-001",
  //     priority: "HIGH PRIORITY",
  //     status: "In Procurement",
  //     department: "Diamond Cutting Department",
  //     submitter: "Rachel Niyonagize - Cutting Supervisor", // Original submitter
  //     requestedBy: "James Thompson",
  //     approvedDate: "2023-01-15",
  //     approvedBy: "Operations Director, Managing Director",
  //     risk: "Production stoppage risk",
  //     totalValue: 14100,
  //     itemsCount: 2,
  //     requestedItems: requestedItems1,
  //   },
  //   {
  //     id: "REQ-2025-002",
  //     priority: "MEDIUM PRIORITY",
  //     status: "Delivered",
  //     department: "Gold Processing Unit",
  //     submitter: "A. Rachel Niyonagize - Processing Lead",
  //     requestedBy: "Sarah Mitchell",
  //     approvedDate: "2023-01-14",
  //     approvedBy: "Operations Director, Managing Director",
  //     deliveredDate: "2023-01-16",
  //     risk: "Standard procurement",
  //     totalValue: 6300,
  //     itemsCount: 2,
  //     requestedItems: requestedItems2,
  //   },
  // ... (add more requisitions if needed)
];

// =========================================================================================

const ApprovedRequisitionsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Same as before, or slightly simplified */}
        <header className="flex justify-end items-center px-8 py-4 bg-white shadow-sm">
          <div className="grow"></div>
          <div className="flex items-center space-x-6">
            <button>
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <DocumentTextIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                Rachel Niyonagize
              </p>
              <p className="text-xs text-gray-500">Managing Director</p>
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg text-white">
              RN
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Title Section */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Approved Requisitions
              </h1>
              <p className="text-gray-500 mt-1">
                Track status of approved requisitions and procurement progress
              </p>
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150 shadow-sm">
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" /> Export Report
            </button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {metricData.map((data, index) => (
              <MetricCard
                key={index}
                title={data.title}
                value={
                  typeof data.value === "number"
                    ? data.value.toLocaleString()
                    : String(data.value)
                }
                icon={data.icon}
                colorClass={data.colorClass}
              />
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
            <div className="flex-1 relative mr-4">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by requisition ID, department, or requestor..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition duration-150">
              <FunnelIcon className="w-4 h-4 mr-2" /> Filter
            </button>
          </div>

          {/* Approved Requisitions History */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800">
              Approved Requisitions History
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Complete record of approved requisitions and their status
            </p>

            <div className="space-y-6">
              {historyRequisitions.map((req) => (
                <ApprovedRequisitionCard key={req.id} requisition={req} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApprovedRequisitionsPage;
