export default function StatsOverview() {
  const stats = [
    { label: "Pending Approvals", value: 3 },
    { label: "High Priority", value: 1 },
    { label: "Total Value", value: "$3,500" },
    { label: "Avg. Processing", value: "2.5 Hrs" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100"
        >
          <p className="text-gray-500 text-sm">{s.label}</p>
          <h2 className="text-xl font-bold text-blue-700">{s.value}</h2>
        </div>
      ))}
    </section>
  );
}
