# Alain Kimbu — Portfolio & Resume

This repository contains the source code for the professional portfolio, resume, and CV of Alain Kimbu Nikang: App Developer, Computer Science Teacher, and Graphics Designer.

## 🚀 Live Site
**[alainkimbu.netlify.app](https://alainkimbu.netlify.app/)**

## 📂 Project Structure

The project is structured into modular sections to keep content organized and easily maintainable.

- `/` (Root): The main landing page (`index.html`) serving as an introduction and gateway to the rest of the site.
- `/cv/`: Contains the comprehensive, print-ready Curriculum Vitae (`index.html`).
- `/portfolio/`: Highlights projects, case studies (`index.html`), and a dedicated page for certifications and achievements (`achievements.html`).
- `/resume/`: Features tailored resumes for specific career paths:
  - App/Mobile Developer (`resume-app-developer.html`)
  - Web Developer (`resume-web-developer.html`)
  - Computer Science Teacher (`resume-teacher.html`)
  - Main resume hub (`index.html`)
- `/assets/`: All static assets including fonts, images, icons, and third-party vendor files (e.g., FontAwesome).
- `/css/`: Core stylesheets. `premium.css` contains the bespoke design system, tokens, and responsive layouts.

## 🛠️ Technology Stack
- **HTML5**: Semantic and accessible markup.
- **CSS3 (Vanilla)**: Custom CSS implementation prioritizing performance, modern CSS variables (custom properties), CSS grid, and flexbox. No heavy CSS frameworks were used to ensure maximum control and speed.
- **JavaScript (Vanilla)**: Lightweight scripts for UI interactions (modals, scroll indicators, loaders) without the overhead of heavy JS libraries.

## 📈 SEO & Performance
The site has been heavily optimized for search engines and social sharing:
- **Canonical URLs** implemented across all pages to prevent duplicate content issues.
- **Open Graph & Twitter Cards** for rich, branded previews when links are shared on social media (LinkedIn, X/Twitter, Facebook).
- **JSON-LD Schema Markup** injected into the homepage to feed structured "Person" data directly to Google's Knowledge Graph.
- Fully responsive design prioritizing mobile-first experiences.

## 💻 Running Locally

To view the project locally, you can use any standard local web server. If you have Node.js installed, you can use `npx`:

```bash
# Navigate to the project directory
cd aprilman-documents

# Serve the directory
npx serve .
```
Then open `http://localhost:3000` in your browser.

## 📝 License
Copyright © 2026 Alain Kimbu. All rights reserved.
