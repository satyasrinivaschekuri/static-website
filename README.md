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

## DNS Configuration (Squarespace)

The following DNS records were configured in Squarespace to point the domain to GitHub Pages:

### CNAME (for www)

| Host | Type  | Value                  | TTL     |
|------|-------|------------------------|---------|
| www  | CNAME | username.github.io     | default |

### A Records (for root domain)

| Host | Type | Value             |
|------|------|-------------------|
| @    | A    | 185.199.108.153   |
| @    | A    | 185.199.109.153   |
| @    | A    | 185.199.110.153   |
| @    | A    | 185.199.111.153   |

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
