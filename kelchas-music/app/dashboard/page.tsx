import Sidebar from "../../components/Sidebar";
import ChartWrapper from "../../components/ChartWrapper";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar />
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-zinc-100 mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-sm text-zinc-400">Total Sales</h3>
              <div className="text-2xl font-bold text-amber-400">$12,430</div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-sm text-zinc-400">Active Tracks</h3>
              <div className="text-2xl font-bold text-zinc-100">128</div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-sm text-zinc-400">Monthly Listens</h3>
              <div className="text-2xl font-bold text-zinc-100">84,321</div>
            </div>
          </div>

          <div className="mt-6 glass-card p-4 rounded-lg">
            <h3 className="text-sm text-zinc-400 mb-2">Sales Trend</h3>
            <div>
              <ChartWrapper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
