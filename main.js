/* Oppy — renders content.js into the page. You normally don't need to edit this file. */
(function () {
  var C = window.OPPY;
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var setAll = function (sel, text) { document.querySelectorAll(sel).forEach(function (el) { el.textContent = text; }); };
  var mail = "mailto:" + C.email + "?subject=" + encodeURIComponent("New project — " + C.brand);
  var socials = C.socials.filter(function (s) { return s.href; });

  // Text
  setAll("[data-brand]", C.brand);
  setAll("[data-role]", C.role);
  setAll("[data-hero1]", C.heroLine1);
  setAll("[data-hero2]", C.heroLine2);
  setAll("[data-tagline]", C.tagline);
  setAll("[data-about-dark]", C.about.headlineDark);
  setAll("[data-about-muted]", C.about.headlineMuted);
  $("#year").textContent = new Date().getFullYear();
  document.title = C.brand + " — " + C.role;

  // Hero index list
  $("#indexList").innerHTML = C.edits.map(function (e, i) {
    return '<li><button class="irow" data-i="' + i + '">' +
      '<span class="mono">' + pad(i + 1) + '</span>' +
      '<img src="' + esc(e.poster) + '" alt="" loading="lazy" width="52" height="52">' +
      '<span class="grow"><b>' + esc(e.title) + '</b><small>' + esc(e.client) + ' · ' + esc(e.format) + ' · ' + esc(e.duration) + '</small></span>' +
      '<span class="arr">↗</span></button></li>';
  }).join("");

  // Ticker (doubled for a seamless loop)
  var tick = C.disciplines.map(function (d) { return '<span class="mono">' + esc(d) + '<span aria-hidden="true">✦</span></span>'; }).join("");
  $("#ticker").innerHTML = tick + tick;

  // Stats
  $("#stats").innerHTML = C.stats.map(function (s, i) {
    return '<div class="stat rv" style="--d:' + i * 70 + 'ms"><b>' + esc(s.value) + '</b><span class="mono">' + esc(s.label) + '</span></div>';
  }).join("");

  // Work grid
  $("#count").textContent = pad(C.edits.length) + " edits";
  var play = '<svg viewBox="0 0 14 14" fill="currentColor"><path d="M3 1.5v11l9-5.5z"/></svg>';
  $("#grid").innerHTML = C.edits.map(function (e, i) {
    return '<button class="card ecard rv" style="--d:' + (i % 4) * 70 + 'ms" data-i="' + i + '" aria-label="Play ' + esc(e.title) + '">' +
      '<div class="media' + (e.format === "16:9" ? " wide" : "") + '">' +
      (e.format === "16:9" ? '<img class="bgfill" src="' + esc(e.poster) + '" alt="" aria-hidden="true" loading="lazy" decoding="async">' : '') +
      '<img class="main" src="' + esc(e.poster) + '" alt="' + esc(e.client + " — " + e.title) + '" loading="lazy" decoding="async">' +
      '<span class="pill tl">' + esc(e.format) + '</span><span class="pill bl">' + esc(e.duration) + '</span>' +
      '<span class="play">' + play + '</span></div>' +
      '<div class="ebody"><div class="etitle"><b>' + esc(e.title) + '</b><span class="arr">↗</span></div>' +
      '<span class="mono">' + esc(e.client) + '</span><p>' + esc(e.description) + '</p></div></button>';
  }).join("");

  // About
  $("#aboutText").innerHTML = C.about.paragraphs.map(function (p, i) {
    return '<p class="rv' + (i === 0 ? " first" : "") + '" style="--d:' + i * 70 + 'ms">' + esc(p) + '</p>';
  }).join("");
  $("#metaList").innerHTML = [["Based in", C.location], ["Tools", C.tool], ["Email", '<a class="u" href="mailto:' + esc(C.email) + '">' + esc(C.email) + '</a>']]
    .map(function (r, i) { return '<div><span>' + r[0] + '</span><span>' + (i === 2 ? r[1] : esc(r[1])) + '</span></div>'; }).join("");
  var prof = $("#profile");
  if (socials.length) prof.href = socials[0].href; else { prof.href = "#contact"; prof.removeAttribute("target"); }

  // Process
  $("#steps").innerHTML = C.process.map(function (s, i) {
    return '<div class="card step rv" style="--d:' + i * 70 + 'ms"><span class="mono">Step ' + pad(i + 1) + '</span><b>' + esc(s.title) + '</b><p>' + esc(s.text) + '</p></div>';
  }).join("");

  // Contact
  $("#contactBtns").innerHTML = '<a class="btn-dark" href="' + mail + '">Start a project ↗</a>' +
    socials.map(function (s) { return '<a class="btn" href="' + esc(s.href) + '" target="_blank" rel="noopener">' + esc(s.label) + ' ↗</a>'; }).join("");
  var el = $("#emailLink"); el.href = "mailto:" + C.email; el.textContent = C.email;

  // ---- Video player: the video is only created when opened and fully removed on close ----
  var modal = $("#modal"), media = $("#mMedia"), lastFocus = null;
  function open(i) {
    var e = C.edits[i]; if (!e) return;
    lastFocus = document.activeElement;
    media.className = "m-media " + (e.format === "16:9" ? "v169" : e.format === "1:1" ? "v11" : "v916");
    media.innerHTML = '<video src="' + esc(e.video) + '" poster="' + esc(e.poster) + '" controls autoplay playsinline preload="auto"></video>';
    $("#mMeta").textContent = e.client + " · " + e.format + " · " + e.duration;
    $("#mTitle").textContent = e.title;
    $("#mDesc").textContent = e.description;
    $("#mTags").innerHTML = (e.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    modal.hidden = false;
    document.documentElement.style.overflow = "hidden";
    $("#mClose").focus();
  }
  function close() {
    var v = media.querySelector("video");
    if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
    media.innerHTML = "";
    modal.hidden = true;
    document.documentElement.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-i]");
    if (b) open(+b.getAttribute("data-i"));
  });
  $("#mClose").addEventListener("click", close);
  modal.addEventListener("click", function (ev) { if (ev.target === modal) close(); });
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape" && !modal.hidden) close(); });

  // ---- Theme toggle ----
  $("#theme").addEventListener("click", function () {
    var r = document.documentElement, next = r.getAttribute("data-theme") === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---- Mobile menu ----
  var menu = $("#menu"), mb = $("#menuBtn");
  mb.addEventListener("click", function () { menu.hidden = !menu.hidden; mb.setAttribute("aria-expanded", String(!menu.hidden)); });
  menu.addEventListener("click", function (ev) { if (ev.target.tagName === "A") { menu.hidden = true; mb.setAttribute("aria-expanded", "false"); } });

  // ---- Header border (one passive scroll listener) ----
  var nav = $("#nav"), ticking = false;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 8);
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // ---- Reveal on scroll ----
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("v"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (it) { io.observe(it); });
  } else {
    items.forEach(function (it) { it.classList.add("v"); });
  }
})();
