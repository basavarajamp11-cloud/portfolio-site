# Personal Portfolio Website

A clean, modern, and fully responsive personal developer portfolio website built with semantic HTML5, modern CSS3, and vanilla JavaScript.

## 🚀 Features

- **Modern Aesthetic**: Dark mode by default with seamless Dark/Light theme switching (persisted via `localStorage`).
- **Responsive Layout**: Designed mobile-first, adapting gracefully from small mobile screens to large desktop monitors.
- **Interactive UI**:
  - Sticky glassmorphic navigation header with dynamic scroll spy highlighting.
  - Responsive mobile drawer navigation menu.
  - Interactive skill category cards with badge pills.
  - Featured project showcases with preview cards, tech tags, and direct repository links.
  - Career journey timeline with milestone markers.
  - Interactive contact form with user feedback handling.
- **Fast & Accessible**: Clean semantic markup, zero external framework dependencies, and smooth transitions.

## 📁 Project Structure

```
portfolio-site/
├── index.html     # Semantic structure & content
├── style.css      # Custom styling, animations & theme definitions
├── script.js      # Theme toggle, mobile menu & interactive UX
└── README.md      # Project documentation
```

## 🛠️ Getting Started

To view the website locally, open `index.html` directly in any modern web browser or run a lightweight HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve
```

Then visit `http://localhost:8000` in your browser.

## 📬 Contact Form Setup (Web3Forms)

The contact form is configured to send emails using [Web3Forms](https://web3forms.com).

1. Go to [https://web3forms.com](https://web3forms.com) and enter your email address to get your free access key.
2. Open `index.html` and replace `YOUR_ACCESS_KEY_HERE` with your access key:
   ```html
   <input type="hidden" name="access_key" id="web3FormsAccessKey" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Form submissions will now be emailed directly to your inbox with spam protection enabled.

## 📄 License

MIT License. Feel free to use this template as inspiration for your own portfolio!

