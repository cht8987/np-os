/* ═══════════ NP-OS — scroll & motion ═══════════ */

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  }),
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Nav border on scroll
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 24), { passive: true });

// Stat counters
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const el = e.target, target = +el.dataset.count, dur = 1400, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.6 });
document.querySelectorAll(".stat-num").forEach((el) => countIO.observe(el));

// Typing demo → cards bloom (sentence follows the active language)
const demo = document.querySelector(".demo");
const typed = document.getElementById("typed");
let demoPlayed = false;

const demoIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting || demoPlayed) return;
    demoPlayed = true;
    window.npDemoPlayed = true;
    demoIO.unobserve(e.target);
    const sentence = (window.NP_SENTENCES || {})[window.npLang || "zh"] || "";
    const delay = sentence.length > 40 ? 32 : 55; // EN sentence is longer — type faster
    let i = 0;
    const type = () => {
      if (i <= sentence.length) {
        typed.textContent = sentence.slice(0, i++);
        setTimeout(type, delay);
      } else {
        setTimeout(() => demo.classList.add("cards-in"), 350);
      }
    };
    setTimeout(type, 400);
  });
}, { threshold: 0.4 });
if (demo) demoIO.observe(demo);

// Subtle parallax on hero orbs
const orbs = document.querySelectorAll(".orb");
addEventListener("scroll", () => {
  const y = scrollY;
  if (y > innerHeight * 1.5) return;
  orbs.forEach((o, idx) => { o.style.translate = `0 ${y * (0.08 + idx * 0.05)}px`; });
}, { passive: true });
