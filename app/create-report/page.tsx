"use client"; // Required for using useState and form handling
// pages/create-report.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SettingsSectionCard from "../components/SettingsSectionCard"; // Reusing the clean card style
import { CustomReportForm } from "../types";

// Icon Imports
import {
  DocumentPlusIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// --- Data Definitions (for Form Options) ---

const initialReportState: CustomReportForm = {
  reportName: "",
  description: "",
  dataSources: ["Requisitions", "Approvals"],
  dateRange: "LAST_30_DAYS",
  metrics: ["Total Value", "Items Count"],
  groupBy: "Department",
  format: "PDF",
  schedule: "NONE",
};

const availableMetrics = [
  "Total Value",
  "Items Count",
  "Average Processing Time",
  "Approval Rate",
  "Procurement Status",
];
const availableGroups = ["Department", "Submitter", "Date (Week)", "Priority"];
const availableFormats = ["PDF", "Excel", "CSV"];
const availableSchedules = ["NONE", "DAILY", "WEEKLY", "MONTHLY"];

// --- Component ---

const CreateCustomReportPage: React.FC = () => {
  const [formData, setFormData] =
    useState<CustomReportForm>(initialReportState);

  // NOTE: currentStep is removed as we are now using a single form
  // const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMetricChange = (metric: string, isChecked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      metrics: isChecked
        ? [...prev.metrics, metric]
        : prev.metrics.filter((m) => m !== metric),
    }));
  };

  const isFormValid =
    formData.reportName.trim().length > 0 && formData.metrics.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Here you would call your API to generate the report
    console.log("Submitting Report:", formData);
    alert(`Report "${formData.reportName}" has been queued for generation.`);
    // window.location.href = '/reports';
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Same as previous pages */}
        <header className="flex justify-end items-center px-8 py-4 bg-white shadow-sm">
          <div className="flex-grow"></div>
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
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <DocumentPlusIcon className="w-8 h-8 mr-3 text-yellow-500" />
              Create Custom Report
            </h1>
            <p className="text-gray-500 mt-1">
              Configure the data, scope, and output for your new executive
              report.
            </p>
          </div>

          {/* Single Form Container */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            {/* Section 1: Report Details (from Step 1) */}
            <SettingsSectionCard
              title="Report Details (Title, Status, Description)"
              description="Define the name, description, and primary data source for your new report."
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Status (Read-Only) */}
                <div className="col-span-1">
                  <span className="text-sm font-medium text-gray-700 block mb-1">
                    Status
                  </span>
                  <span className="block w-full border border-gray-300 bg-gray-100 text-gray-600 rounded-md shadow-sm p-3">
                    Draft
                  </span>
                </div>
                {/* Date (Read-Only) */}
                <div className="col-span-1">
                  <span className="text-sm font-medium text-gray-700 block mb-1">
                    Creation Date
                  </span>
                  <span className="block w-full border border-gray-300 bg-gray-100 text-gray-600 rounded-md shadow-sm p-3">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                {/* Format (Read-Only) */}
                <div className="col-span-1">
                  <span className="text-sm font-medium text-gray-700 block mb-1">
                    Default Format
                  </span>
                  <span className="block w-full border border-gray-300 bg-gray-100 text-gray-600 rounded-md shadow-sm p-3">
                    {formData.format}
                  </span>
                </div>
              </div>

              {/* Report Name */}
              <label className="block mb-6">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Report Name <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  name="reportName"
                  value={formData.reportName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Q1 Requisitions & Approval Summary"
                  className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </label>

              {/* Description */}
              <label className="block mb-6">
                <span className="text-sm font-medium text-gray-700 block mb-1">
                  Description
                </span>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="A brief summary of the report's purpose and scope."
                  className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 resize-none"
                ></textarea>
              </label>
            </SettingsSectionCard>

            {/* Section 3: Output & Delivery (from Step 3) */}
            <SettingsSectionCard
              title="Output & Delivery"
              description="Choose the report format and set up a recurring schedule."
            >
              {/* Format */}
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Report Format
              </h4>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {availableFormats.map((format) => (
                  <button
                    key={format}
                    type="button" // Use type="button" to prevent form submission
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        format: format as "PDF" | "Excel" | "CSV",
                      }))
                    }
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition duration-150 border ${
                      formData.format === format
                        ? "bg-yellow-500 text-white border-yellow-500 shadow-md"
                        : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {format}
                  </button>
                ))}
              </div>
            </SettingsSectionCard>

            {/* Submit Button (outside the cards but inside the form) */}
            <div className="flex justify-end pt-4 mb-8">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-6 py-3 text-lg font-medium text-white rounded-lg transition duration-150 shadow-lg ${
                  isFormValid
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-400 cursor-not-allowed"
                }`}
              >
                <CheckCircleIcon className="w-5 h-5 mr-2 inline" /> Create
                Report Now
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateCustomReportPage;
