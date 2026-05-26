# Sposalo — Product Specification

## Executive Summary

**Prodotto:** Gestionale per wedding planner e organizzatori eventi in Italia  
**Target:** Freelance e piccole agenzie di wedding planning (1-3 planner)  
**Fase:** MVP v1.0  
**Time-to-market:** 7-10 giorni

---

## Problem Statement

I wedding planner italiani (spesso freelance o piccole agenzie familiari) soffrono di:
- **Caos documentale:** preventivi, contratti, fatture sparsi in cartelle e WhatsApp
- **Scadenze dimenticate:** fornitori, pagamenti, permessi persi per mancanza di visione d'insieme
- **Budget opaco:** impossibile sapere il margine reale fino a dopo l'evento
- **Strumenti inadeguati:** Excel, WhatsApp, Google Drive — nessun tool pensato per il wedding italiano

---

## Target Audience

| Segmento | Descrizione |
|----------|-------------|
| **Primario** | Wedding planner freelance (1-2 eventi/mese) |
| **Secondario** | Piccole agenzie di wedding (3-5 eventi/mese) |
| **Terziario** | Event planner che fanno anche matrimoni |

**Profilo tipo:** Donna, 28-45 anni, competenze digitali base, gestisce tutto da smartphone e laptop, stress elevato per deadline.

**Dimensione mercato Italia:** ~8.000 wedding planner attivi (fonte: associazioni categoria stima)

---

## Competitive Landscape

| Competitor | Focus | Limitazione |
|------------|-------|-------------|
| **Weddo** | Gestionale completo | Enterprise-oriented, costo elevato |
| **Condivision Banqueting** | Sale ricevimento | Pensato per catering/hotel, non per planner |
| **ArtCalendar Pro** | Calendario eventi | Generico, non specifico wedding |
| **Wed Planner Pro** | Gestione progetti | Interfaccia datata, limitato in Italia |
| **Excel/WhatsApp/Drive** | Tool attuali | Frammentato, errori, perdita dati |

**Differenziatore Sposalo:**
- Pensato per freelancer italiani (fattura elettronica, GDPR, firma digitale)
- Mobile-first (il wedding planner è sempre in movimento)
- Semplicità estrema — zero curva di apprendimento

---

## Core Features (MVP v1.0)

### 1. Gestione Clienti e Preventivi
- Scheda cliente con dati, preferenze, budget
- Generatore preventivi automatico (template italiano)
- Invio preventivi via email con tracciamento aperture
- Conversione preventivo in contratto con un click

### 2. Contratti e Firma Digitale
- Template contratti wedding planner (GDPR-compliant)
- Firma digitale integrata (via API)
- Storico contratti e firmati
- Promemoria scadenze acconti

### 3. Timeline e Scadenze
- Calendario visivo per ogni matrimonio
- Checklist pre-evento personalizzabile
- Promemoria automatici (7gg, 3gg, 1gg prima)
- Notifiche fornitori (ordini, conferme)

### 4. Budget e Margini
- Dashboard budget per evento
- Tracciamento entrate/uscite
- Calcolo margine lordo in tempo reale
- Report margine per planner (mese/anno)

---

## Revenue Model

| Tier | Prezzo | Funzionalità |
|------|--------|--------------|
| **Starter** | €29/mese | 3 eventi, preventivi, timeline |
| **Pro** | €59/mese | Eventi illimitati, contratti+firma, budget |
| **Agency** | €119/mese | Multi-user, report avanzati, API |

**Pricing psicologico:** Sotto il costo di un tool enterprise, accessibile al freelance.

---

## Tech Stack (MVP)

- **Frontend:** Next.js (React) + Tailwind CSS
- **Backend:** Next.js API routes + SQLite (via Prisma)
- **Firma digitale:** API (es. Namirial, InfoCert)
- **Database:** SQLite locale o PostgreSQL (Supabase)
- **Deployment:** Vercel

---

## UI/UX Guidelines

- **Design system:** Mobile-first + Desktop (laptop)
- **Color palette:**
  - Primary: `#BE185D` (rosa corallo)
  - Accent: `#FCE7F3` (rosa chiaro)
  - Background: `#FDF2F8` (rosa pallido)
  - Text: `#831843` (rosa scuro)
- **Principio:** Ogni azione max 2 tap. Linguaggio italiano chiaro, zero anglicismi dove possibile.

---

## Success Metrics (v1.0)

- **Acquisition:** 15 clienti paganti in 60 giorni
- **Retention:** 85% renewal al mese 2
- **Engagement:** 80% utilizzo timeline settimanale

---

## Legal & Compliance

- **Fattura elettronica:** Compatibilità sistema italiano (integrazione futuro)
- **GDPR:** Consensi privacy clienti, data retention
- **Contratti:** Template conforme Codice Civile italiano

---

## Next Steps

1. **Helix → Architect:** Validazione spec, stima effort
2. **Architect → Forge:** Sviluppo MVP
3. **Mercury:** Copy e assets per landing page
4. **Hermes:** Setup canali acquisizione (Instagram, Google)

---

## Risk Assessment

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Competitor grande entra nel segmento | Media | Alto | Velocity — lanciare subito, iterare veloce |
| Adozione bassa (wedding planner usano WhatsApp) | Alta | Medio | Onboarding manuale, supporto directo |
| Integrazione firma digitale complessa | Media | Medio | MVP senza firma, terze parti dopo |

---

*Spec generata da Atlas — Progetto: Sposalo | Data: 2026-02-25*
