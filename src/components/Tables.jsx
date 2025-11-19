export default function Tables() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Recent Bookings</p>
          <a href="#" className="text-xs text-blue-600 hover:underline">View all</a>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr className="border-b border-slate-200/60 dark:border-slate-800">
                <th className="py-2 pr-4 font-medium">Booking ID</th>
                <th className="py-2 pr-4 font-medium">Venue</th>
                <th className="py-2 pr-4 font-medium">Date</th>
                <th className="py-2 pr-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {[
                { id: '#BK-1023', venue: 'Court A', date: '2025-11-21 18:00', status: 'Confirmed' },
                { id: '#BK-1022', venue: 'Field 1', date: '2025-11-21 16:00', status: 'Pending' },
                { id: '#BK-1021', venue: 'Court B', date: '2025-11-21 15:00', status: 'Cancelled' },
                { id: '#BK-1020', venue: 'Court C', date: '2025-11-21 14:30', status: 'Confirmed' },
              ].map((b) => (
                <tr key={b.id} className="border-b last:border-0 border-slate-200/60 dark:border-slate-800">
                  <td className="py-3 pr-4 font-medium">{b.id}</td>
                  <td className="py-3 pr-4">{b.venue}</td>
                  <td className="py-3 pr-4">{b.date}</td>
                  <td className="py-3 pr-4 text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      b.status === 'Confirmed'
                        ? 'bg-emerald-500/10 text-emerald-600'
                        : b.status === 'Pending'
                        ? 'bg-amber-500/10 text-amber-600'
                        : 'bg-rose-500/10 text-rose-600'
                    }`}>{b.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Payment Status</p>
          <a href="#" className="text-xs text-blue-600 hover:underline">View all</a>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr className="border-b border-slate-200/60 dark:border-slate-800">
                <th className="py-2 pr-4 font-medium">Invoice</th>
                <th className="py-2 pr-4 font-medium">Customer</th>
                <th className="py-2 pr-4 font-medium">Amount</th>
                <th className="py-2 pr-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {[
                { id: '#INV-8842', customer: 'Futsal Bros', amount: '$120.00', status: 'Paid' },
                { id: '#INV-8839', customer: 'City FC', amount: '$320.00', status: 'Due' },
                { id: '#INV-8835', customer: 'Ace Club', amount: '$85.00', status: 'Overdue' },
                { id: '#INV-8833', customer: 'Royal Sports', amount: '$220.00', status: 'Paid' },
              ].map((b) => (
                <tr key={b.id} className="border-b last:border-0 border-slate-200/60 dark:border-slate-800">
                  <td className="py-3 pr-4 font-medium">{b.id}</td>
                  <td className="py-3 pr-4">{b.customer}</td>
                  <td className="py-3 pr-4">{b.amount}</td>
                  <td className="py-3 pr-4 text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      b.status === 'Paid'
                        ? 'bg-emerald-500/10 text-emerald-600'
                        : b.status === 'Due'
                        ? 'bg-amber-500/10 text-amber-600'
                        : 'bg-rose-500/10 text-rose-600'
                    }`}>{b.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
