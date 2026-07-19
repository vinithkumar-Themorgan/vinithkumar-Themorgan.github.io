/* ===================================================================
   Vinith Kumar T — Portfolio interactions
   (Edit content in data.js — you rarely need to touch this file.)
   =================================================================== */

/* ---------- Year ---------- */
document.getElementById("year").textContent = "2026";

/* ---------- Nav: scroll style + progress + mobile toggle ---------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById("scrollProgress").style.width = pct + "%";
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
  })
);

/* ---------- Hero rotating roles (typewriter) ---------- */
(function typewriter() {
  const el = document.getElementById("rotator");
  if (!el || !window.ROTATING_TITLES) return;
  const words = ROTATING_TITLES;
  let w = 0, c = 0, deleting = false;
  function tick() {
    const word = words[w];
    el.textContent = word.substring(0, c);
    if (!deleting && c < word.length) { c++; setTimeout(tick, 55); }
    else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 1600); }
    else if (deleting && c > 0) { c--; setTimeout(tick, 28); }
    else { deleting = false; w = (w + 1) % words.length; setTimeout(tick, 250); }
  }
  tick();
})();

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
  { threshold: 0.12 }
);
function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
}

/* ---------- Animated metric counters ---------- */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const t = setInterval(() => {
      n += step;
      if (n >= target) { n = target; clearInterval(t); }
      el.textContent = n + suffix;
    }, 28);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll(".metric__num").forEach((el) => statObserver.observe(el));

/* ---------- Tech ticker ---------- */
(function renderTicker() {
  const track = document.getElementById("tickerTrack");
  if (!track || !window.SKILLS) return;
  const items = [...new Set(SKILLS.flatMap((s) => s.tags))];
  const row = items.map((t) => `<span class="ticker__item">${t}</span>`).join("");
  track.innerHTML = row + row; // duplicate for seamless loop
})();

/* ---------- Render SKILLS (with optional mini demo videos) ---------- */
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid || !window.SKILLS) return;

  grid.innerHTML = SKILLS.map((s) => {
    const media = s.video
      ? `<div class="skill-card__media">
           <video muted loop playsinline preload="none" ${s.poster ? `poster="${s.poster}"` : ""}>
             <source src="${s.video}" type="video/mp4" />
           </video>
           <span class="skill-card__play" aria-hidden="true">▶</span>
         </div>`
      : `<div class="skill-card__ico">${s.icon}</div>`;
    return `
    <div class="skill-card reveal${s.video ? " has-video" : ""}">
      ${media}
      <h3 class="skill-card__title">${s.title}</h3>
      <div class="skill-card__tags">${s.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`;
  }).join("");

  // Play on hover (desktop) / when scrolled into view (touch) — keeps it light
  const canHover = window.matchMedia("(hover: hover)").matches;
  grid.querySelectorAll(".skill-card.has-video").forEach((card) => {
    const v = card.querySelector("video");
    if (!v) return;
    if (canHover) {
      card.addEventListener("mouseenter", () => { v.play().catch(() => {}); });
      card.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0; });
    }
  });

  if (!canHover) {
    const vObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target.querySelector("video");
        if (!v) return;
        if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
      });
    }, { threshold: 0.6 });
    grid.querySelectorAll(".skill-card.has-video").forEach((c) => vObs.observe(c));
  }
})();

