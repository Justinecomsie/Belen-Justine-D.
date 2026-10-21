/* =====================================================================
   1) EDIT YOUR INFORMATION HERE — this is the only part you must change
   ===================================================================== */
const PORTFOLIO = {
  name: "Justine",                          // first name shown in "Hi, I'm ___"
  course: "BS Computer Science",            // logo text (top-left)
  role: "I'm inspired by becoming a Web Developer",           // small tag above the heading
  headline: "I build things for the web.",
  intro: "Aspiring web developer committed to continuous learning, mastering modern technologies, and building responsive, user-centered digital experiences.",
  photo: "photo/me.png",           // transparent PNG of you works best
  cv: "photo/ostine.png",              // link to your CV (PDF or Google Drive)

  // Navigation. Leave blog: "" to hide it, or use a URL like "https://myblog.com"
  blog: "",
  hireLabel: "Hire Me",

  // Technology icons in the hero (Devicon class names: https://devicon.dev)
  heroTech: ["devicon-html5-plain colored", "devicon-css3-plain colored", "devicon-javascript-plain colored"
          ],

  about: {
    title: "I'm passionate about learning digital solutions",
    text: ["Currently 3rd year college studenttaking BS Computer Science at Pambayang Dalubhasaan ng Marilao (PDM),  I'm passionate about learning digital solutions and web development. I have a strong foundation in HTML, CSS, and JavaScript, and I'm always eager to expand my skills and knowledge in the field of web development.",],
    button: "Learn More About Me"
  },

  // icon options: calendar, code, smile, trophy
  stats: [
    { icon: "calendar", value: "09-28-2003",   label: "Birthday" },
    { icon: "code",     value: "HTML, CSS, JavaScript",  label: "Technical Skills" },
    { icon: "smile",    value: "Jogging, Reading",  label: "Hobbies" },
    { icon: "trophy",   value: "Freedom", label: "Goal Achievement" }
  ],

  // level = percent (0-100). icon = Devicon class
  skills: [
    { name: "HTML",       level: 95, icon: "devicon-html5-plain colored" },
    { name: "CSS",        level: 90, icon: "devicon-css3-plain colored" },
    { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
    
  ],

  // Add / remove projects freely. Cards slide horizontally, 3 per page on desktop.
  projects: [
    { title: "Ralph Lauren Collection Website", description: "A multi-page fashion website for the Ralph Lauren collection", image: "Activities/Belen_BSCS31A/background.jpg", link: "Activities/Belen_BSCS31A/LandingPage.html" },
    { title: "Event Handling Profile Card", description: "A profile card that reacts to the mouse. Hover, click, double click, and press and hold change the status message, and the photo grows on hover.", image: "photo/card.png", link: "Activities/Belen_Final_Act1/index.html" },
    { title: "Interactive Student Profile", description: "A student profile page with interactive controls and tables", image: "photo/profile.png", link: "Activities/Belen_Final_Act3/Act3.html" }
  ],
  projectLinkLabel: "View Project",

  cta: {
    title: "Have a project in mind?",
    text: "I'm always open to discussing new projects and opportunities. Let's create something amazing together!",
    button: "Get In Touch"
  },

  testimonial: {
    quote: "Hi, Sir John Ralp Agoy Agoy, I would like to express my sincere gratitude for your invaluable guidance and support throughout my journey in web development. Your mentorship has been instrumental in shaping my skills and knowledge, and I am truly grateful for the time and effort you have invested in helping me grow as a developer.",
    author: "Justine Belen",
    position: "Student, BS Computer Science",
    avatar: "assets/sarah.jpg"
  },

  // icon = Devicon class
  social: [
    { label: "GitHub",    url: "https://github.com/Justinecomsie",    icon: "devicon-github-original" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/justine-belen-a62762350/?isSelfProfile=true",  icon: "devicon-linkedin-plain colored" },
  ],
  email: "justinedbelen@gmail.com",
  phone: "09632502942",

  footerLeft: "© 2026 Justinedb Developer. All rights reserved.",
  footerRight: "austinvrg"
};

/* =====================================================================
   2) APP LOGIC — no need to edit below unless you're customizing
   ===================================================================== */
const ICONS = {
  code:     '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  smile:    '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  trophy:   '<path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4M6 3h12v6a6 6 0 0 1-12 0zM12 15v4M8 21h8"/>',
  arrow:    '<path d="M7 17 17 7M8 7h9v9"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  phone:    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'
};
const icon = (n) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

$(function () {
  const P = PORTFOLIO;
  const esc = (s) => $("<div>").text(s ?? "").html();
  const NAV = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
               ["Reflections", "#reflections"],
               ...(P.blog ? [["Blog", P.blog]] : []), ["Contact", "#contact"]];

  /* ---- Header ---- */
  document.title = `${P.name} | Web Developer`;
  $('meta[name="description"]').attr("content", P.intro);
  $("#logo").html(`${icon("code")}<span>${esc(P.brand)}</span>`);
  $("#nav").html(NAV.map(([t, h]) => `<a href="${esc(h)}">${esc(t)}</a>`).join(""));
  $("#hireBtn").html(`${esc(P.hireLabel)} ${icon("arrow")}`);

  /* ---- Mouse meteor trail ---- */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  let lastMeteorAt = 0;
  let lastPointerX = null;
  let lastPointerY = null;
  if (finePointer.matches && !reducedMotion.matches) {
    document.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      const now = performance.now();
      const dx = lastPointerX === null ? 0 : event.clientX - lastPointerX;
      const dy = lastPointerY === null ? 0 : event.clientY - lastPointerY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      if (now - lastMeteorAt < 55 || Math.hypot(dx, dy) < 8) return;
      lastMeteorAt = now;

      const meteor = document.createElement("span");
      meteor.className = "cursor-meteor";
      meteor.setAttribute("aria-hidden", "true");
      meteor.style.left = `${event.clientX}px`;
      meteor.style.top = `${event.clientY}px`;
      meteor.style.setProperty("--meteor-angle", `${Math.atan2(dy, dx) * 180 / Math.PI}deg`);
      document.body.append(meteor);

      const meteors = document.querySelectorAll(".cursor-meteor");
      if (meteors.length > 18) meteors[0].remove();
      meteor.addEventListener("animationend", () => meteor.remove(), { once: true });
    });
  }

  /* ---- Activity reflections toggle ---- */
  $("#reflectionToggle").on("click", function () {
    const isExpanded = $(this).attr("aria-expanded") === "true";
    $("#reflectionContent").prop("hidden", isExpanded);
    $(this)
      .attr("aria-expanded", String(!isExpanded))
      .text(isExpanded ? "Show Reflections" : "Hide Reflections");
  });

  /* ---- Theme toggle ---- */
  $("#themeToggle").on("click", function () {
    const isLight = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    $(this)
      .text(isLight ? "Dark mode" : "Light mode")
      .attr("aria-label", `Switch to ${isLight ? "dark" : "light"} mode`);
  });

  /* ---- Hero ---- */
  $("#heroTag").text(P.role);
  $("#heroTitle").html(`Hi, I’m <span class="accent">${esc(P.name)}</span><br>${esc(P.headline)}`);
  $("#heroIntro").text(P.intro);
  $("#workBtn").html(`View My Work ${icon("arrow")}`);
  $("#cvBtn").attr("href", P.cv).html(`Download CV ${icon("download")}`);
  $("#heroTech").html(P.heroTech.map((c) => `<li><i class="${esc(c)}"></i></li>`).join(""));
  $("#heroPhoto").attr({ src: P.photo, alt: `Portrait of ${P.name}` }).on("error", function () { $(this).hide(); });

  /* ---- About + stats ---- */
  $("#aboutTitle").text(P.about.title);
  $("#aboutText").html(P.about.text.map((t) => `<p>${esc(t)}</p>`).join(""));
  $("#aboutBtn").html(`${esc(P.about.button)} ${icon("arrow")}`);
  $("#aboutToggle").on("click", function () {
    const isExpanded = $(this).attr("aria-expanded") === "true";
    $("#aboutContent").prop("hidden", isExpanded);
    $(this)
      .attr("aria-expanded", String(!isExpanded))
      .text(isExpanded ? "Show About Me" : "Hide About Me");
  });
  $("#stats").html(P.stats.map((s, i) => `
    <li><span class="stat-ico${i % 2 ? " alt" : ""}">${icon(s.icon)}</span>
        <div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div></li>`).join(""));

  /* ---- Skills (bars animate when scrolled into view) ---- */
  $("#skillList").html(P.skills.map((s) => `
    <li><div class="skill-head"><i class="${esc(s.icon)}"></i>${esc(s.name)}<em>${+s.level}%</em></div>
        <div class="bar"><span data-w="${+s.level}"></span></div></li>`).join(""));
  new IntersectionObserver((en, ob) => {
    en.forEach((e) => { if (e.isIntersecting) { $(e.target).find(".bar span").each(function () { this.style.width = $(this).data("w") + "%"; }); ob.unobserve(e.target); } });
  }, { threshold: 0.3 }).observe(document.getElementById("skillList"));

  /* ---- Projects carousel ---- */
  $("#projectTrack").html(P.projects.map((p, i) => `
    <article class="card">
      <div class="thumb"><img src="${esc(p.image)}" alt="Preview of ${esc(p.title)}" loading="lazy"><span class="num">${String(i + 1).padStart(2, "0")}</span></div>
      <div class="card-body"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
        <a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(P.projectLinkLabel)} ${icon("arrow")}</a></div>
    </article>`).join(""));

  const track = document.getElementById("projectTrack");
  function buildDots() {
    const first = track.querySelector(".card");
    if (!first) return;
    const perPage = Math.max(1, Math.round(track.clientWidth / (first.offsetWidth + 24)));
    const pages = Math.ceil(P.projects.length / perPage);
    $("#projectDots").html(pages > 1 ? Array.from({ length: pages }, (_, i) =>
      `<button type="button" role="tab" aria-label="Page ${i + 1}" aria-selected="${i === 0}" data-i="${i}"></button>`).join("") : "");
    track.dataset.pages = pages;
  }
  buildDots();
  $(window).on("resize", buildDots);
  $("#projectDots").on("click", "button", function () {
    track.scrollTo({ left: track.clientWidth * $(this).data("i"), behavior: "smooth" });
  });
  $(track).on("scroll", function () {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    $("#projectDots button").attr("aria-selected", "false").eq(i).attr("aria-selected", "true");
  });

  /* ---- Contact ---- */
  $("#ctaTitle").text(P.cta.title);
  $("#ctaText").text(P.cta.text);
  $("#ctaBtn").attr("href", `mailto:${P.email}`).html(`${esc(P.cta.button)} ${icon("arrow")}`);
  const t = P.testimonial;
  $("#testimonial").html(`
    <div class="mark" aria-hidden="true">“</div>
    <blockquote>${esc(t.quote)}</blockquote>
    <figcaption><img src="${esc(t.avatar)}" alt="" onerror="this.outerHTML='<span class=avatar></span>'">
      <div><b>${esc(t.author)}</b><span>${esc(t.position)}</span></div></figcaption>`);
  $("#socialList").html(P.social.map((s) =>
    `<li><a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}"><i class="${esc(s.icon)}"></i></a></li>`).join(""));
  $("#contactLines").html(
    `<li>${icon("mail")}<a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>` +
    `<li>${icon("phone")}<a href="tel:${esc(P.phone.replace(/[^+\d]/g, ""))}">${esc(P.phone)}</a></li>`);
  $("#footLeft").text(P.footerLeft);
  $("#footRight").text(P.footerRight);

  /* ---- Mobile nav ---- */
  $("#navToggle").on("click", function () {
    $(this).attr("aria-expanded", $("#nav").toggleClass("open").hasClass("open"));
  });
  $("#nav").on("click", "a", () => $("#nav").removeClass("open"));

  /* ---- Active nav link on scroll ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) $("#nav a").removeClass("active").filter(`[href="#${en.target.id}"]`).addClass("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $("main section").each(function () { io.observe(this); });
});
