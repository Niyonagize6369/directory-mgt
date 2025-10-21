import DashboardHeader from "../../components/DashboardHeader";
import StatsOverview from "../../components/StatsOverview";
import RequisitionCard from "../../components/RequisitionCard";
import { requisitions } from "../../lib/data/requisitions";

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <DashboardHeader />
      <StatsOverview />
      <section className="mt-8 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Requisitions Requiring Review
        </h2>
        {requisitions.map((req) => (
          <RequisitionCard key={req.id} req={req} />
        ))}
      </section>
    </main>
  );
}
