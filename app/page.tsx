import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-primary">Sposalo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#funzionalita" className="hover:text-primary transition-colors">Funzionalità</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="#prezzi" className="hover:text-primary transition-colors">Prezzi</Link>
          </div>
          <Link href="/login" className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-pink-500/30">
            Prova Gratis
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Per wedding planner italiani
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Il gestionale che<br/>
                <span className="text-accent">semplifica</span> i matrimoni
              </h1>
              <p className="text-lg text-pink-100 mb-8 leading-relaxed">
                Preventivi, contratti con firma digitale, timeline automatiche e budget sempre sotto controllo. 
                Tutto ciò che ti serve per organizzare matrimoni impeccabili.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-accent transition-all shadow-xl text-center">
                  Inizia Gratuitamente
                </Link>
                <Link href="#funzionalita" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-center">
                  Scopri di Più
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-pink-200 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span> Nessuna carta richiesta</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span> Setup in 10 minuti</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-2 text-sm text-slate-500">Dashboard Sposalo</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="text-sm text-slate-500 mb-2">Matrimonio Rossi — 15 Giugno 2026</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-slate-400">Budget: €25.000</div>
                        <div className="text-xs text-green-600 font-medium">Margine: €4.500</div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">In corso</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="text-sm text-slate-500 mb-2">Matrimonio Bianchi — 20 Settembre 2026</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-slate-400">Budget: €18.000</div>
                        <div className="text-xs text-green-600 font-medium">Margine: €3.200</div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Preventivo</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm opacity-80">Incassi Mese</div>
                        <div className="text-xs opacity-60">5 matrimoni confermati</div>
                      </div>
                      <div className="text-2xl font-bold">€42.500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funzionalita" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Tutto ciò che ti serve</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Gestisci i tuoi matrimoni senza perdere tempo con fogli Excel e cartelle disordinate.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-accent border border-pink-100 hover:shadow-xl hover:shadow-pink-200/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Preventivi & Contratti</h3>
              <p className="text-slate-600">Crea preventivi professionali in pochi minuti. Contratti con firma digitale integrata direttamente dalla piattaforma.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-accent border border-pink-100 hover:shadow-xl hover:shadow-pink-200/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Timeline Automatica</h3>
              <p className="text-slate-600">Scadenze automatiche e promemoria per te e i fornitori. Non perdere mai più un appuntamento importante.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-accent border border-pink-100 hover:shadow-xl hover:shadow-pink-200/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Dashboard Budget</h3>
              <p className="text-slate-600">Tracciamento spese e margine di profitto in tempo reale. Sai sempre dove sei e quanto guadagni.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prezzi" className="py-24 bg-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Prezzi Semplici</h2>
            <p className="text-slate-600 text-lg">Scegli il piano adatto alla tua attività.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-white border-2 border-pink-200 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-semibold text-slate-500 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">€29</span>
                <span className="text-slate-500">/mese</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">Perfetto per freelance che iniziano</p>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  fino a 5 matrimoni/anno
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preventivi illimitati
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Timeline base
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Supporto email
                </li>
              </ul>
              <Link href="/login" className="block w-full py-3 text-center border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
                Inizia Prova
              </Link>
            </div>
            {/* Pro */}
            <div className="p-8 rounded-2xl bg-white border-4 border-primary relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                PIÙ POPOLARE
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">€59</span>
                <span className="text-slate-500">/mese</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">Per professionisti in crescita</p>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Matrimoni illimitati
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Contratti con firma digitale
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Timeline avanzata
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dashboard budget completa
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Supporto prioritario
                </li>
              </ul>
              <Link href="/login" className="block w-full py-3 text-center bg-primary text-white rounded-xl font-semibold hover:brightness-110 transition-all">
                Inizia Prova
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="prova" className="py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Prova Sposalo Gratis</h2>
          <p className="text-pink-100 text-lg mb-8">14 giorni gratuiti. Nessuna carta di credito richiesta.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-accent transition-all shadow-lg whitespace-nowrap"
            >
              Crea il Tuo Account Demo
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
            >
              Guarda la Dashboard
            </Link>
          </div>
          <p className="mt-6 text-sm text-pink-300">Hai domande? Scrivici a info@sposalo.it</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">Sposalo</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Termini</a>
              <a href="#" className="hover:text-white transition-colors">Contatti</a>
            </div>
            <p className="text-sm text-slate-500">© 2026 Sposalo</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
