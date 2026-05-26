'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data
const stats = [
  { label: 'Matrimoni Attivi', value: '5', change: '+2 questo mese', positive: true },
  { label: 'Incassi Mese', value: '€42.500', change: '+15% vs mese scorso', positive: true },
  { label: 'Preventivi Inviati', value: '12', change: '3 in attesa', positive: false },
  { label: 'Prossimo Evento', value: '15 Giu', change: 'Rossi — 23 giorni', positive: true },
]

const projects = [
  {
    id: '1',
    couple: 'Marco & Giulia',
    date: '15 Giugno 2026',
    status: 'confirmed',
    budget: 25000,
    spent: 18500,
    margin: 6500,
    location: 'Villa Rosa, Como',
  },
  {
    id: '2',
    couple: 'Luca & Sara',
    date: '20 Settembre 2026',
    status: 'pending',
    budget: 18000,
    spent: 4200,
    margin: null,
    location: 'Castello di Monticello',
  },
  {
    id: '3',
    couple: 'Alessandro & Francesca',
    date: '5 Ottobre 2026',
    status: 'draft',
    budget: null,
    spent: 0,
    margin: null,
    location: 'TBD',
  },
]

const upcomingTasks = [
  { id: '1', title: 'Call con fornitore fiori', project: 'Rossi', date: 'Oggi', urgent: true },
  { id: '2', title: 'Inviare preventivo', project: 'Bianchi', date: 'Domani', urgent: false },
  { id: '3', title: 'Conferma menu', project: 'Rossi', date: '28 Feb', urgent: false },
  { id: '4', title: 'Pagamento acconto location', project: 'Rossi', date: '1 Mar', urgent: true },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      draft: 'bg-slate-100 text-slate-700',
    }
    const labels = {
      confirmed: 'Confermato',
      pending: 'Preventivo',
      draft: 'Bozza',
    }
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-pink-100 flex-shrink-0 transition-all duration-300 fixed lg:relative z-40 h-screen`}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-pink-100">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            {sidebarOpen && <span className="font-bold text-lg text-primary">Sposalo</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-xl font-medium">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          
          <Link href="/dashboard/projects" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-pink-50 rounded-xl font-medium transition-colors">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {sidebarOpen && <span>Matrimoni</span>}
          </Link>
          
          <Link href="/dashboard/clients" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-pink-50 rounded-xl font-medium transition-colors">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {sidebarOpen && <span>Clienti</span>}
          </Link>
          
          <Link href="/dashboard/contracts" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-pink-50 rounded-xl font-medium transition-colors">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {sidebarOpen && <span>Contratti</span>}
          </Link>
          
          <Link href="/dashboard/finances" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-pink-50 rounded-xl font-medium transition-colors">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {sidebarOpen && <span>Finanze</span>}
          </Link>
        </nav>

        {/* User */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-pink-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold flex-shrink-0">
              LP
            </div>
            {sidebarOpen && (
              <div className="overflow-hidden">
                <div className="font-medium text-dark truncate">Laura Planner</div>
                <div className="text-sm text-slate-500">Pro</div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b border-pink-100 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-pink-50 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-dark">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-pink-50 rounded-lg transition-colors relative">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:brightness-110 transition-all">
              + Nuovo Matrimonio
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-pink-100">
                <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-dark mb-1">{stat.value}</div>
                <div className={`text-sm ${stat.positive ? 'text-green-600' : 'text-yellow-600'}`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Projects */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-pink-100 overflow-hidden">
              <div className="p-6 border-b border-pink-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-dark">Matrimoni Recenti</h2>
                <Link href="/dashboard/projects" className="text-sm text-primary hover:underline">
                  Vedi tutti
                </Link>
              </div>
              <div className="divide-y divide-pink-50">
                {projects.map((project) => (
                  <div key={project.id} className="p-6 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-dark">{project.couple}</h3>
                        <div className="text-sm text-slate-500">{project.date} • {project.location}</div>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                    {project.budget && (
                      <div className="bg-slate-50 rounded-xl p-3">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-500">Budget: €{project.budget.toLocaleString()}</span>
                          <span className="text-slate-500">Speso: €{project.spent.toLocaleString()}</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${(project.spent / project.budget) * 100}%` }}
                          ></div>
                        </div>
                        {project.margin !== null && (
                          <div className="mt-2 text-sm font-medium text-green-600">
                            Margine: €{project.margin.toLocaleString()}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-2xl border border-pink-100 overflow-hidden">
              <div className="p-6 border-b border-pink-100">
                <h2 className="text-lg font-bold text-dark">Prossime Scadenze</h2>
              </div>
              <div className="divide-y divide-pink-50">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-4 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${task.urgent ? 'bg-red-500' : 'bg-primary'}`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-dark">{task.title}</div>
                        <div className="text-sm text-slate-500">{task.project} • {task.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-pink-100">
                <button className="w-full py-2 text-primary font-medium hover:bg-pink-50 rounded-lg transition-colors">
                  + Aggiungi scadenza
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
