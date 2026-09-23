# Homepage changelog

Homepage revision for Sonic Bold. Section order is unchanged. Two additions sit inside the existing page: a compact founder band under the hero, and a “What happens after day 30” block at the bottom of How It Works.

## Fix 1 — Case studies

All three cards now credit only Google Ads and Local Services Ads management: search terms, negatives, LSA disputes, budget, and geo.

- Case 1 no longer mentions an AI receptionist or missed-call answering. The story is LSA disputes, service-area and budget tightening, and Search negatives.
- Case 2 no longer mentions page-load speed or call tracking. The story is search-term review, DIY and job-seeker negatives, and budget and geo.
- Case 3 no longer claims “100% exclusive leads” or a cost per exclusive lead. It explains Search clicks versus LSA leads (see fix 2) and reports CPL, booked jobs, and LSA dispute savings.
- Hard numbers that were on the page (booked-job counts, CPL, dispute dollars, “+157%”, “400 negatives”, page-load times) are replaced with placeholders. Do not publish those old figures.
- The “Verified Plumber” badge on each card is replaced by three proof slots: Google review, account screenshot, and video. Layout of the card (photo, name, problem, fix, three metrics) is unchanged.
- The results disclaimer now says the metrics are placeholders until proof is attached.

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

A short block, “What happens after day 30,” sits under the How It Works steps. The same terms are an FAQ. Both say: flat monthly fee `[MONTHLY_FEE_OR_RANGE]`, month-to-month, no percentage of ad spend, cancel anytime, Google Ads and LSA accounts stay yours. The old “Do you charge a percentage of ad spend?” FAQ was folded into this answer. No other new sections were added.

## Fix 5 — Founder

Compact band directly under the hero: photo of Sam (`images/sam-founder.jpg`), name, `[FOUNDER_BIO_2_LINES]`, phone +1 203-791-3925, “You'll talk to me, not an account manager,” and a link to About. The photo is the attached headshot, resized to 800×960 JPEG (about 40KB).

## Fix 6 — Company trust

One line, `[ADDRESS_EXPLANATION]`, sits in the footer under the existing Helena, MT address and +1 203-791-3925 number. The address block and the SMS disclosure are otherwise unchanged.

## Placeholder checklist

Fill these before treating the page as final. Tokens are written in the HTML exactly as shown.

### Company and offer

- [ ] `[FOUNDER_BIO_2_LINES]` — two lines for Sam, under the hero
- [ ] `[MONTHLY_FEE_OR_RANGE]` — flat fee after day 30 (How It Works block, FAQ, and FAQ JSON-LD)
- [ ] `[ADDRESS_EXPLANATION]` — one factual line for the Helena, MT address and the 203 phone number

### Case study 1 (Dave Miller card)

- [ ] `[CS1_BOOKED_JOBS]`
- [ ] `[CS1_BOOKED_JOBS_BEFORE]`
- [ ] `[CS1_TIMEFRAME]`
- [ ] `[CS1_CPL_BEFORE]`
- [ ] `[CS1_CPL_AFTER]`
- [ ] `[CS1_LSA_DISPUTE_SAVINGS]`
- [ ] `[CS1_GOOGLE_REVIEW_LINK]`
- [ ] `[CS1_ACCOUNT_SCREENSHOT]`
- [ ] `[CS1_VIDEO_TESTIMONIAL_URL]`

### Case study 2 (Mike Kowalski card)

- [ ] `[CS2_CPL_BEFORE]`
- [ ] `[CS2_CPL_AFTER]`
- [ ] `[CS2_BOOKED_JOBS]`
- [ ] `[CS2_TIMEFRAME]`
- [ ] `[CS2_GOOGLE_REVIEW_LINK]`
- [ ] `[CS2_ACCOUNT_SCREENSHOT]`
- [ ] `[CS2_VIDEO_TESTIMONIAL_URL]`

### Case study 3 (Marcus Vance card)

- [ ] `[CS3_BOOKED_JOBS]`
- [ ] `[CS3_CPL]`
- [ ] `[CS3_LSA_DISPUTE_SAVINGS]`
- [ ] `[CS3_TIMEFRAME]`
- [ ] `[CS3_GOOGLE_REVIEW_LINK]`
- [ ] `[CS3_ACCOUNT_SCREENSHOT]`
- [ ] `[CS3_VIDEO_TESTIMONIAL_URL]`

Proof slots are the per-client versions of `[GOOGLE_REVIEW_LINK]`, `[ACCOUNT_SCREENSHOT]`, and `[VIDEO_TESTIMONIAL_URL]`.
