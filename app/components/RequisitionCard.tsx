import { Requisition } from "../../lib/data/requisitions";

export default function RequisitionCard({ req }: { req: Requisition }) {
  const priorityColors: Record<string, string> = {
    HIGH: "bg-red-100 text-red-700",
    MEDIUM: "bg-yellow-100 text-yellow-700",
    LOW: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-800">{req.id}</h3>
          <p
            className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
              priorityColors[req.priority]
            }`}
          >
            {req.priority} PRIORITY
          </p>
        </div>
        <p className="text-lg font-bold text-blue-700">
          ${req.amount.toLocaleString()}
        </p>
      </div>

      <p className="text-sm text-gray-600">{req.department}</p>
      <p className="text-sm text-gray-500 mb-2">{req.requester}</p>
      <p className="text-xs text-gray-400 mb-2">Submitted: {req.submittedAt}</p>
      <p className="text-gray-700 text-sm italic mb-3">{req.reason}</p>

      <div className="text-sm text-gray-700 mb-3">
        <strong>Requested Items:</strong>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          {req.items.map((item) => (
            <li key={item.name}>
              {item.name} (Qty: {item.qty}) - ${item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Review Details
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Sign & Approve
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Reject
        </button>
      </div>
    </div>
  );
}
