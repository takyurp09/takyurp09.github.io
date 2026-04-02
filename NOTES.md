# Website Project Notes
**Site:** https://takyurp09.github.io  
**Repo:** https://github.com/takyurp09/takyurp09.github.io  
**Local folder:** `/Users/taky_tahmid/Library/CloudStorage/GoogleDrive-tahmid@udel.edu/Other computers/My Laptop/UDel/website_io`

---

## What's Built

| File | Purpose |
|---|---|
| `index.html` | Full single-page site (all sections) |
| `css/style.css` | All styles (academic-consultancy hybrid theme) |
| `js/main.js` | Navbar scroll-spy, skill bar animations, topic modal + charts, contact form |
| `_config.yml` | Jekyll config (theme disabled, plain HTML) |
| `profilephoto.jpg` | Profile photo used in hero section |
| `CV of Muhammad Taky Tahmid.pdf` | Linked in hero + CV section |

## Sections on the Page (in order)
1. **Navbar** — fixed top, scroll-spy, mobile hamburger
2. **Hero** — photo, name, title, bio, CTA buttons, social badges
3. **About** — bio text + animated skill bars
4. **Topics** ← interactive feature (see below)
5. **Research** — 6 project cards with status badges
6. **Consulting** — 6 service cards
7. **Teaching** — YouTube channel + topic list
8. **CV** — summary + PDF download
9. **Contact** — links panel + contact form (mailto)
10. **Footer**

## Interactive Topics Feature
9 clickable keyword chips. Each opens a modal with:
- Summary text
- 3 key fact boxes
- Chart.js visualization (bar / line / doughnut)

| Chip | Chart type |
|---|---|
| Climate Damages | Bar — damage components % GDP |
| Agricultural Productivity | Bar — temp lag effects (real ASSA data) |
| Food Security | Bar — undernourishment by region |
| Social Cost of Carbon | Bar — SCC by model (GIVE & PAGE) |
| Crop Yields | Line — yield change under warming (4 crops) |
| Machine Learning | Bar — model R² comparison |
| Causal Inference | Bar — first-stage F-statistics (real ASSA data) |
| Ocean & Coastal Policy | Doughnut — datasets by category |
| Wage Effects | Bar — temp-wage elasticity by sector |

---

## TODO / Resume Here

- [ ] Review live site at https://takyurp09.github.io and give feedback
- [ ] Fill in bachelor's degree details in CV section (`index.html` → `#cv`)
- [ ] Decide on profile photo: `profilephoto.jpg` vs `profilephoto (1).jpg`
- [ ] Add Google Scholar or UD faculty page link if available
- [ ] Consider adding a Blog section later
- [ ] Any other design tweaks or content updates

## How to Resume
1. Open terminal in `website_io/`
2. Start preview: `export PATH="$HOME/.npm-global/bin:$PATH" && live-server --port=8080`
3. Edit files, then: `git add -A && git commit -m "message" && git push origin main`
