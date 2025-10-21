export interface Requisition {
  id: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  amount: number;
  department: string;
  items: { name: string; qty: number; price: number }[];
  requester: string;
  submittedAt: string;
  reason: string;
}

export const requisitions: Requisition[] = [
  {
    id: "REQ-2025-001",
    priority: "HIGH",
    amount: 14100,
    department: "Diamond Cutting Department",
    items: [
      { name: "Diamond Cutting Blade - Industrial Grade", qty: 5, price: 12500 },
      { name: "Precision Measuring Tools Set", qty: 2, price: 1600 },
    ],
    requester: "Bonae Ineza - Cutting Supervisor",
    submittedAt: "2025-01-15 09:30",
    reason: "Production stoppage risk",
  },
  {
    id: "REQ-2025-002",
    priority: "MEDIUM",
    amount: 6300,
    department: "Gold Processing Unit",
    items: [
      { name: "Gold Refining Chemicals", qty: 10, price: 4500 },
      { name: "Safety Equipment - Protective Gear", qty: 15, price: 1800 },
    ],
    requester: "Bonae Ineza - Processing Lead",
    submittedAt: "2025-01-14 14:20",
    reason: "Standard procurement",
  },
];
