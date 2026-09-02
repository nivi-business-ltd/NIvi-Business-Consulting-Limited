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

## Implemented (2026-09-02, update 11)
- X profile linked (https://x.com/Nivi_IT): custom XIcon component, footer social buttons (Instagram + X with handles), Contact "Direct channels" X (Twitter) entry; both open in new tab

## Implemented (2026-09-02, update 10)
- Instagram linked (https://www.instagram.com/nivi_consulting/): footer social icon button + @nivi_consulting, and Contact page "Direct channels" block; both open in new tab

## Implemented (2026-09-02, update 9)
- Fixed services bento misalignment: removed conflicting duplicate col-span classes on service cards (desktop grid now 7/5 + 5/7 asymmetric rows as designed); tightened icon-to-title spacing on small screens. Verified at 1440px, 900px, 390px viewports

## Implemented (2026-09-01, update 8)
- New NB logo (user-provided, "Innovate. Optimize. Grow.") replaced across header + footer (/public/logo.png, trimmed); favicon set regenerated from NB monogram (favicon.ico, icon-192/512, apple-touch-icon)

## Implemented (2026-09-01, update 7)
- Company renamed throughout: "Nivi Finserv Ltd." → "Nivi Business Consulting Ltd" (all pages, footer legal line, tab title, meta description, backend API message, enquiry email template + EMAIL_FROM_NAME). Verified live; enquiry email still delivers. NOTE: NF logo monogram retained — initials no longer match (NBC); user may want a new logo
- User plans domain: niviconsultancy.com (free via IONOS through company formation agent, first year)

## Implemented (2026-09-01, update 6)
- Mobile hero fix: removed scroll-linked opacity fade on hero content (stats appeared dimmed on phones), switched hero to 100svh, tightened stat grid spacing/typography for small screens. Verified at 390x844 viewport

## Implemented (2026-09-01, update 5)
- Enquiry email alerts ON: POST /api/enquiries now emails nivifinservit@gmail.com via Emergent managed email (Resend proxy), branded HTML template, guardrail gate, verified live (202 Accepted). Enquiry saves even if email fails (logged)
- Backend env: EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME=Nivi Finserv Ltd., EMAIL_REPLY_TO + OWNER_EMAIL = nivifinservit@gmail.com; httpx in requirements.txt

## Implemented (2026-09-01, update 4)
- NF logo (user-provided) added to header and footer; transparent padding trimmed; served from /public/logo.png
- Favicon set generated from NF monogram on obsidian tile: favicon.ico (16/32/48), icon-192.png, icon-512.png, apple-touch-icon.png; tab title + meta description updated
- Contact email updated to nivifinservit@gmail.com (Contact page + Footer)
- Removed hero overline, removed Services placeholder number panels, removed header "Ltd · UK" text per user requests

## Implemented (2026-09-01, update 3)
- Removed outlined-number placeholder panels from Services page (sections 02 and 04 are now full-width text; only real photos remain)

## Implemented (2026-09-01, update 2)
- Company details corrected per user: registered in Glasgow, Scotland, UK; contact number +44 7846745814
- All London references replaced with Glasgow across Home hero, About story/banner, Contact channels, Footer ("Registered in Scotland, United Kingdom")
- Photography swapped from London (Shard/skyline) to genuine Glasgow imagery: aerial Glasgow cityscape (hero), Glasgow clock tower (About banner), Glasgow contemporary architecture (Services)

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
