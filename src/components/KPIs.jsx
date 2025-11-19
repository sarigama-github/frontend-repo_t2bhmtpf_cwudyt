import { TrendingUp, Banknote, Building2, Shield } from 'lucide-react'

const accentClasses = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    iconWrap: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    iconWrap: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
}

const Card = ({ icon: Icon, label, value, change, accent = 'emerald' }) => {
  const styles = accentClasses[accent] || accentClasses.emerald
  return (
    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</h3>
            {change && (
              <span className={`text-xs font-medium rounded-full px-2 py-0.5 ${styles.badge}`}>{change}</span>
            )}
          </div>
        </div>
        <div className={`h-10 w-10 rounded-lg grid place-items-center ${styles.iconWrap}`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
  )
}

export default function KPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card icon={TrendingUp} label="Total Bookings" value="1,284" change="+12%" accent="emerald" />
      <Card icon={Banknote} label="Revenue" value="$84,230" change="+8%" accent="blue" />
      <Card icon={Building2} label="Active Venues" value="24" change="+2" accent="emerald" />
      <Card icon={Shield} label="Active Clubs" value="18" change="+1" accent="blue" />
    </div>
  )
}
