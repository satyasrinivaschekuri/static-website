# Srivi Technologies — Website

A static website for Srivi Technologies hosted via GitHub Pages.

## Architecture

```
Visitors
   │
   ▼
Squarespace DNS
   │
   ▼
GitHub CDN (GitHub Pages)
   │
   ▼
index.html + CSS
```

## Project Structure

- `index.html` — Main website page
- `styles.css` — All styling
- `CNAME` — Custom domain configuration (`www.srivitechnologies.com`)
- `public/` — Static assets (favicon, robots.txt)

## Running Locally

No build step required. Simply open `index.html` in a browser.

## Editing

- Edit directly on GitHub, or
- Use [Lovable](https://lovable.dev) to prompt changes visually
