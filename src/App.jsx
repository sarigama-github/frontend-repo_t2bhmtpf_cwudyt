import Sidebar from './components/Sidebar'
import KPIs from './components/KPIs'
import Charts from './components/Charts'
import Tables from './components/Tables'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <Topbar />
          <div className="px-6 py-6 space-y-6">
            <KPIs />
            <Charts />
            <Tables />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
