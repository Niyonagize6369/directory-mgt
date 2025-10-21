export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center bg-white shadow-sm p-4 rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Operations Portal</h1>
        <p className="text-gray-500">Managing Director Dashboard</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
          BI
        </div>
        <div>
          <p className="font-medium text-gray-800">Bonae Ineza</p>
          <p className="text-sm text-gray-500">Managing Director</p>
        </div>
      </div>
    </header>
  );
}
