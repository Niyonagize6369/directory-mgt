// components/Sidebar.tsx
import {
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "../types"; // Import for NavItem type
import { Gem } from "lucide-react";

// **FIXED ERROR:** Defining the navItems array.
const navItems: NavItem[] = [
  // ... (Your navItems definition here)
  {
    name: "Pending Approvals",
    icon: ClockIcon,
    current: true,
    subtext: "Final Review",
    href: "/",
  },
  {
    name: "Approved Requisitions",
    icon: CheckCircleIcon,
    current: false,
    subtext: "Track Progress",
    href: "/approved",
  },
  {
    name: "Executive Dashboard",
    icon: ChartBarIcon,
    current: false,
    subtext: "Executive Overview",
    href: "/executive",
  },
  {
    name: "Reports",
    icon: DocumentTextIcon,
    current: false,
    subtext: "Analytics & Exports",
    href: "/reports",
  },
  {
    name: "Profile Settings",
    icon: CogIcon,
    current: false,
    subtext: "Account Settings",
    href: "/profile",
  },
];

export default function Sidebar() {
  const user = { name: "Rachel Niyonagize", role: "Managing Director" };

  return (
    // **LAYOUT:** h-screen and flex-col for full-height column layout
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen sticky top-0">
      {/* Logo */}
      <div className="p-4 flex items-center border-b border-gray-700">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold mr-2">
          <Gem size={24} strokeWidth={2} />
        </div>
        <span className="text-xl font-semibold">NGALI MINING</span>
      </div>

      {/* Navigation - **KEY LAYOUT:** 'flex-1' grows to push the footer down */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <h2 className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          EXECUTIVE PORTAL
        </h2>

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex flex-col p-3 rounded-lg transition duration-150 ease-in-out ${
              item.current
                ? "hover:bg-orange-500 text-white"
                : "text-gray-300 hover:bg-orange-500 hover:text-white cursor-pointer"
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

      {/* FINAL CORRECTED User Profile / Sign Out Block: Pushed to the bottom */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
            RN
          </div>
          <div className="flex flex-col text-left">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-400">{user.role}</p>
            <a
              href="/signout"
              className="text-xs text-gray-300 hover:text-orange-500 transition duration-150 ease-in-out mt-1"
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
