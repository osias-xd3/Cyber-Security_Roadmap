/**
 * Cybersecurity Roadmap - Application Logic & State Engine
 * Handles LocalStorage persistence, progress calculation, rendering & interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.ROADMAP_DATA;
  if (!data) {
    console.error("Roadmap data not loaded.");
    return;
  }

  // --- State Management ---
  const STORAGE_KEY_PROGRESS = "cyber_roadmap_progress";
  const STORAGE_KEY_THEME = "cyber_roadmap_theme";
  const STORAGE_KEY_TRACK = "cyber_roadmap_selected_track";

  let savedState = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return raw ? JSON.parse(raw) : { checklist: {}, topics: {} };
    } catch (e) {
      return { checklist: {}, topics: {} };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(savedState));
      updateGlobalProgress();
    } catch (e) {
      console.warn("Unable to save state to localStorage", e);
    }
  }

  // --- Theme Controller ---
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem(STORAGE_KEY_THEME) || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEY_THEME, next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === "light" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }

  // --- Mobile Navigation Toggle ---
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("hidden");
    });
    // Close drawer when link clicked
    mobileDrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileDrawer.classList.add("hidden"));
    });
  }

  // --- Render 30 Days Action Checklist ---
  const checklistContainer = document.getElementById("checklistContainer");
  if (checklistContainer) {
    checklistContainer.innerHTML = data.first30Days.map(item => {
      const isDone = !!savedState.checklist[item.id];
      return `
        <div class="check-item-card ${isDone ? "completed" : ""}" id="card-${item.id}">
          <input type="checkbox" class="custom-checkbox" id="check-${item.id}" data-type="checklist" data-id="${item.id}" ${isDone ? "checked" : ""} aria-label="${item.title}">
          <div class="check-content">
            <div class="check-header">
              <h4 class="check-title">${item.title}</h4>
              <span class="check-tag">${item.category} • ${item.tag}</span>
            </div>
            <p class="check-desc">${item.description}</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="check-link">
              ${item.linkText}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  // --- Render Roadmap Phases ---
  const phasesContainer = document.getElementById("phasesContainer");
  if (phasesContainer) {
    phasesContainer.innerHTML = data.phases.map(phase => {
      // Topics markup
      let topicsMarkup = "";
      if (phase.topics && phase.topics.length > 0) {
        topicsMarkup = `
          <div class="topics-wrap">
            <h5 class="topics-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              Core Topics & Skill Checkpoints:
            </h5>
            <div class="topics-list">
              ${phase.topics.map(t => {
                const isTopicDone = !!savedState.topics[t.id];
                return `
                  <div class="topic-row ${isTopicDone ? "done" : ""}" id="topic-row-${t.id}">
                    <input type="checkbox" class="custom-checkbox" id="topic-${t.id}" data-type="topic" data-id="${t.id}" ${isTopicDone ? "checked" : ""} aria-label="${t.name}">
                    <div class="topic-info">
                      <div class="topic-name">${t.name}</div>
                      <div class="topic-detail">${t.detail}</div>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }

      // Resources markup
      let resourcesMarkup = "";
      if (phase.resources && phase.resources.length > 0) {
        resourcesMarkup = `
          <div class="resources-section">
            <h5 class="topics-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Verified Free Learning Resources:
            </h5>
            <div class="resources-grid">
              ${phase.resources.map(r => `
                <div class="resource-card">
                  <div>
                    <span class="resource-type">${r.type}</span>
                    <h4 class="resource-name">${r.name}</h4>
                    <p class="resource-desc">${r.desc}</p>
                  </div>
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-btn">
                    Access Free Resource
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }

      // Phase 4 Specialization embed
      let specializationMarkup = "";
      if (phase.id === 4) {
        specializationMarkup = `
          <div class="phase-specialization-callout">
            <p style="margin-bottom: 1.5rem; color: var(--text-muted);">
              Use our interactive <strong>Specialization Explorer</strong> below to compare daily duties, salary trends, free tool kits, and certification paths for all 5 domains.
            </p>
            <a href="#specializations" class="btn btn-outline" style="display: inline-flex;">
              Explore 5 Specialization Tracks
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        `;
      }

      // Phase 5 Honesty Alert embed
      let honestyMarkup = "";
      if (phase.honestyAlert) {
        honestyMarkup = `
          <div class="honesty-banner" style="margin-top: 1.5rem;">
            <div class="honesty-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              ${phase.honestyAlert.title}
            </div>
            <div style="font-size: 0.9rem; color: var(--text-main); white-space: pre-line; line-height: 1.6;">
              ${phase.honestyAlert.content}
            </div>
          </div>
        `;
      }

      // Phase 6 Paid Cert Details
      let certDetailsMarkup = "";
      if (phase.details) {
        certDetailsMarkup = `
          <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
            ${phase.details.map(d => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
                <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.25rem;">${d.label}</div>
                <div style="font-size: 0.95rem; color: var(--text-main); font-weight: 500;">${d.value}</div>
              </div>
            `).join("")}
          </div>
        `;
      }

      // Phase 8 Portfolio Pillars
      let pillarsMarkup = "";
      if (phase.pillars) {
        pillarsMarkup = `
          <div style="display: grid; gap: 1.25rem; margin-bottom: 2rem;">
            ${phase.pillars.map(p => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.4rem;">${p.title}</h4>
                <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">${p.desc}</p>
              </div>
            `).join("")}
          </div>
        `;
      }

      // Milestone
      let milestoneMarkup = "";
      if (phase.milestone) {
        milestoneMarkup = `
          <div class="milestone-checkpoint">
            <div class="milestone-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="milestone-text">
              <h5>Phase Milestone Checklist</h5>
              <p>${phase.milestone}</p>
            </div>
          </div>
        `;
      }

      return `
        <div class="phase-card" id="phase-card-${phase.id}">
          <div class="phase-header" data-toggle-phase="${phase.id}">
            <div class="phase-title-group">
              <span class="phase-num-badge">${phase.phaseNumber}</span>
              <div class="phase-title-text">
                <h3>${phase.title}</h3>
                <span class="phase-timeline-chip">${phase.timeline}</span>
              </div>
            </div>
            <div class="phase-meta-tags">
              <span class="badge-pill">${phase.badge}</span>
              <svg class="toggle-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="phase-body">
            <div class="phase-summary-box">
              ${phase.summary}
            </div>
            ${topicsMarkup}
            ${resourcesMarkup}
            ${specializationMarkup}
            ${honestyMarkup}
            ${certDetailsMarkup}
            ${pillarsMarkup}
            ${milestoneMarkup}
          </div>
        </div>
      `;
    }).join("");
  }

  // --- Accordion Phase Toggle Logic ---
  document.querySelectorAll("[data-toggle-phase]").forEach(header => {
    header.addEventListener("click", () => {
      const card = header.closest(".phase-card");
      if (card) {
        card.classList.toggle("collapsed");
      }
    });
  });

  const expandAllBtn = document.getElementById("expandAllPhasesBtn");
  const collapseAllBtn = document.getElementById("collapseAllPhasesBtn");

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".phase-card").forEach(c => c.classList.remove("collapsed"));
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".phase-card").forEach(c => c.classList.add("collapsed"));
    });
  }

  // --- Checkbox Click Handler (Event Delegation) ---
  document.body.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox'].custom-checkbox")) {
      const type = e.target.getAttribute("data-type");
      const id = e.target.getAttribute("data-id");
      const isChecked = e.target.checked;

      if (type === "checklist") {
        savedState.checklist[id] = isChecked;
        const parentCard = document.getElementById(`card-${id}`);
        if (parentCard) parentCard.classList.toggle("completed", isChecked);
      } else if (type === "topic") {
        savedState.topics[id] = isChecked;
        const topicRow = document.getElementById(`topic-row-${id}`);
        if (topicRow) topicRow.classList.toggle("done", isChecked);
      }

      saveState();
    }
  });

  // --- Specialization Explorer Logic ---
  const trackTabsContainer = document.getElementById("trackTabsContainer");
  const trackDetailsContainer = document.getElementById("trackDetailsContainer");

  let activeTrackId = localStorage.getItem(STORAGE_KEY_TRACK) || "blue-team";

  function renderTrackTabs() {
    if (!trackTabsContainer) return;
    trackTabsContainer.innerHTML = data.specializationTracks.map(track => {
      const isActive = track.id === activeTrackId;
      return `
        <button class="track-tab-btn ${isActive ? "active" : ""}" data-track-id="${track.id}">
          <span style="font-size: 1.1rem;">${getTrackEmoji(track.id)}</span>
          ${track.name}
        </button>
      `;
    }).join("");

    trackTabsContainer.querySelectorAll("[data-track-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTrackId = btn.getAttribute("data-track-id");
        localStorage.setItem(STORAGE_KEY_TRACK, activeTrackId);
        renderTrackTabs();
        renderTrackDetails();
      });
    });
  }

  function getTrackEmoji(id) {
    switch(id) {
      case "blue-team": return "🛡️";
      case "red-team": return "⚔️";
      case "cloud-security": return "☁️";
      case "grc": return "📋";
      case "dfir": return "🔍";
      default: return "🎯";
    }
  }

  function renderTrackDetails() {
    if (!trackDetailsContainer) return;
    const track = data.specializationTracks.find(t => t.id === activeTrackId);
    if (!track) return;

    trackDetailsContainer.innerHTML = `
      <div class="track-detail-pane">
        <div class="track-left-col">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
            <span style="font-size: 1.75rem;">${getTrackEmoji(track.id)}</span>
            <h3>${track.name}</h3>
          </div>
          <p class="track-overview">${track.roleOverview}</p>

          <div class="track-titles-block">
            <h5>Typical Entry-Level Job Titles:</h5>
            <div class="title-chips">
              ${track.entryTitles.map(title => `<span class="title-chip">${title}</span>`).join("")}
            </div>
          </div>

          <div class="track-titles-block">
            <h5>Industry Market Demand:</h5>
            <div style="font-size: 0.9rem; color: var(--accent-emerald); font-weight: 600;">
              ${track.demandInsight}
            </div>
          </div>

          <div class="track-titles-block">
            <h5>Core Tools & Technologies:</h5>
            <div class="tools-list">
              ${track.keyTools.map(tool => `<span class="tool-tag">${tool}</span>`).join("")}
            </div>
          </div>

          <div class="pro-tip-box">
            <h6>Insider Hiring Advice:</h6>
            <p>${track.proTip}</p>
          </div>
        </div>

        <div class="track-right-col">
          <div class="card-inner-box">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Target Certification Progression:
            </h4>
            <div style="font-size: 1.05rem; font-weight: 800; color: var(--accent-cyan); margin-bottom: 0.4rem;">
              ${track.paidCertTarget.primary}
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
              ${track.paidCertTarget.desc}
            </p>
          </div>

          <div class="card-inner-box">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Curated Free Labs & Training:
            </h4>
            <div>
              ${track.freeTraining.map(item => `
                <div class="track-link-item">
                  <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                    <span>${item.name}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                  <p>${item.desc}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderTrackTabs();
  renderTrackDetails();

  // --- Render Certifications Directory ---
  const certsContainer = document.getElementById("certsContainer");
  const certFilterBtns = document.querySelectorAll("[data-cert-filter]");
  const certSearchInput = document.getElementById("certSearchInput");
  const expiredGrid = document.getElementById("expiredCertsGrid");

  let activeCertFilter = "all";
  let certSearchQuery = "";

  // Render Expired Certs Banner
  if (expiredGrid) {
    expiredGrid.innerHTML = data.expiredAlerts.map(ex => `
      <div class="expired-item">
        <div class="expired-name">${ex.name}</div>
        <div class="expired-status">⚠️ ${ex.status}</div>
        <div class="expired-details">${ex.details}</div>
      </div>
    `).join("");
  }

  function renderCertifications() {
    if (!certsContainer) return;

    const filtered = data.certifications.filter(c => {
      // Filter by category
      let matchesFilter = true;
      if (activeCertFilter === "free") matchesFilter = c.isFree === true;
      else if (activeCertFilter === "training-only") matchesFilter = c.category === "Free Training, Paid Exam";
      else if (activeCertFilter === "paid") matchesFilter = c.isFree === false;

      // Filter by search
      let matchesSearch = true;
      if (certSearchQuery.trim()) {
        const q = certSearchQuery.toLowerCase();
        matchesSearch = c.name.toLowerCase().includes(q) ||
                        c.issuer.toLowerCase().includes(q) ||
                        c.description.toLowerCase().includes(q);
      }

      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      certsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
          <p style="color: var(--text-muted); font-size: 1rem;">No certifications match your filter criteria.</p>
        </div>
      `;
      return;
    }

    certsContainer.innerHTML = filtered.map(cert => `
      <div class="cert-card">
        <div>
          <div class="cert-top">
            <h4 class="cert-name">${cert.name}</h4>
            <span class="cert-cost-badge ${cert.isFree ? "free" : "paid"}">${cert.cost}</span>
          </div>
          <div class="cert-issuer">Issued by: <strong>${cert.issuer}</strong></div>
          <p class="cert-desc">${cert.description}</p>
          <div class="cert-why">
            <strong>Why it matters:</strong> ${cert.whyItMatters}
          </div>
        </div>
        <div class="cert-footer">
          <span class="cert-validity">${cert.validity}</span>
          <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
            Official Page
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>
      </div>
    `).join("");
  }

  certFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      certFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCertFilter = btn.getAttribute("data-cert-filter");
      renderCertifications();
    });
  });

  if (certSearchInput) {
    certSearchInput.addEventListener("input", (e) => {
      certSearchQuery = e.target.value;
      renderCertifications();
    });
  }

  renderCertifications();

  // --- Render Month by Month Matrix ---
  const monthTableBody = document.getElementById("monthTableBody");
  if (monthTableBody) {
    monthTableBody.innerHTML = data.monthSummary.map(row => `
      <tr>
        <td><span class="month-badge">${row.months}</span></td>
        <td>${row.focus}</td>
      </tr>
    `).join("");
  }

  // --- Render Top Mistakes to Avoid ---
  const mistakesContainer = document.getElementById("mistakesContainer");
  if (mistakesContainer) {
    mistakesContainer.innerHTML = data.mistakesToAvoid.map(m => `
      <div class="mistake-card">
        <div class="mistake-head">
          <div class="mistake-num">${m.num}</div>
          <h4 class="mistake-title">${m.title}</h4>
        </div>
        <div class="trap-box">
          <strong style="color: var(--accent-rose); display: block; margin-bottom: 0.2rem;">❌ Common Trap:</strong>
          ${m.bad}
        </div>
        <div class="fix-box">
          <strong style="color: var(--accent-emerald); display: block; margin-bottom: 0.2rem;">✅ What to do instead:</strong>
          ${m.remedy}
        </div>
      </div>
    `).join("");
  }

  // --- Render YouTube Creators Showcase ---
  const creatorsContainer = document.getElementById("creatorsContainer");
  if (creatorsContainer) {
    creatorsContainer.innerHTML = data.creators.map(c => `
      <div class="creator-card">
        <div>
          <h4 class="creator-name">${c.name}</h4>
          <div class="creator-focus">${c.focus}</div>
          <p class="creator-style">${c.style}</p>
          <div class="creator-best">
            <strong>Recommended for:</strong> ${c.bestFor}
          </div>
        </div>
        <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="creator-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Visit Channel
        </a>
      </div>
    `).join("");
  }

  // --- Progress Calculation Engine ---
  function updateGlobalProgress() {
    let totalItems = 0;
    let completedItems = 0;

    // Count first 30 days checklist
    data.first30Days.forEach(item => {
      totalItems++;
      if (savedState.checklist[item.id]) completedItems++;
    });

    // Count all topics across phases
    data.phases.forEach(phase => {
      if (phase.topics) {
        phase.topics.forEach(t => {
          totalItems++;
          if (savedState.topics[t.id]) completedItems++;
        });
      }
    });

    const percent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    // Update Nav progress bar & label
    const navFill = document.getElementById("navProgressFill");
    const navText = document.getElementById("navProgressText");
    const heroProgressText = document.getElementById("heroProgressValue");

    if (navFill) navFill.style.width = `${percent}%`;
    if (navText) navText.textContent = `${percent}%`;
    if (heroProgressText) heroProgressText.textContent = `${percent}% (${completedItems}/${totalItems})`;
  }

  updateGlobalProgress();

  // --- Reset Progress Button ---
  const resetBtn = document.getElementById("resetProgressBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset your checklist progress? This cannot be undone.")) {
        savedState = { checklist: {}, topics: {} };
        saveState();
        // Uncheck all boxes in UI
        document.querySelectorAll("input[type='checkbox'].custom-checkbox").forEach(box => {
          box.checked = false;
        });
        document.querySelectorAll(".check-item-card").forEach(c => c.classList.remove("completed"));
        document.querySelectorAll(".topic-row").forEach(r => r.classList.remove("done"));
        updateGlobalProgress();
      }
    });
  }

  // --- Print / Export PDF Handler ---
  const printBtn = document.getElementById("printRoadmapBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // --- Back to Top Controller ---
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
