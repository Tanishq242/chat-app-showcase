# Chat App Showcase Website

A responsive React website that explains the **Chat App** (a JavaFX end-to-end encrypted desktop messenger): its features, screens, step-by-step flows, security design, and a live RSA encryption demo. It has a dark/light theme toggle and smooth animations.

## Tech used

- React 18 + Vite 5
- Framer Motion (animations)
- lucide-react (icons)
- Plain CSS with theme variables (no CSS framework)
- Web Crypto API (real RSA-OAEP 2048-bit demo)

## Run it on your computer

1. Install **Node.js 18 or newer** from https://nodejs.org (check with `node -v`).
2. Open a terminal in this folder (`chat-app-showcase`).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open the address it prints (usually http://localhost:5173).

Other commands:

```bash
npm run build     # creates the production site in /dist
npm run preview   # serves the /dist build locally
```

## Make it yours (do this before the interview)

1. **Your details:** open `src/data/content.js` and edit the `ME` block (name, role, bio, GitHub, repo, LinkedIn, email).
2. **Screenshots:** copy your app screenshots into `public/screenshots/` using these names:
   `dashboard.png`, `signup.png`, `otp.png`, `login.png`, `forgot-password.png`, `settings.png`.
   Until a file exists, a styled mockup is shown instead.
3. **Content:** features, flows, tables and tech chips are all in `src/data/content.js`.

## Deploy for free (so HR can open a link)

- **Vercel:** push the folder to GitHub, import it at https://vercel.com, and keep the defaults (Framework: Vite).
- **Netlify:** build command `npm run build`, publish directory `dist`.

## Project structure

```
chat-app-showcase/
├── index.html                 # page shell, fonts, early theme script
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── screenshots/           # put your app screenshots here
│       └── README.txt
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # page layout + scroll progress bar
    ├── index.css              # theme variables, layout, responsive rules
    ├── data/
    │   └── content.js         # ALL text and data (edit this)
    └── components/
        ├── Navbar.jsx         # sticky nav, theme toggle, mobile menu
        ├── Hero.jsx           # headline, CTA, stats
        ├── Features.jsx       # feature cards
        ├── Screens.jsx        # tabbed screens viewer
        ├── ScreenFrame.jsx    # screenshot with mockup fallback
        ├── Mockups.jsx        # styled stand-in screens
        ├── Flows.jsx          # animated step-by-step flows
        ├── Security.jsx       # crypto and database function tables
        ├── EncryptionDemo.jsx # live RSA encrypt/decrypt demo
        ├── TechStack.jsx      # technology chips
        ├── About.jsx          # developer card and links
        ├── Footer.jsx
        └── SectionTitle.jsx   # shared heading + scroll-reveal helper
```

## Responsive behaviour

Layouts adapt at 960px, 720px and 480px: the nav collapses to a menu button, grids stack, tables scroll sideways, and the encryption pipeline turns vertical on phones.
