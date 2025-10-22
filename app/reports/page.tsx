"use client";
// pages/reports.tsx
import React, { use } from "react";
import Sidebar from "../components/Sidebar";
import ReportKpiCard from "../components/ReportKpiCard";
import AvailableReportCard from "../components/AvailableReportCard";
import RecentActivityItem from "../components/RecentActivityItem";
import {
  ReportKpi,
  AvailableReport,
  RecentActivity,
  QuickAction,
} from "../types";

// Icon Imports
import {
  CurrencyDollarIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  DocumentArrowDownIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import {
  DocumentMagnifyingGlassIcon,
  Bars3CenterLeftIcon,
  PlusCircleIcon,
  ArrowDownCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

// --- Data Definitions ---

const reportKpiData: ReportKpi[] = [
  {
    title: "Total Budget Utilized",
    value: "35,400",
    unit: "$",
    icon: CurrencyDollarIcon,
  },
  { title: "Departments Managed", value: "12", icon: BuildingOffice2Icon },
  { title: "Monthly ROI", value: "15.2", unit: "%", icon: ChartPieIcon },
  { title: "System Efficiency", value: "92", unit: "%", icon: AcademicCapIcon },
];

const availableReports: AvailableReport[] = [
  {
    title: "Executive Summary Report",
    description: "High-level overview of all operations and key metrics",
    generatedDate: "2025-01-15",
    size: "3.2 MB",
    format: "PDF",
    status: "READY",
  },
  {
    title: "Financial Performance Report",
    description: "Budget analysis, spending trends, and financial forecasts",
    generatedDate: "2025-01-14",
    size: "2.8 MB",
    format: "Excel",
    status: "READY",
  },
  {
    title: "Strategic Planning Report",
    description: "Long-term operational planning and resource allocation",
    generatedDate: "2025-01-12",
    size: "4.1 MB",
    format: "PDF",
    status: "READY",
  },
];

const quickActions: QuickAction[] = [
  { label: "Executive Summary", icon: ArrowTrendingUpIcon },
  { label: "Strategic Overview", icon: ClockIcon },
  { label: "Custom Report", icon: DocumentTextIcon },
];

const recentActivity: RecentActivity[] = [
  {
    reportName: "Executive Summary Report",
    action: "downloaded",
    timeAgo: "2 hours ago",
    actor: "Rachel Niyonagize",
    icon: ArrowDownTrayIcon,
    iconClass: "bg-blue-500",
  },
  {
    reportName: "Financial Performance Report",
    action: "generated",
    timeAgo: "1 day ago",
    actor: "System",
    icon: ChartBarIcon,
    iconClass: "bg-green-500",
  },
  {
    reportName: "Custom report",
    action: "created",
    timeAgo: "3 days ago",
    actor: "Rachel Niyonagize",
    icon: DocumentPlusIcon,
    iconClass: "bg-orange-500",
  },
];

// --- Component ---

const ExecutiveReportsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* The Sidebar component should be configured to highlight 'Reports' */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Same as previous pages */}
        <header className="flex justify-end items-center px-8 py-4 bg-white shadow-sm">
          <div className="grow"></div>
          <div className="flex items-center space-x-6">
            <button>
              <Bars3CenterLeftIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <DocumentMagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
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
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Executive Reports
              </h1>
              <p className="text-gray-500 mt-1">
                Strategic overview, financial summaries, and executive
                dashboards
              </p>
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-150 shadow-md">
              <DocumentPlusIcon className="w-4 h-4 mr-2" /> Create Custom Report
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {reportKpiData.map((data, index) => (
              <ReportKpiCard key={index} {...data} />
            ))}
          </div>

          {/* Reports and Activity Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Available Reports */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg mb-6">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Available Reports
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Generated reports ready for download
                  </p>
                </div>

                {/* Reports List */}
                <div className="divide-y divide-gray-100">
                  {availableReports.map((report, index) => (
                    <AvailableReportCard key={index} report={report} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quick Actions & Recent Activity */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-150"
                    >
                      <action.icon className="w-5 h-5 mr-3 text-gray-500" />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Recent Activity
                </h2>

                <div className="divide-y divide-gray-100">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="py-3 first:pt-0 last:pb-0">
                      <RecentActivityItem activity={activity} />
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

export default ExecutiveReportsPage;
