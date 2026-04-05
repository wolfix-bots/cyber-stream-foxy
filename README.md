# 🦊 FoxyStream — React Source

> **Official development source** for FoxyStream, a cyberpunk-themed movie & TV streaming web app powered by Foxy Tech and Casper Tech.

## Tech Stack
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **TanStack Query** for data fetching
- **xcasper API** (`movieapi.xcasper.space`) for streams
- **TVMaze API** for TV show episode/season data
- **Supabase Edge Functions** for AI chat (FoxyAI)

## Features
- 🔥 Hot / Trending / Latest content rows (auto-swipe)
- 🎌 AI-curated genre rows (Anime, Action, Horror, Sci-Fi, Comedy …)
- 🎬 Movie & TV show detail pages with season/episode picker
- ▶️ Built-in video player — quality selector, CC captions, download
- 📱 Fullscreen locks to landscape on mobile
- 🤖 FoxyAI chat (opens from hamburger menu)

## Local Development
```bash
npm install
npm run dev          # http://localhost:8080
```

## Build for Production
```bash
npm run build        # outputs to dist/
```
The `dist/` folder is what gets deployed to **foxystream** repo.

## Deploy to Render
This repo is the **source only**. For Render deployment use the [foxystream](https://github.com/wolfix-bots/foxystream) repo.

---
**Maintained by Foxy Tech** · Powered by Casper Tech Kenya
