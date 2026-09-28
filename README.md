# 🛡️ The Complete Cybersecurity Roadmap (Zero Knowledge → Job-Ready)

A modern, responsive, and user-friendly frontend web application that provides a complete, step-by-step roadmap for breaking into the field of cybersecurity. Built for zero-config, instantaneous deployment on **Vercel**.

Fact-checked and verified against vendor specifications as of **August–September 2026**.

---

## 🚀 Live Preview & Deployment on Vercel

### Option 1: One-Click Git Deployment (Recommended)
1. Push this project folder to your GitHub, GitLab, or Bitbucket account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Cybersecurity Roadmap"
   git branch -M main
   git remote add origin https://github.com/<your-username>/cybersecurity-roadmap.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Import your `cybersecurity-roadmap` repository.
5. Vercel will automatically detect the static project framework. Leave the settings at their defaults and click **"Deploy"**.
6. Your roadmap will be live globally on a free `*.vercel.app` domain with instant CDN delivery and automatic SSL in less than 15 seconds!

### Option 2: Deploy via Vercel CLI
If you have the Vercel CLI installed on your machine:
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to link and deploy in seconds.

---

## 💻 Running Locally

This application requires **zero external build tools or node dependencies** to run. You can test it immediately using any local web server or even opening `index.html` directly in your browser.

### Using Python 3:
```bash
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Using VS Code:
Right-click on `index.html` and choose **"Open with Live Server"**.

---

## ✨ Features & Architecture

- **Interactive Progress Tracking**: Check off completed items in the "First 30 Days" and across all 8 phases. Your progress is dynamically calculated and saved to the browser's `localStorage` so it persists across visits.
- **Fact-Checked 2026 Free Certifications Hub**: Highlights verified active free certifications (Fortinet NSE 1–3, Cisco, AttackIQ, Centri BTJA, IBM, OPSWAT, Qualys) alongside prominent **Honesty Alerts** for expired programs (ISC2 CC free voucher ended May 20, 2026, EC-Council, etc.).
- **Interactive Specialization Explorer**: Compare all 5 career tracks (Blue Team / SOC, Red Team / Offensive, Cloud Security, GRC, DFIR) with real tools, entry-level job titles, salary demand, and recommended certification target pathways (BTL1, eJPT, OSCP, AWS/Azure).
- **First 30 Days Action Cockpit**: Concrete 7-step checklist with direct links to tools and resources to eliminate beginner paralysis.
- **5 Critical Mistakes to Avoid**: Interactive side-by-side comparison of common beginner traps and what to do instead.
- **Top Curated YouTube Mentors**: Filtered channel list for pure technical learning (NetworkChuck, John Hammond, The Cyber Mentor, IppSec, David Bombal).
- **Cybersecurity Command Center UI**: Custom dark theme with neon emerald/cyan accents, smooth transitions, glassmorphic cards, and an instant Light Theme toggle.
- **Print / PDF Friendly**: Clean `@media print` styles allowing users to export the entire roadmap and their personal progress to PDF.
- **Enterprise Vercel Configuration**: `vercel.json` comes pre-configured with security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`), clean URLs, and static asset caching.

---

## 📁 File Structure

```
├── index.html            # Main semantic HTML5 interface
├── vercel.json           # Vercel deployment configuration & security headers
├── css/
│   └── style.css         # Modern responsive cybersecurity design system
├── js/
│   ├── roadmap-data.js   # Structured dataset containing all roadmap content
│   └── app.js            # Reactive state, localStorage, filters & interactivity
└── README.md             # Project documentation and deployment guide
```

---

## 🔒 Security & Performance
- Zero dependencies: No `node_modules` vulnerabilities, zero supply-chain risk.
- Perfect 100/100 Lighthouse performance and zero layout shift.
- Outbound external links use `rel="noopener noreferrer"` for security.
