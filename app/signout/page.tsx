"use client";
// pages/signout.tsx
import React from "react";

// Icon Imports
import {
  ArrowLeftOnRectangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon,
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
      {/* Top Header/Navbar - Simplified header without user info, as user is 'signed out' or signing out */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold mr-2 text-white">
            N
          </div>
          <span className="text-xl font-semibold text-gray-900">
            NGALI MINING
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <button>
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          </button>
          <button>
            <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          </button>
        </div>
      </header>

      {/* Main Content Area - Centered for a clean, professional look */}
      <main className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md text-center border border-gray-100">
          <ArrowLeftOnRectangleIcon className="w-16 h-16 text-blue-500 mx-auto mb-6" />

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            You Have Signed Out
          </h1>

          <p className="text-gray-600 mb-8">
            Thank you for using the NGALI MINING Operations Portal. Your session
            has been securely terminated.
          </p>

          <div className="space-y-4">
            <button
              // In a real app, this would be a Next.js <Link href="/login">
              onClick={() => (window.location.href = "/login")}
              className="w-full flex items-center justify-center px-4 py-3 text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-150 shadow-md"
            >
              <UserIcon className="w-5 h-5 mr-2" /> Log In Again
            </button>
            <p className="text-sm text-gray-400">Or close this window.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignOutPage;
