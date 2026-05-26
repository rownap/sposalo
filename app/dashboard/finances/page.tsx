import Link from 'next/link'

const summary = [
  { label: 'Ricavi previsti 2026', value: '€186.000' },
  { label: 'Costi fornitori stimati', value: '€121.400' },
  { label: 'Margine medio', value: '34.7%' },
]

const payments = [
  { item: 'Acconto Rossi', date: '27 Maggio 2026', amount: '€2.500', status: 'In arrivo' },
  { item: 'Saldo Neri', date: '2 Giugno 2026', amount: '€3.800', status: 'Programmato' },
  { item: 'Fiori Leone', date: '5 Giugno 2026', amount: '€1.200', status: 'Da approvare' },
]

export default function DashboardFinancesPage() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Controllo economico</p>
            <h1 className="text-2xl md:text-3xl font-bold text-dark">Finanze</h1>
          </div>
          <Link href="/dashboard" className="px-4 py-2 rounded-xl border border-pink-200 text-primary font-medium hover:bg-white transition-colors">
            Torna alla dashboard
          </Link>
        </div>

        <section className="grid md:grid-cols-3 gap-4">
          {summary.map((metric) => (
            <article key={metric.label} className="rounded-2xl bg-white border border-pink-100 p-5">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="text-2xl font-bold text-dark mt-1">{metric.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl bg-white border border-pink-100 overflow-hidden">
          <header className="px-5 py-4 border-b border-pink-100">
            <h2 className="font-semibold text-dark">Movimenti in agenda</h2>
          </header>
          <div className="divide-y divide-pink-50">
            {payments.map((payment) => (
              <article key={payment.item} className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium text-dark">{payment.item}</p>
                  <p className="text-sm text-slate-500">{payment.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-dark">{payment.amount}</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-100 text-primary">{payment.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
