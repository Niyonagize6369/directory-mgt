"use client";
// pages/signout.tsx
import React from "react";

// Icon Imports
import {
  ArrowLeftOnRectangleIcon,
  CheckCircleIcon,
  // Moved these imports below to align with other pages and prevent confusion
  // UserIcon, BellIcon, MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon, // Added to align with button icon
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// --- Component ---

const SignOutPage: React.FC = () => {
  // NOTE: In a real application, the signOut logic (e.g., calling an API endpoint)
  // would be triggered here, and the user would be redirected to the /login page.

  return (
    // The Sign Out page does not need the Sidebar as per standard UX,
    // but we'll use a centered layout for professionalism.
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Header/Navbar - Adjusted padding and text size for mobile */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-3 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 rounded flex items-center justify-center font-bold mr-2 text-white text-base">
            N
          </div>
          <span className="text-lg sm:text-xl font-semibold text-gray-900">
            NGALI MINING
          </span>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Search/Bell icons are usually unnecessary on a sign-out page, but responsive classes ensure they scale if kept */}
          <button className="hidden sm:block">
            <MagnifyingGlassIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-gray-900" />
          </button>
          <button>
            <BellIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-gray-900" />
          </button>
        </div>
      </header>

      {/* Main Content Area - Centered and responsive padding */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        {/* Central Card - Adjusted padding and max-width */}
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 w-full max-w-sm sm:max-w-md text-center border border-gray-100">
          {/* Icon - Scaled for responsiveness */}
          <ArrowLeftOnRectangleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 mx-auto mb-4 sm:mb-6" />

          {/* Title - Scaled for responsiveness */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            You Have Signed Out
          </h1>

          {/* Description - Scaled for responsiveness */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Thank you for using the NGALI MINING Operations Portal. Your session
            has been securely terminated.
          </p>

          <div className="space-y-4">
            <button
              // In a real app, this would be a Next.js <Link href="/login">
              onClick={() => (window.location.href = "/login")}
              className="w-full flex items-center justify-center px-4 py-3 text-base sm:text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-150 shadow-md"
            >
              <UserIcon className="w-5 h-5 mr-2" /> Log In Again
            </button>
            <p className="text-xs sm:text-sm text-gray-400">
              Or close this window.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignOutPage;
