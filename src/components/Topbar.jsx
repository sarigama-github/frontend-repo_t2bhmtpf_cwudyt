import { Search, Bell, Plus } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
      <div className="px-6 py-3 flex items-center gap-4">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            placeholder="Search bookings, venues, clubs..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
        </div>
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-sm hover:shadow transition-shadow">
          <Plus size={16} /> New Booking
        </button>
        <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell size={18} className="text-slate-500" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500" />
        </button>
      </div>
    </header>
  )
}
