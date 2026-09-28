/**
 * Cybersecurity Roadmap - Multi-Page Application Engine
 * Handles State, Persistence, Shared Navbar, Dynamic Page Renderers,
 * Sidebar Index ScrollSpy, and In-Place Dropdown Accordions
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.ROADMAP_DATA;
  if (!data) {
    console.error("Roadmap data not loaded.");
    return;
  }

  // --- State Keys ---
  const STORAGE_KEY_PROGRESS = "cyber_roadmap_progress";
  const STORAGE_KEY_THEME = "cyber_roadmap_theme";
  const STORAGE_KEY_TRACK = "cyber_roadmap_selected_track";

  let savedState = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return raw ? JSON.parse(raw) : { topics: {} };
    } catch (e) {
      return { topics: {} };
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

  // --- Mobile Drawer Controller ---
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  if (mobileMenuBtn && mobileDrawer) {
    const hamburgerSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    const closeSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    function setDrawerState(open) {
      mobileDrawer.classList.toggle("hidden", !open);
      mobileMenuBtn.classList.toggle("active", open);
      mobileMenuBtn.setAttribute("aria-expanded", String(open));
      mobileMenuBtn.innerHTML = open ? closeSvg : hamburgerSvg;
    }

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = !mobileDrawer.classList.contains("hidden");
      setDrawerState(!isOpen);
    });

    mobileDrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => setDrawerState(false));
    });

    document.addEventListener("click", (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (!mobileDrawer.classList.contains("hidden")) {
          setDrawerState(false);
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileDrawer.classList.contains("hidden")) {
        setDrawerState(false);
      }
    });
  }

  // --- Global Progress Calculation (Phase Topics Only) ---
  function updateGlobalProgress() {
    let totalItems = 0;
    let completedItems = 0;

    data.phases.forEach(phase => {
      if (phase.topics) {
        phase.topics.forEach(t => {
          totalItems++;
          if (savedState.topics && savedState.topics[t.id]) completedItems++;
        });
      }
    });

    const percent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    const navFill = document.getElementById("navProgressFill");
    const navText = document.getElementById("navProgressText");
    const heroProgressText = document.getElementById("heroProgressValue");

    if (navFill) navFill.style.width = `${percent}%`;
    if (navText) navText.textContent = `${percent}%`;
    if (heroProgressText) heroProgressText.textContent = `${percent}% (${completedItems}/${totalItems})`;
  }

  updateGlobalProgress();

  // =========================================================================
  // PAGE: OVERVIEW (overview.html) - In-Place Expandable Dropdowns
  // =========================================================================
  const overviewStepperContainer = document.getElementById("overviewStepperContainer");
  if (overviewStepperContainer) {
    overviewStepperContainer.innerHTML = data.phases.map(p => `
      <div class="overview-phase-card" id="overview-card-${p.id}">
        <div class="overview-card-header">
          <div class="overview-phase-meta">
            <span class="overview-phase-num">${p.phaseNumber}</span>
            <span class="overview-phase-time">${p.timeline}</span>
            <span class="badge-pill" style="align-self: flex-start; margin-top: 0.35rem;">${p.badge}</span>
          </div>
          <div class="overview-phase-content">
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
          </div>
          <div>
            <button class="overview-dropdown-toggle" data-toggle-overview="${p.id}" aria-expanded="false">
              <span>Basic Overview</span>
              <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
        </div>

        <!-- In-Place Drawer with Key Overview Points -->
        <div class="overview-drawer" id="overview-drawer-${p.id}">
          <div class="overview-points-list">
            ${p.overviewPoints && p.overviewPoints.length > 0
              ? p.overviewPoints.map(pt => `
                <div class="overview-point-item">
                  <span style="color: var(--accent-emerald); font-weight: 800;">⚡</span>
                  <div>${pt}</div>
                </div>
              `).join("")
              : `<div class="overview-point-item"><div>${p.summary}</div></div>`
            }
          </div>
          <div style="margin-top: 0.85rem; padding-left: 0.5rem; font-size: 0.8rem; color: var(--text-subtle);">
            <strong>Milestone Checkpoint:</strong> ${p.milestone || "Ready to progress"}
          </div>
        </div>
      </div>
    `).join("");

    // Toggle in-place overview dropdowns
    document.querySelectorAll("[data-toggle-overview]").forEach(btn => {
      btn.addEventListener("click", () => {
        const phaseId = btn.getAttribute("data-toggle-overview");
        const drawer = document.getElementById(`overview-drawer-${phaseId}`);
        if (drawer) {
          const isOpen = drawer.classList.contains("open");
          drawer.classList.toggle("open", !isOpen);
          btn.classList.toggle("expanded", !isOpen);
          btn.setAttribute("aria-expanded", !isOpen);
        }
      });
    });
  }

  // Overview Tracks Snapshot
  const overviewTracksGrid = document.getElementById("overviewTracksGrid");
  if (overviewTracksGrid) {
    overviewTracksGrid.innerHTML = data.specializationTracks.map(track => `
      <div class="course-basic-card">
        <div class="basic-card-icon" style="font-size: 1.5rem;">
          ${getTrackEmoji(track.id)}
        </div>
        <h3>${track.name}</h3>
        <p style="margin-bottom: 0.75rem;">${track.roleOverview}</p>
        <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--accent-cyan); margin-bottom: 1rem;">
          Target: <strong>${track.paidCertTarget.primary}</strong>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-subtle);">
          Market Demand: <span style="color: var(--accent-emerald);">${track.demandInsight}</span>
        </div>
      </div>
    `).join("");
  }

  // =========================================================================
  // PAGE: COMPLETE ROADMAP (roadmap.html)
  // =========================================================================

  const phasesContainer = document.getElementById("phasesContainer");
  if (phasesContainer) {
    phasesContainer.innerHTML = data.phases.map(phase => {
      // Topics with In-Place Resource Dropdowns
      let topicsMarkup = "";
      if (phase.topics && phase.topics.length > 0) {
        topicsMarkup = `
          <div class="topics-wrap">
            <h5 class="topics-title" style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-size: 1.05rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              Core Topics & Skill Checkpoints:
            </h5>
            <div class="topics-list">
              ${phase.topics.map(t => {
                const isTopicDone = !!(savedState.topics && savedState.topics[t.id]);
                const hasResources = t.resources && t.resources.length > 0;
                
                return `
                  <div class="topic-row ${isTopicDone ? "done" : ""}" id="topic-row-${t.id}">
                    <div class="topic-header-flex">
                      <input type="checkbox" class="custom-checkbox" id="topic-${t.id}" data-type="topic" data-id="${t.id}" ${isTopicDone ? "checked" : ""} aria-label="${t.name}">
                      <div class="topic-info">
                        <div class="topic-name">${t.name}</div>
                        <div class="topic-detail">${t.detail}</div>
                      </div>
                    </div>

                    ${hasResources ? `
                      <button class="topic-res-toggle" data-toggle-res="${t.id}" aria-expanded="false">
                        <span>📚 View Resources (${t.resources.length})</span>
                        <svg class="toggle-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </button>

                      <div class="topic-res-drawer" id="res-drawer-${t.id}">
                        ${t.resources.map(r => `
                          <div class="topic-res-item">
                            <div class="topic-res-item-left">
                              <span class="topic-res-name">${r.name} <small style="color: var(--accent-emerald); font-family: var(--font-mono);">[${r.type}]</small></span>
                              <span class="topic-res-desc">${r.desc}</span>
                            </div>
                            <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="topic-res-link">
                              Open Link
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </a>
                          </div>
                        `).join("")}
                      </div>
                    ` : ""}
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }

      // Phase 4 Specialization embed
      let specializationMarkup = "";
      if (phase.id === 4) {
        specializationMarkup = `
          <div class="phase-specialization-callout" style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
            <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.95rem;">
              Compare daily duties, required tools, free labs, and certification paths for all 5 domains in our <strong>Specialization Explorer</strong> below.
            </p>
            <a href="#specializations" class="btn btn-outline" style="display: inline-flex; font-size: 0.85rem;">
              Jump to 5 Specialization Tracks ↓
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
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
          <div style="display: grid; gap: 0.85rem; margin-bottom: 1.5rem;">
            ${phase.details.map(d => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem 1.15rem;">
                <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.25rem;">${d.label}</div>
                <div style="font-size: 0.925rem; color: var(--text-main); font-weight: 500;">${d.value}</div>
              </div>
            `).join("")}
          </div>
        `;
      }

      // Milestone
      let milestoneMarkup = "";
      if (phase.milestone) {
        milestoneMarkup = `
          <div class="milestone-checkpoint" style="margin-top: 1.5rem;">
            <div class="milestone-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
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
              <svg class="toggle-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="phase-body">
            <div class="phase-summary-box">
              ${phase.summary}
            </div>
            ${topicsMarkup}
            ${specializationMarkup}
            ${honestyMarkup}
            ${certDetailsMarkup}
            ${milestoneMarkup}
          </div>
        </div>
      `;
    }).join("");

    // Accordion Phase Expand/Collapse
    document.querySelectorAll("[data-toggle-phase]").forEach(header => {
      header.addEventListener("click", () => {
        const card = header.closest(".phase-card");
        if (card) card.classList.toggle("collapsed");
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

    // Toggle In-Place Topic Resource Dropdowns
    document.querySelectorAll("[data-toggle-res]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const topicId = btn.getAttribute("data-toggle-res");
        const drawer = document.getElementById(`res-drawer-${topicId}`);
        if (drawer) {
          const isOpen = drawer.classList.contains("open");
          drawer.classList.toggle("open", !isOpen);
          btn.classList.toggle("expanded", !isOpen);
          btn.setAttribute("aria-expanded", !isOpen);
        }
      });
    });
  }

  // Checkbox Event Delegation for Topics
  document.body.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox'].custom-checkbox")) {
      const type = e.target.getAttribute("data-type");
      const id = e.target.getAttribute("data-id");
      const isChecked = e.target.checked;

      if (type === "topic") {
        if (!savedState.topics) savedState.topics = {};
        savedState.topics[id] = isChecked;
        const topicRow = document.getElementById(`topic-row-${id}`);
        if (topicRow) topicRow.classList.toggle("done", isChecked);
        saveState();
      }
    }
  });

  // --- Sidebar ScrollSpy for Roadmap Page ---
  const sidebarNavItems = document.querySelectorAll(".sidebar-nav-item");
  if (sidebarNavItems.length > 0) {
    const targets = Array.from(sidebarNavItems)
      .map(item => {
        const id = item.getAttribute("data-nav-target");
        return { item, el: document.getElementById(id) };
      })
      .filter(t => t.el !== null);

    window.addEventListener("scroll", () => {
      let currentId = "";
      const scrollPos = window.scrollY + 160;

      for (let i = 0; i < targets.length; i++) {
        const { el } = targets[i];
        if (el.offsetTop <= scrollPos) {
          currentId = el.id;
        }
      }

      if (currentId) {
        sidebarNavItems.forEach(item => {
          if (item.getAttribute("data-nav-target") === currentId) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });

        const mobileIndexPills = document.querySelectorAll(".mobile-index-pill");
        mobileIndexPills.forEach(pill => {
          const href = pill.getAttribute("href");
          if (href === `#${currentId}`) {
            pill.classList.add("active");
          } else {
            pill.classList.remove("active");
          }
        });
      }
    });
  }

  // --- Mobile Course Index Bar Controller (Roadmap Page) ---
  const mobileIndexToggleBtn = document.getElementById("mobileIndexToggleBtn");
  const mobileIndexDropdown = document.getElementById("mobileIndexDropdown");
  if (mobileIndexToggleBtn && mobileIndexDropdown) {
    mobileIndexToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileIndexDropdown.classList.contains("open");
      mobileIndexDropdown.classList.toggle("open", !isOpen);
      mobileIndexToggleBtn.classList.toggle("expanded", !isOpen);
      mobileIndexToggleBtn.setAttribute("aria-expanded", String(!isOpen));
    });

    mobileIndexDropdown.querySelectorAll(".mobile-index-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        mobileIndexDropdown.classList.remove("open");
        mobileIndexToggleBtn.classList.remove("expanded");
        mobileIndexToggleBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!mobileIndexDropdown.contains(e.target) && !mobileIndexToggleBtn.contains(e.target)) {
        mobileIndexDropdown.classList.remove("open");
        mobileIndexToggleBtn.classList.remove("expanded");
        mobileIndexToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Specialization Explorer Logic ---
  const trackTabsContainer = document.getElementById("trackTabsContainer");
  const trackDetailsContainer = document.getElementById("trackDetailsContainer");
  let activeTrackId = localStorage.getItem(STORAGE_KEY_TRACK) || "blue-team";

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
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

  // --- Certifications Directory ---
  const certsContainer = document.getElementById("certsContainer");
  const certFilterBtns = document.querySelectorAll("[data-cert-filter]");
  const certSearchInput = document.getElementById("certSearchInput");
  const expiredGrid = document.getElementById("expiredCertsGrid");

  let activeCertFilter = "all";
  let certSearchQuery = "";

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
      let matchesFilter = true;
      if (activeCertFilter === "free") matchesFilter = c.isFree === true;
      else if (activeCertFilter === "training-only") matchesFilter = c.category === "Free Training, Paid Exam";
      else if (activeCertFilter === "paid") matchesFilter = c.isFree === false;

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

  // --- Month by Month Matrix ---
  const monthTableBody = document.getElementById("monthTableBody");
  if (monthTableBody) {
    monthTableBody.innerHTML = data.monthSummary.map(row => `
      <tr>
        <td><span class="month-badge">${row.months}</span></td>
        <td>${row.focus}</td>
      </tr>
    `).join("");
  }

  // --- Mistakes to Avoid ---
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

  // --- YouTube Creators Showcase ---
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

  // --- Reset Progress ---
  const resetBtn = document.getElementById("resetProgressBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset your checklist progress? This cannot be undone.")) {
        savedState = { topics: {} };
        saveState();
        document.querySelectorAll("input[type='checkbox'].custom-checkbox").forEach(box => {
          box.checked = false;
        });
        document.querySelectorAll(".topic-row").forEach(r => r.classList.remove("done"));
        updateGlobalProgress();
      }
    });
  }

  // --- Print / PDF ---
  const printBtn = document.getElementById("printRoadmapBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  // --- Back to Top ---
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
