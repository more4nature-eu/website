# Requirements

This project requires Node.js v22.2.0 (as specified in the `.nvmrc` file) and
uses [pnpm](https://pnpm.io/) as the package manager.

# Environment Variables

The newsletter form posts directly to Mailchimp's hosted signup endpoint (see the
[Newsletter signup](#newsletter-signup) section), so these must be set at build time. Create a `.env` file in the
root directory and define:

```
NEXT_PUBLIC_MAILCHIMP_FORM_ACTION=https://<dc>.list-manage.com/subscribe/post?u=<u>&id=<list-id>
NEXT_PUBLIC_MAILCHIMP_HONEYPOT_NAME=b_<u>_<list-id>
```

Both values come from Mailchimp: **Audience → Signup forms → Embedded forms**. Copy the `<form action="...">` URL
for the first, and the hidden bot-trap input's `name` (starts with `b_`) for the second.

# Getting Started

To run the project for the first time:

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Set up your environment variables by creating a `.env` file in the root directory (see the Environment Variables
   section above).
3. Start the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Libraries

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [MapLibreGL](https://maplibre.org/projects/maplibre-gl-js/)
- [ReactMapGL](https://visgl.github.io/react-map-gl/)
- [ReactQuery](https://tanstack.com/query/latest)
- [Jotai](https://jotai.org/)
- [Recharts](https://recharts.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [React Hook Form](https://react-hook-form.com/)
- [RadixUI](https://www.radix-ui.com/)

# Data

Case studies are hardcoded as TypeScript files and located in the `src/data` folder.

News and events were previously hardcoded in this folder as well, but are no longer used in the application—they have
been replaced by the [official blog](https://blog.more4nature.eu/).

## Testing

This project uses [Jest](https://jestjs.io/) for unit and integration testing. Test files are located in the `tests/`
directory and follow the naming convention `*.test.ts`. To run the tests locally, use:

```bash
pnpm test
```

### Continuous Integration

A GitHub Actions pipeline automatically runs on every push and pull request. The workflow installs dependencies, builds
the project, and runs all tests using Node.js (version specified in `.nvmrc`). You can find the workflow configuration
in `.github/workflows/test.yml`.

## Code Quality and Consistency

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to ensure code quality and
consistency across the codebase.

- **ESLint** is used to catch common bugs and enforce coding standards. You can run lint checks with:
  ```bash
  pnpm lint
  ```
- **Prettier** is used to automatically format code according to a consistent style. It is typically run automatically
  by many editors, but you can also run it manually if configured in your project scripts.

It is recommended to run linting and formatting before committing code to maintain a clean and consistent codebase.

## Newsletter signup

There is no backend: `pnpm build` produces a fully static site (`output: 'export'` in `next.config.js`), so the
newsletter form submits directly to Mailchimp's hosted signup endpoint from the browser (see Environment Variables
above) instead of going through a server action or API route.

## Deployment

The site is a static export (`next build` writes to `out/`) deployed to GitHub Pages via
`.github/workflows/deploy.yml`, which runs on every push to `dev` and publishes `out/` using
`actions/deploy-pages`. Set `NEXT_PUBLIC_MAILCHIMP_FORM_ACTION` and `NEXT_PUBLIC_MAILCHIMP_HONEYPOT_NAME` as
repository variables (Settings → Secrets and variables → Actions → Variables) so the build step can read them, and
configure the custom domain under Settings → Pages.

To build and preview the static output locally:

```bash
pnpm build
pnpm start
```