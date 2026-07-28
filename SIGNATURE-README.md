# Email Signature

`public/signature.html` is the cross-client HTML email signature for Michael Steve
Clarity Studio. It renders in Gmail, Outlook desktop (Windows), Outlook Web,
Apple Mail, and Namecheap Private Email webmail.

It lives in `public/` because Next.js serves that directory byte-for-byte. It is
not touched by Turbopack, Tailwind, PostCSS, or the App Router layout. Nothing in
`next.config.mjs` rewrites or transforms it. Once deployed it is reachable at
`https://michaelsteve.com/signature.html`.

## What it contains

| Block | Content |
|---|---|
| Identity | Logo 72x72, name, title, company |
| Divider | 1px `#D5D7EA` rule |
| Contact | `partner@michaelsteve.com`, `+234 916 019 9000`, `michaelsteve.com`, LinkedIn, Instagram |
| Banner | 500x125, links to `aistakeholderchallenge.com` |

Total width 500px. Every value is real, no placeholders.

## No separate CTA button, by decision

An earlier draft carried a "Book a Conversation" button pointing at the inquiry
form. It was removed deliberately. Do not add it back without revisiting the
reasoning:

- Recipients in an active thread reply. Routing them to a web form that asks for
  name, organization, representation and qualification is more friction than the
  message they already have open, and it discards the thread context.
- Forwarded and cc'd recipients cannot reply to reach Michael, but the banner
  already covers them and is a stronger hook than a generic button.
- Two calls to action inside 500px compete. One wins.

The tradeoff accepted: a reply lands in an inbox with no attribution, whereas a
form submission would have landed in Supabase tagged and trackable. Warm named
replies were judged worth more than signature lead analytics.

The signature tagline was likewise removed from the text block. It is carried by
the studio banner artwork, and having the same sentence twice inside 500px read
as a stutter.

## One banner, not two

A two-banner layout was considered and rejected: AISC on top, the studio tagline
banner below pointing at `aiclarityforchiefs.com`. Reasons it was dropped:

- **Promise mismatch.** `signature-banner.png` says "You can only give clarity, if
  you have clarity." That is the studio tagline, not AICC. Nothing in the image
  signals a four-week executive engagement, so a click would land somewhere the
  artwork never promised. The AISC banner works precisely because the image says
  `AI STAKEHOLDER CHALLENGE` and the link goes to aistakeholderchallenge.com.
- **Same split the CTA button caused.** Two banners of equal visual weight means
  neither wins, which is the problem removing the button was meant to solve.
- **Height.** Roughly 209px of content plus one 125px banner is already a lot to
  append to a one-line reply, and it repeats down a thread. Two banners takes it
  past 470px.
- **Positioning.** `ecosystem/SOURCE_OF_TRUTH.md` frames AICC as the engagement
  for Chiefs and VIPs who cannot or will not do the intense seven-day challenge.
  AISC and AICC are alternatives, not a bundle. Showing both asks the recipient
  to self-sort into a segmentation they do not know exists.

If AICC ever needs signature presence, cut a properly AICC-branded 1000x250
banner and build a second signature variant. All four target clients support
multiple named signatures, so you pick per recipient. Do not stack.

## Assets

Referenced by the signature, absolute HTTPS URLs:

| File | Source | Rendered | Notes |
|---|---|---|---|
| `icon-192.png` | 193x193 PNG | 72x72 | Pre-existing, already live. 2.7x oversampled, sharp on retina |
| `aisc-signature-banner.jpg` | 1000x250 JPEG, 21KB | 500x125 | 2x downscale. Solid gradient, dark mode safe |

Present in `public/` but **not referenced**:

| File | Why it is kept |
|---|---|
| `aisc-signature-banner.png` | 1000x250, 207KB. Lossless master for the banner. Re-cut from this if the design changes |
| `signature-banner.png` | 1000x250, 38KB. Studio tagline banner. Reserved for a future studio variant pointing at `michaelsteve.com`. Not AICC-appropriate, see below |

Unreferenced files in `public/` are never fetched by a recipient, so they cost
repo size only.

### Why the banner is a JPEG

The supplied PNG was 207KB, mostly because PNG compresses smooth gradients badly.
The image turned out to be fully opaque (alpha 254 to 255 throughout), so the
alpha channel was dead weight and JPEG was available. At quality 85 with mozjpeg
and `4:4:4` chroma subsampling it is 21KB, a 10x reduction, with no visible
ringing on the white lettering when compared against the original at 3x
magnification. `4:4:4` matters here: the default `4:2:0` subsampling smears
coloured edges and would have softened the text.

Do not re-save the JPEG repeatedly. Re-encode from `aisc-signature-banner.png`.

### If you replace the banner

Keep 1000x250 and update **both** the `width`/`height` attributes and the
`width`/`height` inside the inline `style` on the `<img>`. Attributes alone are
not enough for Outlook Web, which scales from the CSS value.

Content rules: headline only, no phone, email or URL inside the image, because
many clients block images by default. Keep text at least 40px from every edge at
1000px scale. Never use a pure `#FFFFFF` or `#000000` background, both invert
unpredictably in Outlook and Apple Mail dark mode. Target under 120KB.

## Fonts

The signature names PT Sans Narrow and Inter to match the site, but **most
recipients will not see them.**

Email clients cannot load web fonts. Gmail and Outlook strip `<link>` and
font-face rules, and Outlook desktop's Word engine ignores them outright. The
`.woff2` files in `src/fonts/` are for the website and have no bearing here. A
font renders in email only if it is already installed on the recipient's machine.

Naming them still costs nothing and rewards anyone who has them locally. Two
stacks are used:

