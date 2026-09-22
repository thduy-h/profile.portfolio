# Thanh Duy Huynh — AI & Computer Vision Portfolio

A customized personal portfolio for Thanh Duy Huynh, focused on computer vision, applied AI, video understanding, Edge AI, research, and deployable intelligent systems.

Built with Next.js 16, React 19, Tailwind CSS 4, and the existing motion/visual system from the upstream `developer-portfolio` template.

## Run locally

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
pnpm lint
pnpm build
pnpm start
```

## Portfolio content

Primary content lives in `utils/data/`:

- `personal-data.js` — identity, profile summary, and verified contact links
- `experience.js` — professional experience
- `skills.js` — grouped AI/CV skills
- `publications.js` — publications and research
- `projects-data.js` — selected AI projects
- `educations.js` — education and coursework
- `awards.js` — awards and certifications
- `leadership.js` — leadership and activities

Homepage components live under `app/components/homepage/`.

## Environment variables

No environment variables are required to build or run the current portfolio. Google Tag Manager is optional:

```env
NEXT_PUBLIC_GTM=GTM-XXXXXXX
```

The contact section includes a form that opens a prefilled email draft in the visitor's mail app, plus direct `mailto:` and `tel:` links. It does not require delivery secrets. The retained upstream contact API route is inactive unless explicitly integrated and configured.

## CV and profile image

The CV is available at `public/Thanh-Duy-Huynh-CV.pdf` and linked from the hero. The supplied portrait is stored as `public/thanh-duy-huynh.webp`, and the supplied logo is used for the favicon.

## Upstream attribution

This project is customized from [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio). The upstream project history and attribution remain intact.
