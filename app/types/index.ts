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