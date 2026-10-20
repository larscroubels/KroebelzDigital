# Kroebelz Digital website

A responsive portfolio website for Kroebelz Digital, built with HTML, CSS, vanilla JavaScript and Bootstrap 5. Fully bilingual (Dutch and English).

## Run it
Open `index.html` in a browser. Bootstrap is loaded from the jsDelivr CDN, so an internet connection is needed for it. The fonts (Manrope and DM Sans) are self-hosted in `assets/fonts/`, so no requests go to Google Fonts.

## Languages
All copy lives in the `translations` object at the top of `js/main.js`, with a `nl` and an `en` entry per key. Elements opt in with:

- `data-i18n="key"` replaces the text content
- `data-i18n-html="key"` replaces the inner HTML (only used for headings with `<em>`/`<br>` from the dictionary)
- `data-i18n-attr="attr:key; attr:key"` sets attributes such as `placeholder`, `alt`, `aria-label` or `content`
- `data-lang-block="nl"` / `data-lang-block="en"` shows one of two long-form versions, used for the legal texts

The Dutch text in the HTML is the fallback when JavaScript is unavailable. First-time visitors get Dutch or English based on their browser language; any other browser language falls back to English. The chosen language is kept for the rest of the visit, and is only remembered for later visits when the visitor allows the "Preferences" category.

To add a string, add the key to both `nl` and `en` and reference it from the markup.

## Privacy and cookies
On the first visit a cookie notice asks for consent. Visitors can accept all, reject all or set their preferences per category, and change their choice later through "Privacy preferences" in the footer or on the cookie policy page. The choice is valid for six months, after which the notice asks again.

| Category | What it allows |
| --- | --- |
| Strictly necessary | Storing the consent choice, the language for the current visit and whether the launch notice was shown. Always on. |
| Preferences | Remembering the language for later visits. |
| External media | Loading a live preview of a portfolio site in the project dialog. |

The site uses browser storage only and sets no cookies. These are the storage keys:

- `kroebelz:consent` (localStorage): the consent choice
- `kroebelz:lang` (sessionStorage, plus localStorage with "Preferences" consent): the chosen language
- `kroebelz:launch` (sessionStorage): the launch notice was already shown this visit

When you add a storage key, a tracker or an embed, update `privacy-policy.html` and `cookie-policy.html` (both language blocks) and, if it needs consent, the categories in `js/main.js`.

## Launch notice
Until the official start, every visit shows a short "launching soon" notice once, with a link to the contact section. To switch it off, set `SHOW_LAUNCH_NOTICE` to `false` near the top of `js/main.js`, and remove the `kroebelz:launch` row from the table in `cookie-policy.html` (Dutch and English).

## Portfolio previews
Each project on `my-work.html` opens a dialog with a screenshot and the project details. The live site only loads inside the dialog after the visitor clicks "Load live preview", which also counts as consent for external media. Some sites refuse to be shown inside another site (`X-Frame-Options` or `Content-Security-Policy: frame-ancestors`); the dialog therefore always offers a link that opens the site in a new tab. To allow embedding on a site you manage, send `Content-Security-Policy: frame-ancestors 'self' https://kroebelzdigital.be` from that site.

## Contact form
The form validates the fields in the visitor's language and opens their email app with a prepared message to `info@kroebelzdigital.be`. It does not send messages directly or store submissions. To receive enquiries without relying on the visitor's email app, connect a form service or add a backend, and mention that service in the privacy policy.

## Before going live
- Add the company details (enterprise number and registered address) to "Who is responsible?" in `privacy-policy.html`, in both languages.
- Have the privacy and cookie policies checked against the final setup, and update the "last updated" date in `js/main.js` (`legal.updated`) when they change.

## Main files
- `index.html`: home page (hero, services, about, process, contact)
- `my-work.html`: portfolio with a preview dialog per project
- `privacy-policy.html`, `cookie-policy.html`: legal pages in Dutch and English
- `css/style.css`: design tokens, components and responsive layouts on top of Bootstrap
- `js/main.js`: translations, consent and privacy preferences, language switcher, navigation, scroll effects, contact form, project previews and the launch notice
- `assets/`: logos, portrait, project images and fonts

## Fonts
Manrope and DM Sans are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org) and were taken from Google Fonts (Latin subset).

## Brand colours
- Deep red: `#a20f1b`
- Black: `#090909`
- White: `#ffffff`
