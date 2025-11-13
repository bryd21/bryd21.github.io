// Year stamp
document.getElementById('year')?.append(new Date().getFullYear());

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu?.classList.toggle('open', !open);
  document.body.classList.toggle('lock', !open);
});
// Close menu when a link is clicked (mobile)
menu?.addEventListener('click', (e) => {
  const t = e.target;
  if (t.tagName === 'A' && menu.classList.contains('open')) {
    toggle.click();
  }
});

// Highlight active nav link
const path = location.pathname.replace(/\/+$/, '') || '/';
document.querySelectorAll('nav a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href) return;
  const hrefPath = href.startsWith('http') ? (new URL(href)).pathname : href;
  const normalized = hrefPath.replace(/\/+$/, '') || '/';
  if (normalized === path) a.setAttribute('aria-current', 'page');
});

// Reveal-on-scroll animations
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
