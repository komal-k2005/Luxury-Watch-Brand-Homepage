# LUXTIME — Luxury Watch Brand Homepage

A fully responsive luxury watch brand homepage inspired by [Richard Mille](https://www.richardmille.com/). Built with HTML5, CSS3, and Vanilla JavaScript for a web developer intern assignment.

## Live Demo

> Add your deployed link here (Vercel / Netlify / GitHub Pages)

## Project Overview

**LUXTIME** is a single-page website showcasing a fictional luxury Swiss watch brand. It includes smooth animations, a video hero section, dark/light theme support, and a mobile-friendly layout.

## Tech Stack

| Technology | Usage |
|------------|--------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, CSS variables for theming |
| Vanilla JavaScript | Interactivity and logic |
| GSAP + ScrollTrigger | Scroll animations and transitions |
| Font Awesome | Icons (search, menu, social, theme toggle) |

No website builders or pre-made templates were used.

## Features

### Core Sections

- **Header** — Sticky transparent header with logo, navigation, search icon, theme toggle, and mobile hamburger menu
- **Hero Banner** — Fullscreen video background with headline and CTA button
- **Featured Collection** — 4 watch cards with hover animations
- **Brand Story** — Large image, brand description, and animated statistics
- **Featured Partners** — Athlete ambassadors and brand partners with hover effects
- **Watch Showcase** — Product slider with details, navigation arrows, and dots
- **Latest News** — Blog cards with date and title
- **Footer** — Company links, collections, social media, and newsletter form

### Animations

- Fade-in and slide-up effects on scroll (GSAP)
- Parallax scrolling on brand story image
- Hover effects on cards and partner images
- Smooth scrolling between sections
- Page load and navigation transition overlay
- Hero video zoom on scroll
- Animated stat counters (25+, 150+, 40+)

### Bonus Features

- Dark / Light theme toggle (saved in `localStorage`)
- GSAP scroll animations
- Video background hero
- Page transition animations on load and nav click

### Performance & SEO

- Lazy loading on images (`loading="lazy"`)
- Semantic HTML (`header`, `nav`, `section`, `article`, `footer`)
- Meta description and keywords for SEO
- Responsive images from external CDNs

## Responsive Breakpoints

| Device | Width |
|--------|--------|
| Mobile | 320px+ |
| Tablet | 768px+ |
| Laptop | 1024px+ |
| Desktop | 1440px+ |

## Project Structure

```
Luxury-Watch-Brand-Homepage/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles and theme variables
│   └── responsive.css  # Media queries for all screen sizes
├── js/
│   └── main.js         # Theme toggle, GSAP, slider, menu, transitions
├── videos/
│   └── luxury-watch.mp4  # Hero background video
└── README.md
```

## Getting Started

### Option 1 — Open directly

Double-click `index.html` to open it in your browser.

### Option 2 — Local server (recommended)

```bash
# Using npx (Node.js required)
npx serve .

# Or using Python
python -m http.server 8000
```

Then visit `http://localhost:8000` (or the port shown in your terminal).

## Deployment

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings (static site)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Web Developer Intern Assignment — 2026

## License

This project was created for educational and assignment purposes.
