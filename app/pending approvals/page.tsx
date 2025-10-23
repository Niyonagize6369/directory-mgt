"use client"; // Required for using useState and mobile interactions
// pages/index.tsx
import React, { useState } from "react";
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
  Bars3Icon, // Added for mobile menu
  XMarkIcon, // Added for mobile menu close
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
  // FIX 1: Sidebar State and Toggler for functionality
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* FIX 2: Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* FIX 3: Sidebar Container - Conditional visibility and position for responsiveness */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0 flex" : "-translate-x-full hidden" // Show/Hide on mobile
        } md:translate-x-0 md:relative md:flex`} // Always visible/relative on desktop
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Added justify-between for mobile, adjusted padding */}
        <header className="flex justify-between md:justify-end items-center px-4 md:px-8 py-4 bg-white shadow-sm">
          {/* FIX 4: Mobile Menu Button */}
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
            {/* Search (Hidden on tiny screens) */}
            <button className="hidden sm:block">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            {/* Bell Icon */}
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            {/* User Info (Hidden on small screens) */}
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-900">
                Rachel Niyonagize
              </p>
              <p className="text-xs text-gray-500">Managing Director</p>
            </div>
            {/* User Avatar (Visible on all) */}
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
          <div className="mb-6 md:mb-8">
            {" "}
            {/* Adjusted margin for mobile */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Pending Approvals
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Requisitions requiring operations review and approval
            </p>
          </div>
          {/* Metric Cards - Already responsive with sm:grid-cols-2 lg:grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {" "}
            {/* Adjusted gap and margin */}
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
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            {" "}
            {/* Adjusted padding */}
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
