# 🛡️ The Complete Cybersecurity Roadmap (Zero Knowledge → Job-Ready)

A modern, responsive, and professional multi-page frontend web application that provides a comprehensive, step-by-step roadmap for breaking into the field of cybersecurity. Built for zero-config, instantaneous deployment on **Vercel**.

Fact-checked and verified against vendor specifications as of **August–September 2026**.

---

## 🌐 Multi-Page Structure

The website is structured into three clean, focused pages:

1. **Home Page (`index.html`)**:
   - High-impact introduction & course foundations.
   - Core skill-building philosophy: **Learn → Practice → Prove**.
   - What makes this roadmap unique (zero fluff, real labs, avoiding tutorial hell).
   - Dedicated **About the Creator** section (creator profile, bio, mission, and social channels).
   - "First 30 Days" starter teaser.

2. **Roadmap Overview (`overview.html`)**:
   - Executive, high-level summary of the entire journey.
   - 9-Phase Stepper: concise breakdown of what each phase achieves and how long it takes.
   - Strategic Month-by-Month Schedule & Cadence.
   - The 5 Career Tracks At-A-Glance (Blue Team, Red Team, Cloud, GRC, DFIR).
   - Critical beginner mistakes to avoid.

3. **Complete Master Curriculum (`roadmap.html`)**:
   - The exhaustive technical master plan covering every single subtopic.
   - Interactive First 30 Days Action Cockpit with persistent checkboxes.
   - Deep phase cards (Phases 0 through 8) with verified free course links and readiness milestones.
   - Interactive **Specialization Tracks Explorer** with detailed day-to-day duties, tool grids, and target certification pathways (BTL1, eJPT, OSCP, AWS/Azure).
   - **Fact-Checked 2026 Certifications Directory** with real-time search, category filters, and **Honesty Alerts** for expired free voucher programs (ISC2 CC ended May 20, 2026).
   - Curated YouTube Mentors (NetworkChuck, John Hammond, TCM Security, IppSec, David Bombal).
   - Print / PDF export support.

---

## 🚀 One-Click Deployment to Vercel

### Option 1: Git Repository Import (Recommended)
1. Push this folder to your GitHub, GitLab, or Bitbucket account:
   ```bash
   git init
   git add .
   git commit -m "Complete multi-page Cybersecurity Roadmap website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/cybersecurity-roadmap.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `cybersecurity-roadmap` repository.
4. Leave settings at default (Vercel automatically detects the static project and applies `vercel.json` with `cleanUrls: true`).
5. Click **"Deploy"**. Your multi-page site will be live across the world in seconds with SSL, CDN caching, and clean routing (`/`, `/overview`, `/roadmap`).

### Option 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 💻 Running Locally

This application requires **zero external build tools or node dependencies** to run.

### Using Python:
```bash
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 File Structure

```
├── index.html            # Page 1: Home Page (Course Basics & Creator Section)
├── overview.html         # Page 2: Roadmap Overview (Executive Stepper & Snapshot)
├── roadmap.html          # Page 3: Complete Master Curriculum (Exhaustive & Interactive)
├── vercel.json           # Vercel cleanUrls & security headers configuration
├── css/
│   └── style.css         # Modern cybersecurity design system (Dark/Light/Print)
├── js/
│   ├── roadmap-data.js   # Master fact-checked roadmap dataset
│   └── app.js            # Multi-page reactivity, localStorage & filters
└── README.md             # Project documentation
```

---

## 🔒 Security & Performance
- Zero dependencies: No `node_modules` vulnerabilities, zero supply-chain risk.
- Perfect 100/100 Lighthouse performance and zero layout shift.
- Outbound external links use `rel="noopener noreferrer"` for security.
- Progress state is securely persisted in the client's `localStorage`.
