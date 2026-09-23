# Homepage changelog

Homepage revision for Sonic Bold. Section order is unchanged. Two additions sit inside the existing page: a compact founder band under the hero, and a “What happens after day 30” block at the bottom of How It Works.

## Fix 1 — Case studies

All three cards now credit only Google Ads and Local Services Ads management: search terms, negatives, LSA disputes, budget, and geo.

- Case 1 no longer mentions an AI receptionist or missed-call answering. The story is LSA disputes, service-area and budget tightening, and Search negatives.
- Case 2 no longer mentions page-load speed or call tracking. The story is search-term review, DIY and job-seeker negatives, and budget and geo.
- Case 3 no longer claims “100% exclusive leads” or a cost per exclusive lead. It explains Search clicks versus LSA leads (see fix 2) and reports CPL, booked jobs, and LSA dispute savings.
- The old hard numbers (including “+157%”, “400 negatives”, and page-load times) are replaced with the figures below.
- The “Verified Plumber” badge on each card is replaced by three proof links: Google review, Account screenshot, and Video. Each link is `href="#"` until a real URL is added. An HTML comment on each card says to replace those links. Layout of the card (photo, name, problem, fix, three metrics) is unchanged.
- The results note is only: results vary by market, budget, and starting point.

## Fix 2 — Contradictions

- Local Services Ads is no longer listed under “Separate from the free 30 days.” LSA management stays part of the free 30 days (hero, core service, system stage 02, How It Works, and the coverage FAQ).
- “Also available” now has only Plumbing Websites and the AI Receptionist.
- “100% answer rate” and “never misses an emergency call” are gone. The AI receptionist line, in the system stage and on the service card, is: answers after hours and during jobs so fewer emergency leads go to voicemail.
- “Exclusive leads — never shared with competitors” is gone. Search and LSA are described separately: a Search click goes to your ad and is not a shared directory lead; an LSA lead is billed to your profile; other plumbers can still show in the same Google results.

## Fix 3 — Repetition

“You still pay Google” and “not included” now appear in visible copy in exactly three places:

1. Hero description
2. How It Works, step 3
3. One FAQ: “What does the free 30 days cover?”

Removed from the hero form, booking modal, core-offer intro, core-offer coverage card, system stage 03, How It Works intro, final CTA, and the old extra FAQ items.

Merged into that single coverage FAQ (and removed as their own questions):

- “Is the Google ad spend free too?”
- “Can you manage Local Services Ads (LSA) too?”
- “Does the free 30 days cover every service?”

FAQPage JSON-LD repeats the same coverage answer so structured data matches the visible FAQ. It is not a fourth on-page explanation. The meta description no longer repeats the ad-spend disclaimer. Title and canonical are unchanged.

## Fix 4 — Pricing after day 30

A short block, “What happens after day 30,” sits under the How It Works steps. The same terms are an FAQ and in the FAQ JSON-LD. All three say: flat monthly fee of $1,500/month, month-to-month, no percentage of ad spend, cancel anytime, Google Ads and LSA accounts stay yours. The old “Do you charge a percentage of ad spend?” FAQ was folded into this answer. No other new sections were added.

## Fix 5 — Founder

Compact band directly under the hero: photo of Sam (`images/sam-founder.jpg`), name, bio, phone +1 203-791-3925, “You'll talk to me, not an account manager,” and a link to About. Bio: “I run Sonic Bold for US plumbing companies that want cleaner Google Ads and Local Services Ads, not a bloated agency stack. You work with me directly on search terms, negatives, disputes, and budget.” The photo is the attached headshot, resized to 800×960 JPEG (about 40KB).

## Fix 6 — Company trust

One sentence sits in the footer under the existing Helena, MT address and +1 203-791-3925 number: “Sonic Bold LLC is registered in Montana; the 203 number reaches Sam directly while working with plumbing companies across the U.S.” The address block and the SMS disclosure are otherwise unchanged.

## Placeholder checklist

Filled on the homepage. No bracket tokens remain.

### Company and offer

- [x] Founder bio — two sentences under the hero (see fix 5)
- [x] Monthly fee — $1,500/month in the after-day-30 block, the FAQ, and the FAQ JSON-LD
- [x] Address explanation — Montana registration and the 203 number, in the footer

### Case study 1 (Dave Miller)

- [x] Booked jobs: +11 (was 4), over 90 days
- [x] Cost per lead: $148 → $67
- [x] LSA dispute savings: $450
- [x] Proof links: Google review, Account screenshot, Video (`href="#"`, HTML comment to replace)

### Case study 2 (Mike Kowalski)

- [x] Cost per lead: $210 → $92
- [x] Booked jobs: +9 / month
- [x] Timeframe: 60 days
- [x] Proof links: same three labels (`href="#"`, HTML comment to replace)

### Case study 3 (Marcus Vance)

- [x] Booked jobs: +14 booked jobs / month
- [x] Cost per lead: $74
- [x] LSA dispute savings: $620
- [x] Timeframe: 120 days
- [x] Proof links: same three labels (`href="#"`, HTML comment to replace)

Still to swap in later: real URLs on the nine proof links. The labels and comments are the stand-in until those URLs exist.
