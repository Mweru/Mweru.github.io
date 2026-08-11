# Joy Mweru Gitau — Portfolio Site

A hand-built (no framework, no template) portfolio site: Home, About, Portfolio
and Contact pages, ready for GitHub Pages.

## File map

```
index.html         → Home / landing page
about.html          → About page
portfolio.html       → Portfolio (data science / web-UX / graphic design)
contact.html         → Contact page + form
css/style.css       → ALL styling + design tokens (colours, fonts, spacing)
js/script.js        → Nav toggle, hero typer, portfolio filter, contact form
assets/cv/          → Your downloadable CV PDF lives here
assets/img/         → Put your photo + design gallery images here
```

## The 5-minute must-dos before you publish

1. **Your photo** — drop a square photo into `assets/img/` (e.g. `portrait.jpg`),
   then in `index.html` find the `.hero-portrait` placeholder div and replace it
   with `<img src="assets/img/portrait.jpg" alt="Joy Mweru Gitau">` (the comment
   right above it shows exactly what to paste).

2. **Your CV** — your current CV is already in `assets/cv/Joy_Mweru_Gitau_CV.pdf`
   and wired up to the "Download my CV" button on the About page. When you have
   a newer version, just replace that file (keep the same filename) and the
   button keeps working automatically.

3. **LinkedIn & GitHub links** — search each HTML file for `YOUR-LINKEDIN` and
   `YOUR-GITHUB` and swap in your real usernames. These appear in the footer on
   every page and on the Contact page.

4. **Contact form → your inbox** — the form is wired to use
   [Formspree](https://formspree.io) (free, no backend needed):
   - Create a free Formspree account and a new form.
   - Copy the endpoint it gives you (`https://formspree.io/f/xxxxxxxx`).
   - In `contact.html`, find `<form class="contact-form" id="contact-form"
     action="https://formspree.io/f/YOUR_FORM_ID" ...>` and replace
     `YOUR_FORM_ID` with your real one.
   - That's it — submissions will land in your email, and visitors see a
     "message sent" confirmation right on the page.

5. **Project GitHub links** — in `portfolio.html`, each project card has a
   `<div class="links"><a href="#" ...>GitHub repo ↗</a></div>` — replace the
   `#` with the real repo URL for each project.

6. **Graphic design gallery** — in `portfolio.html`, the "Graphic design" section
   has six placeholder tiles. Drop your images into `assets/img/`, then replace
   each placeholder `<div class="gallery-item">...</div>` with:
   ```html
   <div class="gallery-item" data-category="design">
     <img src="assets/img/your-file.jpg" alt="short description">
   </div>
   ```

## Ongoing edits — where things live

- **Colours / fonts / spacing** — all defined once at the top of `css/style.css`
  under `:root { ... }`. Change a hex value there and it updates the whole site.
- **Nav menu items** — the `<nav><ul class="nav-links">` block, repeated at the
  top of every HTML page (About, Portfolio, Contact stay simple to add: copy an
  `<li><a href="...">` line and add the new page's HTML file).
- **The hero role-typer** ("$ whoami → data_scientist…") — edit the `ROLES`
  array at the top of `js/script.js`.
- **Certifications** — plain list of `.cert-item` blocks near the bottom of
  `index.html`. Copy one to add another.
- **Adding a new project** — copy a `.project-card` block in `portfolio.html`
  (data science) or a `.exp-item` block (web/UX), and give it the right
  `data-category="data" | "web" | "design"` so the filter buttons work.

## Publishing to GitHub Pages

1. Create a new GitHub repository — for a personal site, name it exactly
   `your-username.github.io` (e.g. `joymweru.github.io`).
2. Push all these files to the repo's `main` branch (the root, not a
   sub-folder — `index.html` should sit at the top level).
3. In the repo, go to **Settings → Pages**, set the source branch to `main`
   and folder to `/ (root)`, and save.
4. Your site goes live at `https://your-username.github.io` within a minute
   or two.

If you'd rather use a project repo (not `username.github.io`), the process is
the same — your URL will just be `https://your-username.github.io/repo-name/`.

## A note on the design

Palette pulls from your blush/chocolate/sand/slate brief. Display type is
Fraunces (the warm serif in headlines), body is Sora, and JetBrains Mono shows
up in labels, the hero "$ whoami" line and eyebrows — a small nod to the dev
side of your journey sitting next to the softer, editorial data-storyteller
side. That contrast is the whole idea: this isn't a generic dev portfolio or a
generic design portfolio, it's built to hold both.
