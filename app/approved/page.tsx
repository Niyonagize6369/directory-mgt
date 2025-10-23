"use client";
// pages/approved.tsx
import React, { Key, useState } from "react"; // FIX 1: Import useState

// FIX 1 & 2: Import all Heroicons from the same, correct 24/outline path
import {
  CheckCircleIcon,
  DocumentTextIcon,
  DocumentIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  Bars3Icon, // Imported for the mobile menu button
  XMarkIcon, // Import X icon for closing the menu
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

// === FIX: Data Definitions (remain unchanged) ===
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
  // ... (data remains unchanged)
];

// =========================================================================================

const ApprovedRequisitionsPage: React.FC = () => {
  // FIX 2: Initialize state for mobile menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    // Make Sidebar hidden on small screens, Main content takes full width
    <div className="flex min-h-screen bg-gray-50">
      {/* FIX 3: Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* FIX 4: Sidebar Container - Conditional visibility and position */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform md:relative md:flex transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar */}
        <header className="flex justify-between md:justify-end items-center px-4 md:px-8 py-4 bg-white shadow-sm">
          {" "}
          {/* FIX 2: Added justify-between for mobile */}
          {/* Mobile Menu Button - Now calls toggleSidebar */}
          <button onClick={toggleSidebar} className="md:hidden">
            {isSidebarOpen ? ( // Optional: Use X icon when open
              <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            )}
          </button>
          <div className="hidden md:block grow"></div>{" "}
          {/* Hide grow on mobile to prevent empty space */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {" "}
            {/* Adjusted spacing for mobile */}
            {/* Search and Alert Icons (visible on all) */}
            <button className="hidden sm:block">
              {" "}
              {/* Hide search icon on tiny screens */}
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <DocumentTextIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            {/* User Info (Hide on small screens) */}
            <div className="hidden sm:block text-right">
              {" "}
              {/* FIX 4: Hide user text on mobile */}
              <p className="text-sm font-semibold text-gray-900">
                Rachel Niyonagize
              </p>
              <p className="text-xs text-gray-500">Managing Director</p>
            </div>
            {/* User Avatar (visible on all) */}
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0">
              RN
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {" "}
          {/* Adjusted padding for mobile */}
          {/* Title Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            {" "}
            {/* FIX 5: Stack title and button on mobile */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {" "}
                {/* Adjusted title size */}
                Approved Requisitions
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Track status of approved requisitions and procurement progress
              </p>
            </div>
            {/* Export Report Button */}
            <button className="mt-4 sm:mt-0 flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150 shadow-sm">
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
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-100">
            {" "}
            {/* FIX 6: Stack search bar components on mobile */}
            <div className="flex-1 relative w-full sm:mr-4 mb-3 sm:mb-0">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by requisition ID, department, or requestor..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center sm:justify-start px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition duration-150">
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
