# Data request — 16 open placeholders

Every dashed orange chip on the site is one of these. Supply the figure and I fill it in;
nothing on the page is estimated. Grouped by who owns the number.

## Commercial team (highest leverage — 5 figures)
| # | Figure | Section | Why it matters to the GM |
|---|--------|---------|--------------------------|
| 1 | Signed contract value across the 4 supported pitches | 04 Acquisition | Converts "supported 4 pitches" into revenue |
| 2 | Win rate — pitches won ÷ pitches supported | 04 Acquisition, 12 Framework | Isolates creative's commercial contribution |
| 3 | Count of pitch decks / proposals supported | 09 Strategy | Volume of new-business support |
| 4 | Proposals won that included creative support | 09 Strategy | Direct attribution |
| 5 | Revenue attributable to in-house web build capability | 09 Strategy | Value of the new sellable service |

## Finance / procurement (1 figure — the single biggest number on the page)
| # | Figure | Section |
|---|--------|---------|
| 6 | Average external quote for one landing build × 6 = avoided external cost | 10 Projects |

> One benchmark quote from any web vendor produces this. It is the clearest ROI statement in the review.

## Production log / account management (6 figures)
| # | Figure | Section |
|---|--------|---------|
| 7 | Average concept→approval hours per asset: April baseline vs. now → % time saved | 02 Impact |
| 8 | Average client revision rounds per asset: baseline vs. now → % reduction | 02 Impact |
| 9 | Retention rate across the 12 accounts | 12 Framework |
| 10 | Client satisfaction score or feedback log | 12 Framework |
| 11 | Assets delivered per designer per week: baseline vs. now | 12 Framework |
| 12 | Engagement / CTR / conversion delta on redesigned accounts | 12 Framework |

## HR (1 figure)
| # | Figure | Section |
|---|--------|---------|
| 13 | Design unit retention rate over the review window | 12 Framework |

## Joint (Team Lead + GM) — 3 figures
| # | Figure | Section |
|---|--------|---------|
| 14 | Skills matrix score — audited version of the AI capability assessment | 06 AI Transformation |
| 15 | Skills matrix score — team technical development | 12 Framework |
| 16 | Skills matrix depth — designers independently capable per discipline | 12 Framework |

---

## Where to edit

- **KPI card values** — `index.html`, section `#impact`. Replace
  `<span class="ph" …>— %</span>` with the number, e.g. `<span data-count="34">0</span><sup>%</sup>`,
  and set the card's bar: `<i data-fill="34">`.
- **Inline placeholders** in prose — `index.html`, search for `class="ph"`.
- **Framework table** — `index.html`, section `#framework`. Update the cell and, if the KPI
  is now closed, swap `fw__st--data` / `fw__st--prog` for `fw__st--met`.

## Notes

- Account before/after copy lives in `assets/js/main.js` → `ACCOUNTS`. Each entry's
  `pairs` value **must match** the number of `before-N.webp` / `after-N.webp` files
  in `assets/work/<slug>/`, or the matrix will request a missing image.
- Team development copy and capability bands live in `assets/js/main.js` → `PEOPLE`.
- Evidence is shown as a 3 × 2 matrix (3 Before over 3 After) with arrow paging;
  clicking any tile opens a side-by-side lightbox. Page size is `PAGE_SIZE` in main.js.
- 43 pairs / 86 images, generated from `New folder (6)/Accounts Dev` at 920×1150 WebP
  (5.9 MB total, down from 125 MB of source PNG/JPG). Pairs are matched by filename
  where the same post was redesigned, otherwise in order.
