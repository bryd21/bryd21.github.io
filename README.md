# ModuTennis

A modern tennis training platform built with SvelteKit and deployed on Cloudflare Workers.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deployment to Cloudflare Workers

This project is configured for Cloudflare Workers using `@sveltejs/adapter-cloudflare`.

### Deploy using Wrangler


```bash
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare
```

Or use Cloudflare Pages for automatic deployments from Git.

## Project Structure

- `src/routes/` - Page routes (SvelteKit file-based routing)
- `src/lib/components/` - Reusable Svelte components
- `static/` - Static assets (images, etc.)
- `wrangler.toml` - Cloudflare Workers configuration

## Notes

- Update the Web3Forms access key in `src/routes/+page.svelte` (line with `YOUR_ACCESS_KEY_HERE`)
- Static assets should be placed in the `static/` folder
- The old HTML files have been removed as part of the migration to SvelteKit