| Role | Stack | Used for |
|---|---|---|
| Display | `'PT Sans Narrow', 'Arial Narrow', Arial, Helvetica, sans-serif` | The name |
| Text | `Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif` | Everything else |

`Arial Narrow` is the important fallback: it ships with Windows and macOS, so the
condensed look of the name survives for most recipients even without PT Sans
Narrow. If it degrades all the way to Arial the name simply sets wider, which the
410px column absorbs without wrapping.

**Do not add a font-face rule to make the preview look right.** The preview page
is what you copy from. If it rendered in fonts your recipients do not have, you
would be designing against a lie. It deliberately shows the fallback.

## Deploy order

Images must be live before anyone tests the signature, because every `src` is an
absolute HTTPS URL. Relative paths work in local preview and break in every real
inbox.

1. Commit and push `public/signature.html` and `public/aisc-signature-banner.jpg`.
2. Wait for the deploy to finish.
3. Verify before pasting into any mail client:

```bash
for u in https://michaelsteve.com/icon-192.png \
         https://michaelsteve.com/aisc-signature-banner.jpg \
         https://michaelsteve.com/signature.html \
         https://aistakeholderchallenge.com; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 20 "$u")  $u"
done
```

All four must print `200`. As of writing, `icon-192.png` and
`aistakeholderchallenge.com` already return 200; the other two return 404 until
you push.

## Install

### Gmail, Outlook Web, Apple Mail, Namecheap Private Email webmail

1. Open `https://michaelsteve.com/signature.html` in a browser.
2. Select all (`Ctrl+A` / `Cmd+A`), copy (`Ctrl+C` / `Cmd+C`).
3. Paste into the signature editor.

Do **not** paste the raw source into the editor's HTML or source view. Namecheap
Private Email is Open-Xchange based and its source editor rewrites markup on save,
stripping inline styles and re-nesting tables. Gmail's editor has no source view
at all. The rendered copy-paste path is the only reliable one in all four.

Client-specific notes:

- **Gmail**: Settings, See all settings, General, Signature. Gmail caps signatures
  at roughly 10,000 characters. This file is well under.
- **Outlook Web**: Settings, Mail, Compose and reply, Email signature.
- **Apple Mail**: Settings, Signatures. Untick **"Always match my default message
  font"** first, otherwise Apple Mail flattens all formatting to plain text.
- **Namecheap Private Email**: Settings, Mail, Signatures, then use the rich text
  area. Paste, save once, reopen to confirm it survived.

### Outlook desktop (Windows)

Outlook desktop renders with Microsoft Word's HTML engine and will not accept a
paste cleanly. Replace the generated file instead.

1. In Outlook, create a dummy signature named `Michael Steve` and save it. This
   generates the file scaffolding.
2. Open `%appdata%\Microsoft\Signatures` in File Explorer.
3. You will see `Michael Steve.htm`, `Michael Steve.rtf`, `Michael Steve.txt`,
   and a folder `Michael Steve_files`.
4. Copy `signature.html` into that directory, then rename it to
   `Michael Steve.htm`, overwriting the generated one.
5. Leave `Michael Steve_files` in place. Do not delete it. Outlook expects the
   folder to exist even though this signature references no local assets.
6. Restart Outlook.

If the signature name has a space, the folder name has the space too. Keep the
`.htm` name byte-identical to the folder prefix or Outlook will not find it.

## Constraints this file honours

Do not "clean up" the markup. Each of these prevents a specific client failure.

**Layout**: nested `<table>` only. No div, flexbox, grid, or float. Spacing via
`cellpadding`, `cellspacing`, and cell padding, never margins. Every table carries
`border="0"` and `border-collapse: collapse`. Total width 500px.

**CSS**: inline `style` attributes only. No `<style>` block, no classes, no
external stylesheet. Gmail strips all of them. No pseudo-selectors, media queries,
`position`, or `float`.

**Colors**: `bgcolor` attribute alongside `style="background-color:"` on every
filled cell, because Outlook needs the attribute. No shorthand `background:`.

**Fonts**: see the section below. Every text element carries an explicit
`font-family`, `font-size` in px, and `line-height`. No web fonts are loaded.

**Images**: absolute HTTPS URLs only. Explicit `width` and `height` attributes and
matching CSS. `alt` on every image. `display:block; border:0; outline:none;
text-decoration:none;` on every image, which kills the gap Outlook adds below
images and the border Gmail adds to linked images. No base64, Gmail and Outlook
both reject it. No background images.

**Dark mode**: no pure white or pure black backgrounds anywhere. All contact
details are real HTML text in `#010579` on a transparent background, so they stay
legible whichever way a client inverts. Nothing critical lives inside an image.

**Copy**: no em-dashes anywhere, including comments and `alt` text, per
`aisc/agent-guides/COPY_GUIDE.md`.

**Forbidden and absent**: JavaScript, forms, iframes, video, web fonts, SVG, CSS
animations.

## If you ever add a form-linked CTA back

Two things bit this build and will bite again:

1. **Padding belongs on the `<td>`, not the `<a>`.** Outlook desktop uses Word's
   engine, which discards padding on inline anchors, collapsing the button to bare
   text. Gmail and Apple Mail honour anchor padding and would add it on top of any
   cell padding, roughly doubling the button. No single value is right in both, so
   put it on the cell.
2. **`intelligence/src/app/api/inquiry/route.js:80` validates the `src` param**
   against a hardcoded `validSources = ["AISC", "AICC", "MS", "PB"]` and rewrites
   anything else to `"UNKNOWN"` before insert. A `?src=SIG` link would submit
   fine, render fine, and land in the `inquiries` table unattributed. Adding
   `"SIG"` is a change in the `intelligence` repo, which per
   `ecosystem/WORKING_RULES.md` is an ecosystem handoff, not a change to make
   here.
