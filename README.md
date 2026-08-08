# career-hierarchy

This repository now contains a working MVP for "CareerSignal": a mobile-first TypeScript React app that lets users enter their career information and receive a personalised career assessment using a local dataset.

Key features added in this commit:

- Mobile-first landing page with headline, subheadline and CTA
- Multi-step career assessment form (4 steps)
- Deterministic, local analysis using a small TypeScript dataset (src/data/careerData.ts)
- Polished results dashboard with Career Signal score, salary position, best next move, options, skills gap and an actionable recommendation
- Simple, responsive styling and accessible components

How to run (locally)

1. Install dependencies: npm install
2. Run dev server: npm run dev
3. Open http://localhost:5173

Notes / limitations

- All salary estimates are indicative and local to the MVP dataset. They are clearly labelled as "Indicative market estimates" in the UI.
- No authentication, external APIs, scraping or payments have been added.
- Currency conversion is not implemented — the MVP assumes entered currency matches displayed ranges.

Next steps you can ask me to do

- Improve the matching algorithm for titles (fuzzy matching)
- Add a richer dataset (country-specific ranges) and a switch to replace local data with a server API
- Add charts / visualisations for the salary trajectory
- Wire up analytics or feedback capture

