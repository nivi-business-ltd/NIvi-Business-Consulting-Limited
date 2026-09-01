# Nivi Finserv Ltd. — Website PRD

## Original Problem Statement
Create a website for Nivi Finserv Ltd., a UK-based digital solutions and business consultancy firm providing end-to-end IT consultancy, software integration support, data analytics, and digital business process optimization for SMEs worldwide.

## User Personas
- SME owner/MD evaluating a consultancy (primary) — wants credibility, services, easy contact
- Operations/IT lead researching integration or analytics support
- Prospective international client checking UK presence and global reach

## Core Requirements (static)
- Multi-page marketing site: Home, About, Services, Contact
- Dark premium + editorial serif aesthetic (per user choice)
- Working contact/enquiry form storing submissions in MongoDB
- Email notification to owner on enquiry (DEFERRED — user chose to skip for now)

## Architecture
- Frontend: React (CRA/craco), react-router-dom, framer-motion, lenis smooth scroll, Tailwind, sonner toasts
- Backend: FastAPI, /api prefix, Motor (async MongoDB)
- DB: MongoDB `enquiries` collection (string UUID ids, ISO timestamps)
- Design system: /app/design_guidelines.json — obsidian #0A0E17, champagne gold #E2C08D, Playfair Display / Plus Jakarta Sans / JetBrains Mono

## Implemented (2026-09-01)
- Home: kinetic masked-line hero with parallax London skyline, animated stat counters, editorial marquee, bento services grid, numbered manifesto chapters (01–04), client quote with clipped-frame image, CTA banner
- About: hero, firm story with boardroom photo, 4 operating principles, leadership bench, London banner, CTA
- Services: 4 deep-dive practice sections (alternating layout, images), 3 engagement models, enquiry links
- Contact: direct channels block, enquiry form (name/email/company/service/budget/message) -> POST /api/enquiries -> success panel + toast, FAQ accordion
- Backend: GET /api/, POST /api/enquiries, GET /api/enquiries (validation via Pydantic, EmailStr)
- Global: fixed glass navbar with active gold underline + mobile menu, footer, grain overlay, Lenis momentum scroll, all data-testids

## Verified
- POST /api/enquiries + GET /api/enquiries via curl (test data cleaned after)
- E2E: contact form filled and submitted from UI — success panel + toast shown
- Screenshots of all 4 pages — layouts render correctly

## Backlog
- P0: Email notification to owner on new enquiry (Resend managed playbook ready — needs owner's real email address)
- P1: Replace placeholder stats/testimonials/leadership names with real company content
- P1: Case studies page with real client outcomes
- P2: Blog/insights section, SEO meta + OpenGraph tags, sitemap
- P2: Cookie consent + privacy policy page (UK GDPR)

## Next Tasks
1. Turn on enquiry email notifications (ask user for owner email)
2. Content pass: real metrics, real team, real testimonials
3. Legal pages (privacy policy, terms)
