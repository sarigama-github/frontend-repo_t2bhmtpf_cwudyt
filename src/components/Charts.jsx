import { useEffect, useRef } from 'react'

function Sparkline({ color = '#10B981' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    ctx.clearRect(0, 0, width, height)

    const points = Array.from({ length: 20 }, (_, i) => {
      const x = (i / 19) * width
      const y = height - (Math.sin(i / 2) * 10 + 20 + Math.random() * 6)
      return { x, y }
    })

    ctx.lineWidth = 2
    ctx.strokeStyle = color
    ctx.beginPath()
    points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    })
    ctx.stroke()

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, color + '22')
    gradient.addColorStop(1, color + '00')
    ctx.fillStyle = gradient
    ctx.lineTo(width, height)
    ctx.lineTo(0, height)
    ctx.closePath()
    ctx.fill()
  }, [color])

  return <canvas ref={ref} width={280} height={80} className="w-full h-20" />
}

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Bookings by Day</p>
          <span className="text-xs text-slate-500">Last 14 days</span>
        </div>
        <Sparkline color="#10B981" />
      </div>

      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Revenue Trends</p>
          <span className="text-xs text-slate-500">Last 30 days</span>
        </div>
        <Sparkline color="#3B82F6" />
      </div>

      <div className="lg:col-span-2 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Upcoming Schedules</p>
          <span className="text-xs text-slate-500">Next 7 days</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {['Court A','Court B','Field 1','Field 2','Court C','Court D'].map((name, i) => (
            <div key={i} className="rounded-lg border border-slate-200/60 dark:border-slate-800 p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">Open</span>
              </div>
              <div className="mt-2 h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-emerald-500 to-blue-500" />
              </div>
              <p className="mt-2 text-xs text-slate-500">Today: 12 bookings</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
