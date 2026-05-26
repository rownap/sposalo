import Link from 'next/link'

const clients = [
  { name: 'Giulia Rossi', city: 'Milano', packageName: 'Pro Full-Service', value: '€8.400' },
  { name: 'Sara Bianchi', city: 'Torino', packageName: 'Coordination Day', value: '€3.200' },
  { name: 'Francesca Neri', city: 'Bologna', packageName: 'Destination Planning', value: '€9.100' },
  { name: 'Marta Leone', city: 'Roma', packageName: 'Pro Full-Service', value: '€7.800' },
]

export default function DashboardClientsPage() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">CRM Wedding</p>
            <h1 className="text-2xl md:text-3xl font-bold text-dark">Clienti</h1>
          </div>
          <Link href="/dashboard" className="px-4 py-2 rounded-xl border border-pink-200 text-primary font-medium hover:bg-white transition-colors">
            Torna alla dashboard
          </Link>
        </div>

        <section className="rounded-2xl bg-white border border-pink-100 overflow-hidden">
          <header className="px-5 py-4 border-b border-pink-100 flex items-center justify-between">
            <h2 className="font-semibold text-dark">Clienti attivi</h2>
            <span className="text-sm text-slate-500">{clients.length} profili</span>
          </header>
          <div className="divide-y divide-pink-50">
            {clients.map((client) => (
              <article key={client.name} className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium text-dark">{client.name}</p>
                  <p className="text-sm text-slate-500">{client.city}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600">{client.packageName}</span>
                  <span className="font-semibold text-dark">{client.value}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
