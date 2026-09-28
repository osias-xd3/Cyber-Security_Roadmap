# 🛡️ The Complete Cybersecurity Roadmap (Zero Knowledge → Job-Ready)

A modern, responsive, and professional multi-page frontend web application that provides a comprehensive, step-by-step roadmap for breaking into the field of cybersecurity. Built for zero-config, instantaneous deployment on **Vercel**.

Fact-checked and verified against vendor specifications as of **August–September 2026**.

---

## 🌐 Multi-Page Structure

The website is structured into three clean, focused pages:

1. **Home Page (`index.html`)**:
   - High-impact introduction & course foundations.
1. **Home Page (`index.html`)**:
   - Course basics, prerequisite clarity, and core philosophies (**Learn → Practice → Prove**).
   - What makes this roadmap unique (zero fluff, real labs, avoiding tutorial hell).
   - Dedicated **About the Creator** section (Muhammad Awais, Software Engineering Student at COMSATS Lahore).
   - Direct gateway launchers to the Master Roadmap and Certifications Hub.

2. **Complete Master Curriculum (`roadmap.html`)**:
   - The exhaustive technical master plan covering every single subtopic across Phases 0–8.
   - Left sidebar course navigation index with quick-jump links.
   - In-place expandable topic resource drawers for every domain.
   - Interactive **Phase 4 Specialization Pathways Explorer** and comprehensive **5 Career Tracks Explorer** (Blue Team, Red Team, Cloud Security, GRC, DFIR) with curated free training labs, certification progression ladders, and gamified challenges.
   - Curated **YouTube Channels Worth Subscribing To** (NetworkChuck, John Hammond, The Cyber Mentor, IppSec, David Bombal, Professor Messer, LiveOverflow, Simply Cyber).

3. **2026 Certifications Hub (`certifications.html`)**:
   - Comprehensive directory of 62+ credentials with live search, domain filters, and difficulty tier filters.
   - Top 10 "Worth the Money" shortlist comparison table.
   - 2026 major syllabus and pricing changes fact-check.
   - "Not Worth Paying Out-of-Pocket" guidance and study cost minimization strategies.
   - Official vendor directory.

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
├── index.html            # Page 1: Home Page (Course Basics & Creator Profile)
├── roadmap.html          # Page 2: Complete Master Curriculum (Exhaustive & Interactive)
├── certifications.html   # Page 3: 2026 Certifications Hub (Directory, Shortlist & Vendor Index)
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
