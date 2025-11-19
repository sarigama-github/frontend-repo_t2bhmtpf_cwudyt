import { useState } from 'react'
import {
  LayoutDashboard,
  Building2,
  BadgeDollarSign,
  CalendarClock,
  CreditCard,
  Users,
  UserCircle2,
  Settings,
  ChevronRight,
  ChevronDown,
  Layers,
} from 'lucide-react'

const Section = ({ icon: Icon, label, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-slate-300 hover:text-white py-2 px-2 rounded-md transition-colors"
      >
        <span className="flex items-center gap-3">
          <Icon size={18} className="text-slate-300" />
          <span className="text-sm font-medium">{label}</span>
        </span>
        {open ? (
          <ChevronDown size={16} className="text-slate-400" />
        ) : (
          <ChevronRight size={16} className="text-slate-400" />
        )}
      </button>
      <div className={`overflow-hidden transition-all ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pl-8 mt-1 space-y-1">
          {children}
        </div>
      </div>
    </div>
  )
}

const Item = ({ label, active = false }) => (
  <a
    href="#"
    className={`flex items-center gap-2 text-sm py-2 px-2 rounded-md transition-colors ${
      active
        ? 'bg-slate-700/60 text-white shadow-sm'
        : 'text-slate-400 hover:text-white hover:bg-slate-700/40'
    }`}
  >
    <span className="w-1 h-1 rounded-full bg-emerald-500/70" />
    {label}
  </a>
)

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-72 shrink-0 h-screen sticky top-0 border-r border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="px-5 py-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 shadow-inner shadow-emerald-500/30 grid place-items-center">
            <Layers className="text-white" size={18} />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">BolaJom</p>
            <p className="text-xs text-slate-400">Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        <div>
          <a
            href="#"
            className="flex items-center gap-3 text-slate-200 hover:text-white py-2 px-2 rounded-md hover:bg-slate-700/40 transition-colors"
          >
            <LayoutDashboard size={18} />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
        </div>

        <div className="h-px bg-slate-800" />

        <Section icon={Building2} label="Venue Management">
          <Item label="Venues" active />
          <Item label="Package & Pricing" />
        </Section>

        <Section icon={CalendarClock} label="Booking Management">
          <Item label="Availability / Schedule" />
          <Item label="Payments" />
        </Section>

        <Section icon={Users} label="Users Management">
          <Item label="Users" />
          <Item label="Clubs" />
        </Section>

        <Section icon={Settings} label="Settings" defaultOpen={false}>
          <Item label="Business Profile" />
          <Item label="System Config" />
        </Section>
      </nav>

      <div className="mt-auto p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/60">
          <UserCircle2 className="text-slate-300" />
          <div className="min-w-0">
            <p className="text-sm text-white truncate">Admin</p>
            <p className="text-xs text-slate-400 truncate">owner@bolajom.com</p>
          </div>
          <Settings className="ml-auto text-slate-400" size={16} />
        </div>
      </div>
    </aside>
  )
}
