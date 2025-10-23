"use client";
// pages/executive.tsx
import React from "react";
import Sidebar from "../components/Sidebar";
import ExecutiveKpiCard from "../components/ExecutiveKpiCard";
import ExecutiveApprovalItem from "../components/ExecutiveApprovalItem";
import { ExecutiveKpi, ExecutiveApproval, OverviewItem } from "../types";
import {
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  RectangleStackIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

// --- Data Definitions ---

const kpiData: ExecutiveKpi[] = [
  {
    title: "Monthly Revenue",
    value: "125,000",
    unit: "$",
    change: "+12%",
    changeType: "positive",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Production Efficiency",
    value: "87",
    unit: "%",
    change: "-5%",
    changeType: "negative",
    icon: PresentationChartBarIcon,
  },
  {
    title: "Active Projects",
    value: "24",
    change: "+3",
    changeType: "positive",
    icon: RectangleStackIcon,
  },
  {
    title: "Team Performance",
    value: "92",
    unit: "%",
    change: "+8%",
    changeType: "positive",
    icon: UsersIcon,
  },
];

const approvalData: ExecutiveApproval[] = [
  {
    id: "REQ-001",
    priority: "High priority",
    title: "Major Equipment Purchase",
    description: "New cutting machinery for increased production",
    details: "Operations • By Operations Director • 2025-01-15",
    amount: 85000,
  },
  {
    id: "REQ-002",
    priority: "Medium",
    title: "Gold Procurement Contract",
    description: "Quarterly raw materials acquisition",
    details: "Finance • By Finance Director • 2025-01-14",
    amount: 245000,
  },
  {
    id: "REQ-003",
    priority: "Low",
    title: "Team Training Program",
    description: "Advanced jewelry crafting certification",
    details: "HR • By HR Manager • 2025-01-13",
    amount: 12500,
  },
];

const overviewData: OverviewItem[] = [
  { label: "Pending Decisions", value: 8, valueType: "number" },
  { label: "Active Operations", value: 12, valueType: "number" },
  { label: "Team Alerts", value: 3, valueType: "number" },
  {
    label: "Revenue Target",
    value: "87% achieved",
    valueType: "percentage",
    isTarget: true,
  },
];

// --- Component ---

const ExecutiveDashboardPage: React.FC = () => {
  // NOTE: In a real app, you would pass a prop to Sidebar to indicate the active page.
  // Assuming the Sidebar component is updated to handle 'Executive Dashboard' as current:
  // <Sidebar activePage="Executive Dashboard" />

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* The Sidebar component should be configured to highlight 'Executive Dashboard' */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Same as previous pages */}
        <header className="flex justify-end items-center px-8 py-4 bg-white shadow-sm">
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
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg text-white">
              RN
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Executive Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Strategic oversight and high-level approvals
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {kpiData.map((data, index) => (
              <ExecutiveKpiCard key={index} {...data} />
            ))}
          </div>

          {/* Approvals and Overview Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Executive Approvals Required */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 rounded-full bg-yellow-500"></span>
                  Executive Approvals Required
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  High-value decisions requiring your authorization
                </p>

                <div className="space-y-4">
                  {approvalData.map((approval) => (
                    <ExecutiveApprovalItem
                      key={approval.id}
                      approval={approval}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Today's Overview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Today's Overview
                </h2>

                <div className="space-y-4">
                  {overviewData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          item.isTarget ? "text-green-600" : "text-gray-900"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExecutiveDashboardPage;
