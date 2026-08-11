/* ============================================================
   JOY MWERU GITAU — SITE SCRIPT
   Sections: 1. Mobile nav  2. Hero role-typer  3. Portfolio filter
             4. Contact form (Formspree)  5. Scroll reveal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. MOBILE NAV TOGGLE ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  /* ---------- 2. HERO ROLE TYPER ----------
     EDIT HERE: change the ROLES array to update what cycles in the
     hero terminal line on the home page. */
  const typerEl = document.querySelector('[data-role-typer]');
  if (typerEl) {
    const ROLES = ['data_scientist', 'insight_hunter', 'aspiring_developer', 'builder_of_things'];
    let roleIndex = 0, charIndex = 0, deleting = false;

    const textSpan = document.createElement('span');
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    typerEl.appendChild(textSpan);
    typerEl.appendChild(cursor);

    function tick() {
      const full = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        textSpan.textContent = full.slice(0, charIndex);
        if (charIndex === full.length) { deleting = true; setTimeout(tick, 1400); return; }
      } else {
        charIndex--;
        textSpan.textContent = full.slice(0, charIndex);
        if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % ROLES.length; }
      }
      setTimeout(tick, deleting ? 45 : 85);
    }
    tick();
  }

  /* ---------- 3. PORTFOLIO FILTER ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        cards.forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
        });
        document.querySelectorAll('.section-block').forEach(block => {
          const visible = block.querySelectorAll('[data-category]:not([style*="display: none"])').length;
          block.style.display = (cat === 'all' || visible > 0) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- 4. CONTACT FORM ----------
     EDIT HERE: this form posts to Formspree so submissions land
     straight in your email inbox with no backend needed.
     1. Go to https://formspree.io and create a free account.
     2. Create a new form, copy the endpoint it gives you
        (looks like https://formspree.io/f/xxxxxxxx).
     3. Paste that URL into the `action` attribute of the
        <form id="contact-form"> tag in contact.html.
     That's it — this script below does not need to change. */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const endpoint = form.getAttribute('action');
      const placeholderNotSet = !endpoint || endpoint.includes('YOUR_FORM_ID');

      if (placeholderNotSet) {
        status.textContent = "Almost there — the form just needs a Formspree endpoint. See the comment at the top of js/script.js for the 2-minute setup.";
        status.className = 'form-status error show';
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          status.textContent = "Message sent! I'll get back to you as soon as possible. 🎉";
          status.className = 'form-status success show';
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        status.textContent = "Hmm, something went wrong sending that. Mind trying again, or emailing me directly?";
        status.className = 'form-status error show';
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  /* ---------- 5. SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }
});
