// components/Sidebar.tsx
import {
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon, // Still imported, though not used in the final visual
} from "@heroicons/react/24/outline";
import { NavItem } from "../types";

// NOTE: navItems array is correctly defined here.
const navItems: NavItem[] = [
  {
    name: "Pending Approvals",
    icon: ClockIcon,
    current: true,
    subtext: "Final Review",
  },
  {
    name: "Approved Requisitions",
    icon: CheckCircleIcon,
    current: false,
    subtext: "Track Progress",
  },
  {
    name: "Executive Dashboard",
    icon: ChartBarIcon,
    current: false,
    subtext: "Executive Overview",
  },
  {
    name: "Reports",
    icon: DocumentTextIcon,
    current: false,
    subtext: "Analytics & Exports",
  },
  {
    name: "Profile Settings",
    icon: CogIcon,
    current: false,
    subtext: "Account Settings",
  },
];

export default function Sidebar() {
  const user = { name: "Bonae Ineza", role: "Managing Director" };

  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
      {/* Logo */}
      <div className="p-4 flex items-center border-b border-gray-700">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold mr-2">
          N
        </div>
        <span className="text-xl font-semibold">NGALI MINING</span>
      </div>

      {/* Navigation - The flex-1 here is essential to push the block below to the bottom */}
      <nav className="flex-1 p-4 space-y-2">
        <h2 className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          EXECUTIVE PORTAL
        </h2>

        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex flex-col p-3 rounded-lg transition duration-150 ease-in-out ${
              item.current
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <div className="flex items-center">
              <item.icon className="h-5 w-5 mr-3" aria-hidden="true" />
              <span className="font-medium text-sm">{item.name}</span>
            </div>
            <p
              className={`pl-8 text-xs ${
                item.current ? "text-white" : "text-gray-400"
              }`}
            >
              {item.subtext}
            </p>
          </a>
        ))}
      </nav>

      {/* FINAL CORRECTED User Profile / Sign Out Block */}
      {/* This block is a single container with p-4 top/bottom padding and is pinned to the bottom */}
      <div className="p-4 border-t border-gray-700">
        {/* The main profile container is flex, items are centered (align-items: center) */}
        <div className="flex items-start space-x-3">
          {/* 1. User Icon (BI) */}
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
            BI
          </div>

          {/* 2. Text Content (stacked vertically) */}
          <div className="flex flex-col text-left">
            {/* User Details */}
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-400">{user.role}</p>

            {/* Sign Out Link: positioned immediately below the text */}
            <a
              href="#"
              className="text-xs text-gray-300 hover:text-white transition duration-150 ease-in-out mt-1"
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
