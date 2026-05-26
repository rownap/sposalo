import Link from 'next/link'

const contracts = [
  { couple: 'Marco & Giulia', sentAt: '12 Maggio 2026', status: 'Firmato', due: 'Acconto ricevuto' },
  { couple: 'Luca & Sara', sentAt: '20 Maggio 2026', status: 'In attesa', due: 'Follow-up domani' },
  { couple: 'Francesca & Alessandro', sentAt: '22 Maggio 2026', status: 'Revisioni', due: 'Clausola fornitore audio' },
]

const statusColor: Record<string, string> = {
  Firmato: 'bg-green-100 text-green-700',
  'In attesa': 'bg-yellow-100 text-yellow-700',
  Revisioni: 'bg-slate-100 text-slate-700',
}

export default function DashboardContractsPage() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Workflow documentale</p>
            <h1 className="text-2xl md:text-3xl font-bold text-dark">Contratti</h1>
          </div>
          <Link href="/dashboard" className="px-4 py-2 rounded-xl border border-pink-200 text-primary font-medium hover:bg-white transition-colors">
            Torna alla dashboard
          </Link>
        </div>

        <section className="rounded-2xl bg-white border border-pink-100 overflow-hidden">
          <header className="px-5 py-4 border-b border-pink-100">
            <h2 className="font-semibold text-dark">Firma digitale</h2>
          </header>
          <div className="divide-y divide-pink-50">
            {contracts.map((contract) => (
              <article key={contract.couple} className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="font-medium text-dark">{contract.couple}</p>
                  <p className="text-sm text-slate-500">Inviato: {contract.sentAt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[contract.status]}`}>
                    {contract.status}
                  </span>
                  <span className="text-sm text-slate-600">{contract.due}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
