# Alexander McQueen Portfolio

This is a personal portfolio website. It showcases projects, case studies, blog articles, and contact information using a lightweight, static site built with modern utility-first CSS.

## What this portfolio contains

- **Landing / Home:** an introduction and highlights.
- **Projects:** a gallery of your projects with links and short descriptions (`projects.html`).
- **Case studies:** in-depth project writeups (`case-study.html`).
- **Blog:** articles and tutorials (`blog.html` and `blog-article-*.html`).
- **Other pages:** `index.html`, `projects.html`, `blog.html`, and individual article pages.

## Project structure

- `index.html` — home/landing page
- `projects.html` — projects gallery
- `blog.html` & `blog-article-*.html` — blog list and article pages
- `case-study.html` — example case study layout
- `assets/` — images, fonts, and other static assets

Files are plain HTML with Tailwind CSS utilities for styling. The site is intentionally static so it can be hosted on any static host (GitHub Pages, Netlify, Vercel, etc.).

## Technologies

- HTML5
- Tailwind CSS (utility-first styling)
- Minimal JavaScript (Alpine.js or vanilla for small interactions)

## Run locally

Serve the folder with a static server and open `http://localhost:8000`:

```bash
cd folio-tailwind-1.0.0
python3 -m http.server 8000
```

Or use any static server (Node `serve`, `live-server`, etc.).

## Customize

- To add a new project: create or update an entry in `projects.html` and add any images to `assets/`.
- To add a blog post: create a new `blog-article-<slug>.html` following the existing article templates.
- To change styles: edit the Tailwind classes in the HTML files or modify the Tailwind build (if present).

## Deploy

Recommended options:

- GitHub Pages: push the repo to GitHub and enable Pages for the `master` branch (or `gh-pages`).
- Netlify / Vercel: connect the repo and set the build to serve static files from the repository root.

## Contributing & Notes

- This repository is a static portfolio—no build step is required to preview the site.
- Keep images optimized inside `assets/` to reduce page load times.
- If you later add a Tailwind build step, add a small `package.json` and a build script.

---

If you want, I can:

- Add a short contributor guide or template for new blog posts.
- Create a `package.json` with a Tailwind build/watch setup.
- Prepare a GitHub Pages workflow for automatic deploys.


