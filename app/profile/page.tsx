"use client";

// pages/profile.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SettingsSectionCard from "../components/SettingsSectionCard";
import { UserSettings, SettingsSection } from "../types";

// Icon Imports
import {
  UserIcon,
  LockClosedIcon,
  Cog6ToothIcon,
  BellIcon,
  MagnifyingGlassIcon,
  Bars3Icon, // FIX 1: Added missing icon import for mobile menu
  XMarkIcon, // FIX 2: Added missing icon import for mobile menu close
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// --- Data Definitions ---

const initialSettings: UserSettings = {
  fullName: "Rachel Niyonagize",
  jobTitle: "Managing Director",
  email: "b.ineza@ngalimining.com",
  phoneNumber: "+250 788 123 456",
  defaultCurrency: "USD",
  theme: "light",
  twoFactorEnabled: true,
};

const settingsSections: SettingsSection[] = [
  {
    id: "general",
    title: "General Profile Settings",
    description: "Update your photo, name, email, and contact information.",
  },
  {
    id: "security",
    title: "Security & Access",
    description:
      "Manage your password, two-factor authentication, and active sessions.",
  },
  {
    id: "preferences",
    title: "Application Preferences",
    description:
      "Configure display theme, default currency, and notifications.",
  },
];

// --- Component ---

const ProfileSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings>(initialSettings);
  const [passwordFields, setPasswordFields] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // FIX 3: State and Toggler for mobile sidebar functionality
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* FIX 4: Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* FIX 5: Sidebar Container - Conditional visibility and position for responsiveness */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full" // Show/Hide on mobile
        } md:translate-x-0 md:relative md:flex`} // Always visible/relative on desktop
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header/Navbar - Added responsive classes */}
        <header className="flex justify-between md:justify-end items-center px-4 md:px-8 py-4 bg-white shadow-sm">
          {/* FIX 6: Mobile Menu Button - Now functional */}
          <button onClick={toggleSidebar} className="md:hidden">
            {isSidebarOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            )}
          </button>

          <div className="hidden md:block flex-grow"></div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hidden sm:block">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </button>
            <div className="hidden sm:block text-right">
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
              Profile Settings
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Manage your account information and application preferences.
            </p>
          </div>
          {/* Settings Sections */}
          <div className="w-full lg:max-w-4xl lg:mx-auto">
            {" "}
            {/* Adjusted width for responsiveness */}
            {/* 1. General Profile Settings */}
            <SettingsSectionCard
              title={settingsSections[0].title}
              description={settingsSections[0].description}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-6 mb-8">
                {" "}
                {/* Responsive stacking */}
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg flex-shrink-0">
                  RN
                </div>
                <div className="flex space-x-3">
                  {" "}
                  {/* Use flex to keep buttons together */}
                  <button className="px-3 py-2 sm:px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150">
                    Change Photo
                  </button>
                  <button className="px-3 py-2 sm:px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-150">
                    Remove
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {" "}
                {/* Responsive grid */}
                {/* Full Name, Job Title, Email, Phone Number fields are now responsive */}
                {/* Full Name */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={settings.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
                {/* Job Title */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Job Title
                  </span>
                  <input
                    type="text"
                    name="jobTitle"
                    value={settings.jobTitle}
                    readOnly
                    className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
                {/* Email */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={settings.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
                {/* Phone Number */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={settings.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-150">
                  Save Changes
                </button>
              </div>
            </SettingsSectionCard>
            {/* 2. Security & Access */}
            <SettingsSectionCard
              title={settingsSections[1].title}
              description={settingsSections[1].description}
            >
              {/* Password Fields */}
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Change Password
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                {" "}
                {/* Responsive 1 or 3 column grid */}
                {/* Current Password */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Current Password
                  </span>
                  <input
                    type="password"
                    name="current"
                    value={passwordFields.current}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
                {/* New Password */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    New Password
                  </span>
                  <input
                    type="password"
                    name="new"
                    value={passwordFields.new}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
                {/* Confirm New Password */}
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Confirm New Password
                  </span>
                  <input
                    type="password"
                    name="confirm"
                    value={passwordFields.confirm}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </label>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-150">
                  Update Password
                </button>
              </div>

              {/* Two-Factor Authentication */}
              <div className="mt-8 border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Two-Factor Authentication
                </h4>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-lg space-y-3 sm:space-y-0">
                  {" "}
                  {/* Responsive stacking */}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      2FA is currently{" "}
                      {settings.twoFactorEnabled ? "Enabled" : "Disabled"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Enhance your account security with two-factor
                      authentication.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSettings((prev) => ({
                        ...prev,
                        twoFactorEnabled: !prev.twoFactorEnabled,
                      }))
                    }
                    className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition duration-150 ${
                      settings.twoFactorEnabled
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {settings.twoFactorEnabled ? "Disable" : "Enable"}
                  </button>
                </div>
              </div>
            </SettingsSectionCard>
            {/* Danger Zone: Delete Account */}
            <SettingsSectionCard
              title="Danger Zone"
              description="Permanently close your NGALI MINING account."
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-red-50 border border-red-300 p-4 rounded-lg space-y-3 sm:space-y-0">
                {" "}
                {/* Responsive stacking */}
                <div>
                  <p className="text-sm font-medium text-red-800">
                    Delete Account
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                </div>
                <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-150">
                  Delete Account
                </button>
              </div>
            </SettingsSectionCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
