# ⚡ Deploying to Cloudflare Pages

This application is built with **React 19**, **Vite 6**, and **Tailwind CSS**, making it fully static, ultra-performant, and perfectly suited for **Cloudflare Pages**' global edge network.

Here are the two easiest ways to deploy this project to your Cloudflare account.

---

## Option 1: Git Integration (Recommended)
This is the preferred method. Cloudflare will automatically build and deploy your site every time you push to your GitHub branch.

1. **Push your code to GitHub**:
   Create a repository on GitHub and push this project's code to it.
2. **Log into Cloudflare**:
   Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
3. **Create a new Pages Project**:
   - Click **Create** > **Pages** > **Connect to Git**.
   - Select your GitHub account and repository.
4. **Configure Build Settings**:
   Cloudflare automatically detects Vite, but verify the following values:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version**: (Defaults to 18+, which is perfect)
5. **Click "Save and Deploy"**:
   Your site will be live on a custom `*.pages.dev` subdomain in less than a minute! You can then easily bind your custom domain through the **Custom domains** tab in the project settings.

---

## Option 2: Manual Deployment via Wrangler CLI
If you prefer deploying directly from your local terminal without connecting GitHub, you can use the official Cloudflare Wrangler CLI.

1. **Install the Cloudflare Wrangler CLI** (if you haven't already):
   ```bash
   npm install -g wrangler
   ```
2. **Log in to your Cloudflare account**:
   ```bash
   wrangler login
   ```
3. **Build the production static assets**:
   ```bash
   npm run build
   ```
4. **Deploy the built folder (`dist`)**:
   ```bash
   wrangler pages deploy dist
   ```
   - *Wrangler will ask for a project name and whether you want to deploy to production. Follow the prompt instructions.*

---

## 🛠️ Included Cloudflare Optimizations
We have configured standard Cloudflare Pages optimization best practices:
- **Client-Side Routing Support**: Added `public/_redirects` specifying `/* /index.html 200` to prevent `404 Not Found` errors on route refreshes or deep paths.
- **Fast Production Build**: Optimized to bundle and tree-shake unused Tailwind CSS values during `npm run build` for lightning-fast loads on the Cloudflare CDN.
