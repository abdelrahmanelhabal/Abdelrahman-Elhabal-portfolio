# Abdelrahman Elhabal Portfolio

A modern personal portfolio website for Abdelrahman Elhabal, highlighting his work as a DevOps Engineer, competitive programmer, and problem setter.

## Overview

This portfolio showcases:

- DevOps and cloud engineering experience
- Competitive programming achievements and rankings
- Software engineering and backend projects
- Links to GitHub, LinkedIn, and contact details
- Project cards for selected work and demos

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React icons

## Project Structure

```bash
.
├── index.html
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── data/
│   ├── styles/
│   └── main.jsx
├── vite.config.js
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The production output will be generated in the `dist/` folder.

## Customization

Update the portfolio content in the files under `src/data/`:

- `src/data/site.js` — name, subtitle, navigation items
- `src/data/projects.js` — projects and technologies
- `src/data/socialLinks.js` — GitHub, LinkedIn, email, and other profiles

Notes:

- Use `"#"` for links that are not yet available.
- Add a `liveUrl` field in a project object to show a Live Demo button.

## Deployment

This project is designed to work as a static frontend. After building with `npm run build`, you can deploy the generated `dist/` files to any static hosting platform such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

This project is a personal portfolio and is intended for personal use.
