# Lazy Bear — corporate website

A responsive, self-contained static website for **Lazy bear s. r. o.** (IČO 55578501), designed for no-cost publishing using **GitHub Pages**.

## Contents

- `index.html` — English (primary) home, services, approach, about and company information
- `sk/index.html` — complete Slovak corporate home page
- `privacy.html` — English website privacy notice (not a mobile-app privacy policy)
- `sk/privacy.html` — Slovak website privacy notice
- `styles.css` — responsive visual system and mobile layouts
- `script.js` — localized accessible mobile navigation and footer year
- `assets/lazy-bear-icon.svg`, `assets/lazy-bear-wordmark.svg`, `assets/lazy-bear-full-logo.svg` — official Lazy Bear company vector art, cleanly extracted from the owner-supplied `Green Bear Square.zip`; `assets/lazy-bear-icon.svg` also serves as the favicon
- `.nojekyll` — no Jekyll processing required
- `tests/languages.test.mjs` — static localization regression checks (Node.js built-in test runner)

No frameworks, hosting fees, analytics, forms, cookies or build pipeline. The site also runs by simply opening `index.html` locally. No mobile products or app announcements are included.

## Source verification / limitations

The company legal name, address, formation date, business register entry and IČO were checked against the Slovak public register (February 2026 update) and FinStat:

- https://obchodnyvestnik.justice.gov.sk/ObchodnyVestnik/Formular/FormularDetail.aspx?IdFormular=4589269
- https://finstat.sk/55578501

The requested LinkedIn page is linked on the site, but was not readable via the available automated retrieval interface at development time. Marketing descriptions are therefore deliberately restrained and do NOT claim particular clients, results, certifications or workforce size. Replace or enrich this text when the exact LinkedIn `About` description is available.

No business contact email was supplied or independently verified. The contact link therefore opens the provided company LinkedIn URL rather than inventing an email address.

## Languages

**English remains the primary website** at `index.html` (root). Slovak is at
`sk/index.html`. Both the English and Slovak home pages and privacy notices
(`privacy.html` and `sk/privacy.html`) have a visible, keyboard-accessible
EN/SK switch. Switching languages preserves the current page type, with direct
relative links compatible with GitHub Pages and offline local previews.

No browser-language auto-detection, cookies, preferences, external translation
services or locale redirection are introduced. Existing official logo files stay
unchanged and are shared with the Slovak pages. English remains the default.

Optional static check (Node.js installed): `node --test tests/languages.test.mjs`.
Before publishing, review the Slovak translation and actual mobile/desktop
navigation in a real browser. This change does not by itself deploy GitHub Pages.

## How to publish for free

1. Log into GitHub as `dmitriilemeshevsky-star`.
2. Create a new **Public** repository named `lazybear-website`, with README initialization optional.
3. Upload all the files from this project into the **root** of the default branch (`main`), including `assets/` and the hidden `.nojekyll` file.
4. Open the repository's **Settings → Pages**.
5. Set **Build and deployment → Source: Deploy from a branch** and **Branch: `main` / `(root)`**, then Save.
6. After GitHub completes its Pages workflow, the expected project-site URL will be `https://dmitriilemeshevsky-star.github.io/lazybear-website/`. Verify the live URL on the Pages settings screen before sharing it.
7. When an owned domain is available, configure it in Pages and verify with Google Search Console. Until then the free github.io address is sufficient to preview and share the website; verify with Google directly whether their organization verification will accept the chosen site URL.

**Note:** GitHub Pages is intended for static organization/project showcase, not e-commerce transactions or hosting a paid SaaS. The current site contains no checkout, sales cart or transactional functionality.

## Checks

- All links between local pages use relative paths (compatible with project-based Pages URLs).
- The website requires no network during render, except when a visitor intentionally opens an external LinkedIn link.
- Decorative SVGs are provided locally; no third-party font/image requests.
- The mobile navigation is keyboard accessible and its `aria-expanded` state is updated; a reduced-motion media query is included.
- Before legal/Google Play use, review privacy notice and provide an actual official company contact email if required.

## Official corporate logo

The company-supplied `Green Bear Square.zip` supersedes the provisional generated bear mark. The homepage, privacy page, footer, about panel and browser favicon now use the authentic logo elements. The original brown vector paths and proprietary lettering are retained as supplied (cropped viewBox only), not recreated with fonts or recolored. The source ZIP should remain in the owner's private design archive; it is **not** committed to a public website repository. No product or app names have been added.
The source brand ZIP remains private and was not included in the public repository. Brand SVG variants preserve supplied vector paths and colors, changing only the crop/viewBox for site placement.
