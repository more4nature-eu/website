# Requirements

This project requires Node.js v22.2.0 (as specified in the Dockerfile and the `.nvmrc` file) and
uses [pnpm](https://pnpm.io/) as the package manager.

# Environment Variables

This project requires certain environment variables to be set for proper operation. Please create a `.env` file in the
root directory and define the following variables:

```
MAILCHIMP_API_KEY=your-mailchimp-key-here
```

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
- [Mailchimp Marketing](https://mailchimp.com/developer/marketing/api/)
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

## Deployment

This project includes a `Dockerfile` for containerized deployment. The Dockerfile uses a multi-stage build for efficient
image size and security:

- **Base image:** Uses `node:22.2.0-alpine` for a lightweight Node.js environment.
- **Dependencies stage:** Installs dependencies using `pnpm` and `corepack` for reproducible builds.
- **Build stage:** Builds the Next.js app with production optimizations and disables telemetry.
- **Runner stage:** Runs the app as a non-root user (`nextjs`) for security, exposes port 3000, and uses Next.js
  standalone output for minimal runtime footprint.

Before building or running the Docker image, make sure you have a `.env` file in the project root with all required
environment variables filled in (see the Environment Variables section above).

To build and run the Docker image:

```bash
docker build -t m4n-website .
docker run -p 3000:3000 m4n-website
```