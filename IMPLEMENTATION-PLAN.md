# 🚀 Sposalo — Piano di Implementazione Completo

## Executive Summary

**Prodotto:** Sposalo - Gestionale per wedding planner e organizzatori eventi in Italia  
**Target:** Freelance e piccole agenzie di wedding planning (1-3 planner)  
**Fase:** MVP v1.0 → Launch Ready  
**Data inizio:** 2026-02-25  
**Time-to-market target:** 7-10 giorni

---

## 📋 Indice

1. [Stack Tecnologico](#stack-tecnologico)
2. [Architettura Sistema](#architettura-sistema)
3. [Database Schema](#database-schema)
4. [API Endpoints](#api-endpoints)
5. [Frontend Components](#frontend-components)
6. [Funzionalità MVP](#funzionalità-mvp)
7. [Funzionalità v2.0](#funzionalità-v20)
8. [Sicurezza & Compliance](#sicurezza--compliance)
9. [Deploy & CI/CD](#deploy--cicd)
10. [Testing](#testing)
11. [Go-to-Market](#go-to-market)
12. [Milestones](#milestones)

---

## 1. Stack Tecnologico

### Core Stack
| Componente | Tecnologia | Versione |
|------------|-----------|----------|
| Framework | Next.js | 14.x (App Router) |
| Styling | Tailwind CSS | 3.x |
| UI Components | Shadcn/UI | latest |
| Database | PostgreSQL (Supabase) | 15.x |
| ORM | Prisma | 5.x |
| Auth | Supabase Auth | v2 |
| Payments | Stripe | latest |
| Email | Resend | latest |
| File Storage | Supabase Storage | - |
| Hosting | Vercel | - |

### Development Tools
| Tool | Utilizzo |
|------|----------|
| TypeScript | Type safety |
| ESLint | Code quality |
| Prettier | Code formatting |
| GitHub Actions | CI/CD |

---

## 2. Architettura Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Landing │  │  Auth   │  │Dashboard│  │  App    │        │
│  │  Page   │  │  Pages  │  │  Admin  │  │  Main   │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
└───────┼────────────┼────────────┼────────────┼──────────────┘
        │            │            │            │
        └────────────┴────────────┴────────────┘
                          │
                    Next.js API Routes
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
   ┌────▼────┐      ┌─────▼─────┐    ┌─────▼─────┐
   │ Supabase│      │   Stripe  │    │  Resend   │
   │   Auth  │      │  Payments │    │   Email   │
   └─────────┘      └───────────┘    └───────────┘
```

---

## 3. Database Schema

### Tabelle Principali

```prisma
// schema.prisma

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  phone         String?
  avatarUrl     String?
  role          Role     @default(USER)
  subscription  Subscription?
  events        Event[]
  clients       Client[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Role {
  USER
  ADMIN
}

model Subscription {
  id              String    @id @default(cuid())
  userId          String    @unique
  user            User      @relation(fields: [userId], references: [id])
  plan            Plan      @default(STARTER)
  stripeCustomerId String?
  stripeSubId     String?
  status          SubStatus @default(ACTIVE)
  currentPeriodEnd DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

enum Plan {
  STARTER   // €29/mese - 3 eventi
  PRO       // €59/mese - eventi illimitati
  AGENCY    // €119/mese - multi-user
}

enum SubStatus {
  ACTIVE
  PAST_DUE
  CANCELED
  TRIALING
}

model Client {
  id          String    @id @default(cuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  name        String
  email       String
  phone       String?
  partnerName String?   // Nome del partner
  weddingDate DateTime?
  venue       String?
  budget      Decimal?  @db.Decimal(10, 2)
  notes       String?   @db.Text
  status      ClientStatus @default(ACTIVE)
  events      Event[]
  documents   Document[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

enum ClientStatus {
  PROSPECT
  ACTIVE
  COMPLETED
  ARCHIVED
}

model Event {
  id          String    @id @default(cuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  clientId    String
  client      Client    @relation(fields: [clientId], references: [id])
  name        String
  date        DateTime
  venue       String?
  status      EventStatus @default(PLANNING)
  budget      Decimal?  @db.Decimal(10, 2)
  actualCost  Decimal?  @db.Decimal(10, 2)
  timeline    TimelineItem[]
  tasks       Task[]
  invoices    Invoice[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

enum EventStatus {
  PLANNING
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

model TimelineItem {
  id          String    @id @default(cuid())
  eventId     String
  event       Event     @relation(fields: [eventId], references: [id])
  title       String
  description String?   @db.Text
  dueDate     DateTime
  completed   Boolean   @default(false)
  order       Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Task {
  id          String    @id @default(cuid())
  eventId     String
  event       Event     @relation(fields: [eventId], references: [id])
  title       String
  description String?   @db.Text
  dueDate     DateTime?
  assignedTo   String?
  priority    Priority  @default(MEDIUM)
  status      TaskStatus @default(TODO)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}

model Invoice {
  id          String    @id @default(cuid())
  eventId     String
  event       Event     @relation(fields: [eventId], references: [id])
  number      String    @unique // Numero fattura progressivo
  type        InvoiceType
  status      InvoiceStatus @default(DRAFT)
  amount      Decimal   @db.Decimal(10, 2)
  taxAmount   Decimal?  @db.Decimal(10, 2)
  dueDate     DateTime?
  paidDate    DateTime?
  items       InvoiceItem[]
  pdfUrl      String?
  sentAt      DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

enum InvoiceType {
  QUOTE       // Preventivo
  CONTRACT    // Contratto
  INVOICE     // Fattura
  RECEIPT     // Ricevuta
}

enum InvoiceStatus {
  DRAFT
  SENT
  PAID
  OVERDUE
  CANCELLED
}

model InvoiceItem {
  id          String    @id @default(cuid())
  invoiceId   String
  invoice     Invoice   @relation(fields: [invoiceId], references: [id])
  description String
  quantity    Int       @default(1)
  unitPrice   Decimal   @db.Decimal(10, 2)
  total       Decimal   @db.Decimal(10, 2)
}

model Document {
  id          String    @id @default(cuid())
  clientId    String
  client      Client    @relation(fields: [clientId], references: [id])
  type        DocType
  name        String
  fileUrl     String?
  content     String?   @db.Text // Per documenti generati (es. PDF base64)
  sentAt      DateTime?
  signedAt    DateTime?
  createdAt   DateTime  @default(now())
}

enum DocType {
  CONTRACT
  PRIVACY_POLICY
  QUESTIONNAIRE
  OTHER
}

model Settings {
  id          String    @id @default(cuid())
  userId      String    @unique
  companyName String?
  companyLogo String?
  invoicePrefix String? @default("INV")
  invoiceNextNumber Int @default(1)
  emailSignature String? @db.Text
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

---

## 4. API Endpoints

### Auth
| Method | Endpoint | Descrizione |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Registrazione utente |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Info utente corrente |

### Clients
| Method | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/api/clients` | Lista clienti |
| POST | `/api/clients` | Crea cliente |
| GET | `/api/clients/[id]` | Dettagli cliente |
| PUT | `/api/clients/[id]` | Aggiorna cliente |
| DELETE | `/api/clients/[id]` | Elimina cliente |

### Events
| Method | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/api/events` | Lista eventi |
| POST | `/api/events` | Crea evento |
| GET | `/api/events/[id]` | Dettagli evento |
| PUT | `/api/events/[id]` | Aggiorna evento |
| DELETE | `/api/events/[id]` | Elimina evento |

### Timeline
| Method | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/api/events/[id]/timeline` | Timeline evento |
| POST | `/api/events/[id]/timeline` | Aggiungi item timeline |
| PUT | `/api/timeline/[id]` | Aggiorna item |
| DELETE | `/api/timeline/[id]` | Elimina item |

### Invoices
| Method | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/api/invoices` | Lista fatture |
| POST | `/api/invoices` | Crea fattura |
| GET | `/api/invoices/[id]` | Dettagli fattura |
| PUT | `/api/invoices/[id]` | Aggiorna fattura |
| POST | `/api/invoices/[id]/send` | Invia fattura via email |
| POST | `/api/invoices/[id]/mark-paid` | Segna come pagata |

### Subscriptions
| Method | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/api/subscription` | Info abbonamento |
| POST | `/api/subscription/create` | Crea abbonamento Stripe |
| POST | `/api/subscription/portal` | Link Stripe Customer Portal |

### Webhooks
| Endpoint | Descrizione |
|----------|-------------|
| `/api/webhooks/stripe` | Stripe payment webhooks |

---

## 5. Frontend Components

### Pagine
| Pagina | Percorso | Descrizione |
|--------|----------|-------------|
| Landing | `/` | Landing page pubblica |
| Pricing | `/pricing` | Pagina prezzi |
| Login | `/login` | Login utente |
| Register | `/register` | Registrazione |
| Dashboard | `/dashboard` | Dashboard principale |
| Clients | `/dashboard/clients` | Gestione clienti |
| Client Detail | `/dashboard/clients/[id]` | Dettagli cliente |
| Events | `/dashboard/events` | Lista eventi |
| Event Detail | `/dashboard/events/[id]` | Dettagli evento |
| Timeline | `/dashboard/events/[id]/timeline` | Timeline evento |
| Invoices | `/dashboard/invoices` | Lista fatture |
| Invoice Create | `/dashboard/invoices/new` | Crea fattura |
| Settings | `/dashboard/settings` | Impostazioni |

### Componenti UI
| Componente | Descrizione |
|------------|-------------|
| `Button` | Bottone primario/secondario |
| `Input` | Campo input testuale |
| `Select` | Dropdown selezione |
| `Card` | Contenitore scheda |
| `Modal` | Popup modale |
| `Table` | Tabella dati |
| `Calendar` | Calendario eventi |
| `Timeline` | Timeline visiva |
| `Kanban` | Board kanban |
| `Chart` | Grafici (revenue, etc.) |
| `FileUpload` | Upload file |
| `EmailComposer` | Composizione email |

---

## 6. Funzionalità MVP (v1.0)

### Must-Have (Launch)

#### 1. Autenticazione
- [ ] Registrazione email/password
- [ ] Login
- [ ] Logout
- [ ] Reset password
- [ ] Email verification

#### 2. Gestione Clienti
- [ ] Creare/modificare/eliminare cliente
- [ ] Campi: nome, email, telefono, data matrimonio, venue, budget
- [ ] Note cliente
- [ ] Storico comunicazioni

#### 3. Gestione Eventi
- [ ] Creare/modificare/eliminare evento
- [ ] Associa evento a cliente
- [ ] Data matrimonio
- [ ] Venue
- [ ] Budget preventivato
- [ ] Stato evento (Planning → Confirmato → Completato)

#### 4. Timeline
- [ ] Lista attività per evento
- [ ] Aggiungi/modifica/elimina item
- [ ] Data scadenza
- [ ] Completamento item
- [ ] Drag & drop riordino

#### 5. Preventivi
- [ ] Generatore preventivi automatico
- [ ] Template italiano professionale
- [ ] Invio via email con tracciamento
- [ ] Conversione preventivo → contratto

#### 6. Contratti
- [ ] Template contratto wedding planner
- [ ] Generazione PDF
- [ ] Invio per email
- [ ] Storico contratti

#### 7. Abbonamenti
- [ ] 3 tier pricing (Starter/Pro/Agency)
- [ ] Stripe Checkout integrato
- [ ] Customer Portal (gestione abbonamento)
- [ ] Trial 14 giorni

### Should-Have (v1.1)

#### 8. Fatturazione
- [ ] Generazione fatture
- [ ] Numerazione progressiva automatica
- [ ] Invio email con PDF allegato
- [ ] Storico fatture
- [ ] Totale entrate

#### 9. Dashboard Analytics
- [ ] Eventi per stato
- [ ] Entrate mese
- [ ] Clienti attivi

#### 10. Tasks
- [ ] Todo list per evento
- [ ] Priorità (bassa/media/alta/urgente)
- [ ] Scadenze

---

## 7. Funzionalità v2.0

### Nice-to-Have (Post-Launch)

- [ ] **Firma digitale** - Integrazione API firma (Namirial, InfoCert)
- [ ] **Multi-user** - Accesso collaboratori (piano Agency)
- [ ] **App Mobile** - PWA o React Native
- [ ] **WhatsApp integration** - Notifiche via WhatsApp Business API
- [ ] **Template Wizard** - Creazione template personalizzati
- [ ] **Report PDF** - Reportistica avanzata
- [ ] **Integrazione fornitori** - Rubrica fornitori
- [ ] **Budget tracking** - Entrate/uscite dettagliate per evento
- [ ] **Calendar sync** - Google Calendar, iCal
- [ ] **SMS notifications** - Promemoria SMS
- [ ] **POS integration** - Point of sale per pagamenti

---

## 8. Sicurezza & Compliance

### GDPR Compliance
- [ ] Privacy Policy pagina
- [ ] Cookie banner
- [ ] Consenso elaborazione dati
- [ ] Diritto alla cancellazione (export + delete)
- [ ] Data retention policy
- [ ] Logging operazioni

### Sicurezza Tecnica
- [ ] HTTPS everywhere
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] SQL injection prevention (Prisma)
- [ ] XSS prevention
- [ ] CORS configurato
- [ ] Environment variables per secret
- [ ] Row Level Security (Supabase)

---

## 9. Deploy & CI/CD

### Vercel Setup
```
1. Connetti repository GitHub
2. Configure:
   - Framework Preset: Next.js
   - Build Command: next build
   - Output Directory: .next
3. Environment Variables:
   - DATABASE_URL (Supabase)
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - STRIPE_SECRET_KEY
   - STRIPE_WEBHOOK_SECRET
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - RESEND_API_KEY
```

### GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

---

## 10. Testing

### Unit Tests
- [ ] Jest configurato
- [ ] Test utility functions
- [ ] Test components

### E2E Tests
- [ ] Playwright configurato
- [ ] Test auth flow
- [ ] Test CRUD operations
- [ ] Test payment flow

### Coverage Target
- Unit: 70%
- E2E: Critical paths

---

## 11. Go-to-Market

### Pre-Launch (Week -2 to -1)
- [ ] Finalizza MVP
- [ ] Crea account Stripe
- [ ] Setup dominio sposaloweb.com (o simile)
- [ ] SSL/HTTPS
- [ ] Privacy Policy + Terms
- [ ] Cookie banner

### Launch (Week 0)
- [ ] Deploy produzione
- [ ] Test pagamenti Stripe
- [ ] Test email delivery
- [ ] Social media teaser

### Post-Launch (Week 1-4)
- [ ] Beta tester recruitment (wedding planner italiani)
- [ ] Feedback collection
- [ ] Iterazioni rapide
- [ ] Case study first customer
- [ ] Testimonials collection

### Canali Acquisizione
| Canale | Priorità | Budget |
|--------|----------|--------|
| Instagram | Alta | €200/mese |
| Google Ads | Media | €300/mese |
| SEO/Blog | Alta | €0 |
| Facebook Groups | Alta | €0 |
| LinkedIn | Media | €0 |
| Referral | Alta | Sconti |

---

## 12. Milestones

### Sprint 1: Foundation (Giorni 1-2)
- [ ] Setup Next.js + Tailwind + Shadcn
- [ ] Setup Supabase + Prisma
- [ ] Setup auth (Supabase Auth)
- [ ] Dashboard layout base
- [ ] Database schema completo

### Sprint 2: Core Features (Giorni 3-5)
- [ ] CRUD Clienti
- [ ] CRUD Eventi
- [ ] Timeline con drag & drop
- [ ] Generatori PDF (preventivi/contratti)
- [ ] Invio email

### Sprint 3: Payments (Giorni 6-7)
- [ ] Stripe Checkout integration
- [ ] Customer Portal
- [ ] Webhook handling
- [ ] Trial logic

### Sprint 4: Polish (Giorni 8-10)
- [ ] UI/UX refinement
- [ ] Loading states
- [ ] Error handling
- [ ] Mobile responsive
- [ ] Performance optimization

### Sprint 5: Launch (Giorno 10+)
- [ ] Deploy produzione
- [ ] Monitoraggio errori (Sentry)
- [ ] Analytics (Vercel + GA4)
- [ ] Beta testing
- [ ] Launch!

---

## 📊 Costi Operativi (Monthly)

| Servizio | Costo | Note |
|----------|-------|------|
| Supabase (Pro) | €25/mese | Database + Auth + Storage |
| Vercel (Pro) | €20/mese | Hosting |
| Stripe | 0% + €0.25 | Transaction fee |
| Resend | €0/mese | 3.000 email/mese gratis |
| Dominio | €12/anno | ~€1/mese |
| **Totale** | **~€46/mese** | |

### Margine
- Revenue medio: €59/mese (piano Pro)
- Costo: €46/mese
- **Margine: ~€13/cliente**

---

## 🎯 Definition of Done

MVP è completato quando:
1. ✅ Utente può registrarsi e fare login
2. ✅ Utente può creare/modificare eliminare clienti
3. ✅ Utente può creare/modificare eliminare eventi
4. ✅ Utente può gestire timeline con drag & drop
5. ✅ Utente può generare e inviare preventivi PDF
6. ✅ Utente può generare e inviare contratti PDF
7. ✅ Utente può abbonarsi e pagare
8. ✅ Utente può gestire abbonamento (upgrade/downgrade/cancel)
9. ✅ Mobile responsive
10. ✅ Performance < 3s load time

---

## 🚦 Prossimi Passi (Immediati)

1. **Copy file landing** da `content/nightly-output/app/page.tsx` a progetto
2. **Setup repository** GitHub
3. **Setup Supabase** project
4. **Run Prisma migrate**
5. **Implementare Auth**
6. **Implementare CRUD base**
7. **Test end-to-end**
8. **Deploy!**

---

*Documento generato da Helix - RC Studio*  
*Data: 2026-02-25*
