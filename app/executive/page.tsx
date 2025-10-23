"use client";
// pages/executive.tsx
import React, { useState } from "react"; // FIX 1: Import useState
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
  Bars3Icon, // FIX 2: Added missing icon import for mobile menu
  XMarkIcon, // FIX 3: Added missing icon import for mobile menu close
} from "@heroicons/react/24/outline";

// --- Data Definitions (Remain Unchanged) ---

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
  // FIX 4: Sidebar State and Toggler for functionality
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* FIX 5: Mobile Sidebar Overlay (This is the black background) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* FIX 6: Sidebar Container - Conditional visibility and position for responsiveness */}
      <div
        // ADDED w-64 for fixed width and removed conflicting 'flex'/'hidden' on mobile
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full" // Use ONLY translate to hide/show on mobile
        } md:translate-x-0 md:relative md:flex`} // Always visible/relative/flex on desktop
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Added responsive classes */}
        <header className="flex justify-between md:justify-end items-center px-4 md:px-8 py-4 bg-white shadow-sm">
          {/* FIX 7: Mobile Menu Button */}
          <button onClick={toggleSidebar} className="md:hidden">
            {isSidebarOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            )}
          </button>
          <div className="hidden md:block flex-grow"></div>{" "}
          {/* Hidden on mobile */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {" "}
            {/* Adjusted spacing */}
            <button className="hidden sm:block">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <div className="hidden sm:block text-right">
              {" "}
              {/* Hidden on mobile */}
              <p className="text-sm font-semibold text-gray-900">
                Rachel Niyonagize
              </p>
              <p className="text-xs text-gray-500">Managing Director</p>
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0">
              RN
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {" "}
          {/* Adjusted padding */}
          {/* Title Section */}
          <div className="mb-6 md:mb-8">
            {" "}
            {/* Adjusted margin */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Executive Dashboard
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Strategic oversight and high-level approvals
            </p>
          </div>
          {/* KPI Cards - Already responsive with sm:grid-cols-2 lg:grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {" "}
            {/* Adjusted gap */}
            {kpiData.map((data, index) => (
              <ExecutiveKpiCard key={index} {...data} />
            ))}
          </div>
          {/* Approvals and Overview Sections - Stack on small screens */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Executive Approvals Required (Takes full width on mobile) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
                {" "}
                {/* Adjusted padding */}
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

            {/* Right Column: Today's Overview (Stacks below approvals on mobile) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 sticky lg:top-8">
                {" "}
                {/* Adjusted padding and sticky top */}
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
