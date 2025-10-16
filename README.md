# ItLegend Task — Next.js Project

This repository contains a take-home task for a job application at ItLegend company.  
The project is built with Next.js and uses shadcn UI, Tailwind CSS, and lucide-react. It has been deployed to Netlify.

## Tech Stack

- Next.js (App Router)
- shadcn UI
- Tailwind CSS
- lucide-react
- Deployed on Netlify

## Features

- Responsive UI components with shadcn and Tailwind
- Iconography via lucide-react
- Local quiz/pdf viewer UI for lessons
- Simple lesson list with locked/unlocked states

## Prerequisites

- Node.js 16+ (recommended Node 18+)
- npm, yarn, or pnpm
- (Optional) Netlify account for deployment

## Install (local)

Clone the repo and install dependencies:

Using npm:

```bash
git clone <REPO_URL>
cd itlegendtask
npm install
```

Using yarn:

```bash
git clone <REPO_URL>
cd itlegendtask
yarn
```

Using pnpm:

```bash
git clone <REPO_URL>
cd itlegendtask
pnpm install
```

## Run (development)

Start the dev server:

npm:

```bash
npm run dev
```

yarn:

```bash
yarn dev
```

pnpm:

```bash
pnpm dev
```

Open http://localhost:3000

## Build & Preview (production)

Build the app:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Preview the production build:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Netlify Deployment Notes

To deploy on Netlify:

1. Push this repository to your Git provider (GitHub, GitLab, Bitbucket).
2. In Netlify, create a new site and connect the repository.
3. Set the build command to:
   - `npm run build` (or `yarn build`, `pnpm build`)
4. Set the publish directory to:
   - `.next` (for standard Next.js builds)
   - or `out` if you export a static site with `next export`
5. (Optional) If you use Netlify's Next.js plugin or the Next on Netlify adapter, follow their docs for optimal configuration.

## Share this project

- Live demo (Netlify): <https://itlegendtask.netlify.app/>

## Notes

- If PDFs do not download automatically, browser behavior depends on response headers; adjust server headers if needed.
- No environment variables are required for basic local usage. Add any runtime configuration in .env if needed.

## License / Contact

- This project is a coding task for ItLegend.
- For questions or to share feedback, add your contact info here.
