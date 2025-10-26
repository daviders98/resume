# 🌐 Personal Portfolio & Resume App

A modern, fully responsive **Next.js 15.5.5** portfolio and resume website built with **TypeScript**, **Tailwind CSS**, and **React Context API**.
Showcases experience, skills, and projects, designed with performance, accessibility, and customization in mind.

---

## 🚀 Features

- ⚡ **Next.js 15.5.5 + App Router** — fast, server-rendered pages and SEO-friendly
- 🎨 **Tailwind CSS** — sleek, responsive design with dark/light theme support
- 🌓 **ThemeContext** — toggle light/dark mode
- 🌍 **LanguageContext** — support for multiple languages
- 💌 **Contact API** — serverless endpoint to securely handle messages
- 🔐 **Token API** — secure token endpoint (e.g., for contact or auth workflows)
- 🧰 **Reusable Components** — modular, maintainable UI components
- 🖼️ **Dynamic Portfolio** — add/edit projects easily via `/data/portfolio.ts`
- 🧩 **Custom Animations** — text scrambling and animated headers
- ✅ **Fully Typed** — TypeScript throughout for type safety
- 🛠 **GitHub Actions** — automatic code formatting on `develop` & `main` branch pushes

---

## 🧱 Project Structure

```bash
.
├── app/
│   ├── api/
│   │   ├── contact/route.ts  # Contact form submission endpoint
│   │   └── token/route.ts    # Token endpoint
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
├── context/
├── data/
├── public/
├── utils/
├── lib/
├── .github/workflows/    # GitHub Action for code formatting
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Installation & Setup

Clone and install dependencies:

```bash
git clone https://github.com/daviders98/resume.git
cd resume
npm install
```

Create an `.env` file with the following values:

```env
GOOGLE_APP_EMAIL=your_email@gmail.com
GOOGLE_APP_PASSWORD=your_google_app_password
EMAIL_USER=your_email_user
FORM_SECRET=your_form_secret
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 Customization

You can update your personal info in `/data`:

| File            | Purpose                  |
| --------------- | ------------------------ |
| `hero.ts`       | Intro and tagline        |
| `about.ts`      | Bio & description        |
| `experience.ts` | Work experience          |
| `skills.ts`     | Skills & technologies    |
| `portfolio.ts`  | Project showcase         |
| `contact.ts`    | Contact form text & info |

Update images in `/public/images` (profile, logos, project screenshots, etc.).

---

## 🧠 Tech Stack

| Category   | Tech                                                         |
| ---------- | ------------------------------------------------------------ |
| Framework  | [Next.js 15.5.5](https://nextjs.org/)                        |
| Language   | [TypeScript](https://www.typescriptlang.org/)                |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)                     |
| Icons      | [Font Awesome](https://fontawesome.com/)                     |
| Forms      | Next.js API routes (`/api/contact`, `/api/token`)            |
| Animations | `ScrambleText`, `AnimateText`, custom scroll animations      |
| Deployment | [Vercel](https://vercel.com/)                                |
| CI/CD      | GitHub Actions — auto format on pushes to `develop` & `main` |

---

## 🧑‍💻 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Run production build
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

---

## 📬 Contact

- **Website:** [devgarcia.vercel.app](devgarcia.vercel.app/)

---

## 🖤 License

Open source under the [MIT License](LICENSE).

---

> Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
