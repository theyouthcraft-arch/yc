# YouthCraft site review: what I found and what changed

## Files in this folder
**Replace these (content rewritten):** `index.html`, `how-it-works.html`, `science.html`, `model-registry.html`, `about.html`, `youth-score.html` (now a live "Scorecard" showing Life-days claimed and Life-years gained), `header.html`, `footer.html`.
**Replace these (targeted edits only):** `privacy.html`, `disclaimer.html`. Needs legal review before publishing.
**Updated app pages:** `mission.html`, `doneanddusted.html` (years now shown in brackets on the aggregate tiles), `onboarding_rev.html` (the final button now goes to Missions instead of the old biological-age page).
**Optional (see below):** `optional/contact.html`, `optional/login.html`, `optional/signup.html`.
**Not changed:** `terms.html`, `life-days.html`, `biological-age.html`, `recurring_qs.html`.

## Findings, most important first
1. **152 of the 200 question references link to PubMed's home page**, not to a paper (`https://pubmed.ncbi.nlm.nih.gov/`). Only 48 link to a specific paper. The "Refer:" link on the onboarding page therefore does not reach the cited study for most questions. The Model Registry page says this openly (open items). Remove or reword that line if you prefer, but the fix is to supply a PMID or DOI link per question.
2. **`life-days.html` and `biological-age.html` still show the earlier 107-question framework** (IDs such as C01 and L01, Top-100 lists, Year-delta maths). Their numbers conflict with the new 200-question model. They are the biggest remaining inconsistency. I did not change them; they should be rebuilt from the new question bank. Also, the header links to `biological-age.html` but the old onboarding redirect used `biological_age.html` (two files).
3. **The old Model Registry contradicted your own workbook.** It stated fixed domain weights (18%, 22% and so on) and "anchored in peer-reviewed literature". Your workbook states the hazard ratios are illustrative scaling, not extracted estimates. The new page follows the workbook.
4. **Forms that don't work:** `login.html` posts to `dashboard.html` and `signup.html` to `verify.html` (both 404 on the site), and `contact.html` shows "Message submitted!" without sending anything. The `optional/` versions say so plainly. If a backend exists elsewhere, ignore them. The contact page points to GitHub issues, and I did not confirm Issues is enabled.
5. **Features the old pages described that do not exist in the current build:** wearable sync, lab-report OCR, 77 recurring metrics, a Youth Score (0-100) and Year-delta biological age. I removed these claims from the rewritten pages.
6. **`recurring_qs.html`** is no longer linked from any rewritten page, because Missions replaces it. You can unlink or retire it.
7. **Privacy and disclaimer pages:** I fixed the facts that are now wrong (107 and 77 counts, recurring metrics, wearables, where data is stored). Their other sections still describe a future service (accounts, retention schedule, export) and mention Youth Score and biological-age proxies. Have these reviewed by counsel.

## Numbers and conventions you should confirm
- **Adherence factor:** the pages use 0.50. The workbook's Parameters sheet still says 0.75.
- **Years conversion:** Life-days ÷ 365.25 (per your instruction). The earlier site pages used 365.
- **Cap:** 9,125 Life-days (25 years), applied to totals.
- **Done & Dusted thresholds:** only the daily 21-in-30 rule came from you; the others are my defaults, labelled as such on the pages.
- **Nav labels:** "Won battles" is now "3 · Done & Dusted", "Youth Score" is now "Scorecard", and "Data Capture & Reports" is now "My Journey".

## Figures used on the pages (all from your files)
200 questions; 789 answer options; 12 categories; 10 causal clusters; 53 systems or tissues; evidence 12 High, 60 Moderate, 128 Low; 811 action steps (Daily 334, Weekly 196, Monthly 64, Quarterly 19, Event-based 198); 561 steps carry Life-days and 250 are tracking-only; Q001 and Q137 worked examples.
