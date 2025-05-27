# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
astradeis-website/
├── public/                 # Static assets (images, fonts, etc.)
│   ├── images/             # Site images (logos, hero images, etc.)
│   │   ├── logo/           # Logo variations
│   │   ├── hero/           # Hero section images
│   │   ├── industries/     # Industry-related images
│   │   ├── products/       # Product images
│   │   └── placeholders/   # Placeholder images during development
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # General components (Button, Card, etc.)
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── sections/       # Page-specific sections
│   ├── content/            # Markdown content files
│   │   ├── blog/           # Blog posts
│   │   ├── products/       # Product descriptions
│   │   ├── services/       # Service descriptions
│   │   └── industries/     # Industry information
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro  # Base layout for all pages
│   │   ├── BlogLayout.astro  # Layout for blog posts
│   │   └── PageLayout.astro  # Layout for regular pages
│   ├── pages/              # Page components
│   │   ├── index.astro     # Homepage
│   │   ├── about.astro     # About page
│   │   ├── products.astro  # Products page
│   │   ├── services.astro  # Services page
│   │   ├── industries.astro # Industries page
│   │   ├── contact.astro   # Contact page
│   │   ├── blog/           # Blog pages
│   │   │   ├── index.astro # Blog main page
│   │   │   └── [slug].astro # Dynamic blog post page
│   │   └── 404.astro       # 404 error page
│   ├── styles/             # Global styles
│   │   ├── global.css      # Global CSS
│   │   └── variables.css   # CSS variables based on branding
│   └── utils/              # Utility functions
│       ├── blogHelpers.js  # Blog-related helper functions
│       └── formatters.js   # Text/date formatting functions
└── astro.config.mjs        # Astro configuration
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
