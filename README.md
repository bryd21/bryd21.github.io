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

## Deployment to Cloudflare Pages

This project is configured for Cloudflare Pages using `@sveltejs/adapter-cloudflare`.

### Option 1: Cloudflare Pages Dashboard (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click "Create a project" → "Connect to Git"
3. Connect your GitHub/GitLab repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `.svelte-kit/cloudflare`
   - **Root directory:** `/` (leave as default)
   - **Node version:** 18 or higher
5. Click "Save and Deploy"

Cloudflare Pages will automatically detect SvelteKit and handle deployments on every push to your main branch.

### Option 2: Wrangler CLI

```bash
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare
```

### Environment Variables (if needed)

If you need environment variables, add them in the Cloudflare Pages dashboard under Settings → Environment Variables.

## Project Structure

- `src/routes/` - Page routes (SvelteKit file-based routing)
- `src/lib/components/` - Reusable Svelte components
- `static/` - Static assets (images, etc.)
- `wrangler.toml` - Cloudflare Workers configuration

## Notes

- Update the Web3Forms access key in `src/routes/+page.svelte` (line with `YOUR_ACCESS_KEY_HERE`)
- Static assets should be placed in the `static/` folder
- The old HTML files have been removed as part of the migration to SvelteKit