/* ---------- Render PROJECTS ---------- */
(function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid || !window.PROJECTS) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal" data-cat="${p.category}" data-index="${i}">
      <div class="project-card__media">
        <span class="project-card__cat">${p.catLabel}</span>
        <img src="${p.thumb}" alt="${p.title}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <div class="project-card__media-fallback" style="display:none">🤖</div>
        ${p.award ? `<div class="project-card__award">${p.award}</div>` : ""}
        ${p.video ? `<div class="project-card__play"><span>▶</span></div>` : ""}
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title"><span>${p.title}</span></h3>
        <p class="project-card__desc">${p.short}</p>
        <div class="project-card__tech">${p.tech.slice(0, 4).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>`).join("");

  grid.querySelectorAll(".project-card").forEach((card) =>
    card.addEventListener("click", () => openModal(PROJECTS[+card.dataset.index]))
  );
})();

/* ---------- Project filters (chips + expertise rows) ---------- */
function applyFilter(f) {
  document.querySelectorAll("#projectFilters .chip").forEach((c) =>
    c.classList.toggle("is-active", c.dataset.filter === f)
  );
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.toggle("is-hidden", f !== "all" && card.dataset.cat !== f);
  });
}

document.getElementById("projectFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (btn) applyFilter(btn.dataset.filter);
});

/* Expertise rows -> highlight, filter projects, scroll down */
const xlist = document.getElementById("xlist");
if (xlist) {
  xlist.addEventListener("click", (e) => {
    const row = e.target.closest(".xrow");
    if (!row) return;
    xlist.querySelectorAll(".xrow").forEach((r) => r.classList.remove("is-active"));
    row.classList.add("is-active");
    applyFilter(row.dataset.filter);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------- Render TIMELINE ---------- */
(function renderTimeline() {
  const el = document.getElementById("timeline");
  if (!el || !window.TIMELINE) return;
  const badge = { work: "Work", internship: "Internship", education: "Education" };
  el.innerHTML = TIMELINE.map((t) => `
    <div class="tl-item reveal">
      <div class="tl-item__date">${t.date}</div>
      <h3 class="tl-item__role">${t.role}</h3>
      <div class="tl-item__org">${t.org}<span class="tl-badge">${badge[t.type] || ""}</span></div>
      <div class="tl-item__desc"><ul>${t.points.map((p) => `<li>${p}</li>`).join("")}</ul></div>
    </div>`).join("");
})();

/* ---------- Render ACHIEVEMENTS (optional clickable proof image) ---------- */
(function renderAchievements() {
  const el = document.getElementById("achievementsGrid");
  if (!el || !window.ACHIEVEMENTS) return;
  el.innerHTML = ACHIEVEMENTS.map((a) => `
    <div class="ach-card reveal${a.img ? " has-img" : ""}"${a.img ? ` data-img="${a.img}"` : ""}>
      <div class="ach-card__ico">${a.icon}</div>
      <h3 class="ach-card__title">${a.title}</h3>
      <p class="ach-card__desc">${a.desc}</p>
      ${a.img ? `<span class="ach-card__view">🔍 ${a.imgLabel || "View proof"}</span>` : ""}
    </div>`).join("");

  el.querySelectorAll(".ach-card.has-img").forEach((card) =>
    card.addEventListener("click", () => openLightbox(card.dataset.img))
  );
})();

/* ---------- Image lightbox (achievements & any proof image) ---------- */
function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("is-open");
  document.body.style.overflow = "";
  document.getElementById("lightboxImg").src = "";
}
(function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.querySelectorAll("[data-lbclose]").forEach((e) => e.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeLightbox());
})();

/* ---------- Modal ---------- */
const modal = document.getElementById("modal");

function buildMedia(video) {
  if (!video) return `<div class="modal__media-empty">🤖 &nbsp;Demo video coming soon</div>`;
  if (video.type === "youtube")
    return `<iframe src="https://www.youtube.com/embed/${video.id}" title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>`;
  return `<video src="${video.src}" controls playsinline preload="metadata"
            onerror="this.outerHTML='&lt;div class=\\'modal__media-empty\\'&gt;🎬 Add video: ${video.src}&lt;/div&gt;'"></video>`;
}

function openModal(p) {
  document.getElementById("modalMedia").innerHTML = buildMedia(p.video);
  document.getElementById("modalCat").textContent = p.catLabel;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalMeta").textContent = p.meta || "";
  const aw = document.getElementById("modalAward");
  aw.textContent = p.award || "";
  aw.style.display = p.award ? "inline-block" : "none";
  document.getElementById("modalDesc").textContent = p.description;
  document.getElementById("modalHighlights").innerHTML = (p.highlights || []).map((h) => `<li>${h}</li>`).join("");
  document.getElementById("modalTech").innerHTML = (p.tech || []).map((t) => `<span class="tag">${t}</span>`).join("");
  document.getElementById("modalGallery").innerHTML = (p.gallery || []).map((g) =>
    `<img src="${g}" alt="" loading="lazy" onerror="this.style.display='none'">`).join("");
  document.getElementById("modalLinks").innerHTML = (p.links || []).map((l) =>
    `<a class="btn btn--light btn--sm" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("");
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  document.getElementById("modalMedia").innerHTML = "";
}
modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

/* ---------- Kick off reveals after dynamic content is injected ---------- */
observeReveals();
