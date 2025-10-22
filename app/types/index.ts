// types/index.ts

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

// Type for Heroicon components
export type HeroIcon = ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
} & RefAttributes<SVGSVGElement>>;


// 1. Sidebar Item Type
export interface NavItem {
    name: string;
    icon: HeroIcon;
    current: boolean;
    subtext: string;
     href: string; 
}

// 2. Metric Card Data Type
export interface MetricData {
    title: string;
    value: string;
    icon: HeroIcon;
    colorClass: string;
}

// 3. Requisition Item Type
export interface RequestedItem {
    name: string;
    qty: number;
    price: number;
}

// 4. Main Requisition Type
export interface Requisition {
    id: string;
    priority: 'HIGH PRIORITY' | 'MEDIUM PRIORITY' | 'LOW PRIORITY';
    department: string;
    submitter: string;
    submittedDate: string;
    risk: string;
    totalValue: number;
    itemsCount: number;
    requestedItems: RequestedItem[];
}

// 5. Approved Status Metric Type
export interface ApprovedMetricData {
    title: string;
    value: string | number;
    icon: HeroIcon;
    colorClass: string;
    description?: string; // For the checkmark/document icon next to the value
}

// 6. Approved Requisition Item Type (History)
export interface ApprovedRequisition extends Requisition { // Extends the base Requisition
    status: 'In Procurement' | 'Delivered' | 'On Hold';
    requestedBy: string;
    approvedDate: string;
    approvedBy: string;
    deliveredDate?: string;
}
// types/index.ts (Additions for Executive Dashboard)

// 7. Executive KPI Type
export interface ExecutiveKpi {
    title: string;
    value: string;
    unit?: string; // e.g., '$', '%'
    change: string; // e.g., '+12%', '-5%'
    changeType: 'positive' | 'negative';
    icon: HeroIcon;
}

// 8. Overview Item Type
export interface OverviewItem {
    label: string;
    value: string | number;
    valueType: 'number' | 'percentage';
    isTarget?: boolean;
}

// 9. Executive Approval Item Type (A simpler, high-level approval)
export interface ExecutiveApproval {
    id: string;
    title: string;
    priority: 'High priority' | 'Medium' | 'Low'; // Note: simpler priority labels on this page
    description: string;
    details: string; // e.g., 'Operations • By Operations Director • 2025-01-15'
    amount: number;
}
// types/index.ts (Additions for Executive Reports)

// 10. Report KPI Type (Similar to ExecutiveKpi, but simpler)
export interface ReportKpi {
    title: string;
    value: string;
    unit?: string;
    icon: HeroIcon;
}

// 11. Available Report Type
export interface AvailableReport {
    title: string;
    description: string;
    generatedDate: string;
    size: string;
    format: 'PDF' | 'Excel';
    status: 'READY' | 'GENERATING';
}

// 12. Recent Activity Type
export interface RecentActivity {
    reportName: string;
    action: 'downloaded' | 'generated' | 'created';
    timeAgo: string;
    actor: 'Rachel Niyonagize' | 'System';
    icon: HeroIcon;
    iconClass: string;
}

// 13. Quick Action Type
export interface QuickAction {
    label: string;
    icon: HeroIcon;
}

// types/index.ts (Additions for Profile Settings)

// 14. User Profile Settings Type
export interface UserSettings {
    fullName: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    defaultCurrency: string;
    theme: 'light' | 'dark';
    twoFactorEnabled: boolean;
}

// 15. Settings Section Type
export interface SettingsSection {
    id: string;
    title: string;
    description: string;
}