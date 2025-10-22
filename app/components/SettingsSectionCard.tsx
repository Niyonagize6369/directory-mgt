// components/SettingsSectionCard.tsx
import React, { ReactNode } from "react";

interface SettingsSectionCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function SettingsSectionCard({
  title,
  description,
  children,
}: SettingsSectionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg mb-8 border border-gray-100">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}
