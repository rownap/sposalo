import Link from 'next/link'

const projects = [
  { couple: 'Marco & Giulia', location: 'Villa Rosa, Como', status: 'Confermato', budget: '€25.000' },
  { couple: 'Luca & Sara', location: 'Castello di Monticello', status: 'Preventivo', budget: '€18.000' },
  { couple: 'Alessandro & Francesca', location: 'Palazzo Brera, Milano', status: 'Sopralluogo', budget: '€31.500' },
  { couple: 'Marta & Davide', location: 'Tenuta Le Querce, Siena', status: 'Confermato', budget: '€22.800' },
]

export default function DashboardProjectsPage() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Area operativa</p>
            <h1 className="text-2xl md:text-3xl font-bold text-dark">Matrimoni</h1>
          </div>
          <Link href="/dashboard" className="px-4 py-2 rounded-xl border border-pink-200 text-primary font-medium hover:bg-white transition-colors">
            Torna alla dashboard
          </Link>
        </div>

        <section className="grid md:grid-cols-3 gap-4">
          <article className="rounded-2xl bg-white border border-pink-100 p-5">
            <p className="text-sm text-slate-500">Matrimoni attivi</p>
            <p className="text-2xl font-bold text-dark mt-1">9</p>
          </article>
          <article className="rounded-2xl bg-white border border-pink-100 p-5">
            <p className="text-sm text-slate-500">Budget medio</p>
            <p className="text-2xl font-bold text-dark mt-1">€24.300</p>
          </article>
          <article className="rounded-2xl bg-white border border-pink-100 p-5">
            <p className="text-sm text-slate-500">Lead in valutazione</p>
            <p className="text-2xl font-bold text-dark mt-1">6</p>
          </article>
        </section>

        <section className="rounded-2xl bg-white border border-pink-100 overflow-hidden">
          <header className="px-5 py-4 border-b border-pink-100">
            <h2 className="font-semibold text-dark">Pipeline Eventi</h2>
          </header>
          <div className="divide-y divide-pink-50">
            {projects.map((project) => (
              <article key={project.couple} className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium text-dark">{project.couple}</p>
                  <p className="text-sm text-slate-500">{project.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-600">{project.budget}</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-pink-100 text-primary">{project.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
