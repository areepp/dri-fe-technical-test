# Skilled — Design System

E-learning landing page. Font: **Plus Jakarta Sans** (Google Fonts).

## Color

### Solid

| Token | Hex | RGB | HSL | Usage |
|---|---|---|---|---|
| `purple` | `#666CA3` | 102, 108, 163 | 234°, 25%, 52% | Secondary text, Button 2 hover |
| `navy` | `#13183F` | 19, 24, 63 | 233°, 54%, 16% | Headings, dark backgrounds, Button 2 |
| `grey` | `#83869A` | 131, 134, 154 | 232°, 10%, 56% | Body text |
| `pink` | `#F74780` | 247, 71, 128 | 341°, 92%, 62% | Links, accents, hover states |
| `light-pink` | `#FFA7C3` | 255, 167, 195 | 341°, 100%, 83% | Soft accents |
| `white` | `#FFFFFF` | 255, 255, 255 | 0°, 0%, 100% | Page background, text on dark/gradient |

### Gradients

| Token | Colors | HSL | Usage |
|---|---|---|---|
| `gradient-orange-pink` | `#F02AA6` → `#FF6F48` | 322°, 87%, 55% → 13°, 100%, 64% | Button 1, icon badges |
| `gradient-blue-pink` | `#4851FF` → `#F02AA6` | 237°, 100%, 64% → 322°, 87%, 55% | Button 3 (hero/footer CTA) |

Gradients run top-left to bottom-right (`to bottom right` / `135deg`).

### Button hover states

| Button | Idle | Hover |
|---|---|---|
| Button 1 (solid navy) | `#13183F` | `#666CA3` (purple) |
| Button 2 (orange→pink gradient) | `#F02AA6` → `#FF6F48` | Same gradient at 50% opacity (pale pink→peach) |
| Button 3 (blue→pink gradient) | `#4851FF` → `#F02AA6` | Same gradient at 50% opacity (pale lavender→pink) |

Hover rule: each button shows its idle style at **50% opacity** over white — solid colors lighten to the slate-purple token, gradients wash out to pastel.

Buttons: border-radius `28px` (pill), white text, no border.

## Typography

All sizes/line-heights from the spec sheet:

| Style | Weight | Size | Line height | Usage |
|---|---|---|---|---|
| Heading XL | Extra Bold (800) | 56px | 70px | Hero heading |
| Heading L | Extra Bold (800) | 40px | 51px | Section headings |
| Heading M | Extra Bold (800) | 32px | 40px | Card titles |
| Heading S | Extra Bold (800) | 24px | 28px | Small headings / stat numbers |
| Body M | Medium (500) | 18px | 28px | Hero paragraph, intro copy |
| Body S | Bold (700) | 16px | 28px | Card body text |

### Responsive scaling

| Style | Desktop | Tablet | Mobile |
|---|---|---|---|
| Heading XL | 56px / 70px | 40px / 51px | 40px / 51px |
| Heading L | 40px / 51px | 32px / 40px | 32px / 40px |
| Heading M | 32px / 40px | 24px / 28px | 24px / 28px |
| Body M | 18px / 28px | 16px / 28px | 16px / 28px |

## Reference copy

- Hero heading: "Maximize skill, minimize budget"
- Hero body: sample lorem-style paragraph at Body M / grey
- Section heading: "Check out our most popular courses"
- Card heading: "Photography"
- Button label: "Get Started"
