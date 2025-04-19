# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## layout

an test at cloning from a screenshot of <https://www.raccoons.be/what-we-think/whitepapers/%20the-generative-ai-playbook>


prompt:

`Create a Nuxt website that looks like the attached screenshot. Use any additional libraries required.`

It's a little brief.

```
raccoons-landing/
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── DownloadForm.vue
│   └── WhitepaperCard.vue  <-- We might simplify this as there are only two specific ones
├── pages/
│   └── index.vue
├── layouts/
│   └── default.vue
├── assets/
│   └── css/
│       └── main.css  (Optional)
│   └── images/       (Place logo image here if using one)
├── nuxt.config.ts
├── package.json
└── tailwind.config.js
```


## some potential resources

https://makdigitaldesign.com/ecommerce/web-development/how-to-use-chatgpt-to-build-a-website-from-a-wireframe/
https://github.com/abi/screenshot-to-code
https://codelabs.developers.google.com/draw-a-website-gemini#0
