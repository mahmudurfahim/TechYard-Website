# TechYard website

Fully static Next.js 14 site (App Router, `output: 'export'`). Dark, animated, no backend.

    npm install
    npm run dev       # http://localhost:3000
    npm run build     # static files in ./out

## Deploy
- **Vercel:** push to GitHub, import the repo, add `techyard.asia` under Settings > Domains. No settings needed.
- **Any static host / Netlify / GitHub Pages:** upload the `out/` folder after `npm run build`.

## Edit content
Everything lives at the top of `app/page.js`: `CONTACT`, `PRODUCTS`, `ABOUT`.
