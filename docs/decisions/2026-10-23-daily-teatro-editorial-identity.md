# Daily Teatro publication — adopted editorial identity

**Adopted by the author:** 23 October 2026  
**Status:** adopted editorial norm, source-only; not yet implemented or deployed  
**Source owner:** `Fountain-Coach/benedikt-eickhoff.de`  
**Canonical domain:** `benedikt-eickhoff.de` (the `www` variant is the same identity, not a second publication)

## Governing decision

**A Memory Vector is a finite, ordered, uncommented gallery of the exact images selected by the author for a calendar day. It is visible only on staging. The public daily post is the actual Teatro Score with its authored Linotype-set literary text. The texts of these daily posts form a pool for later author-selected Solstice / First Readings and books on the Reframe Bookshelf.**

The source gallery is not the public work. A daily post is not automatically a book.

## Source and staging

- The existing working practice is: upload/select an ordered image array, name it *today's Memory Vector*, request a Teatro Score, and compose the accompanying prose.
- Today's calendar day identifies the editorial selection; the images may have been photographed or posted in earlier years. Preserve source dates separately.
- Facebook's Memories calendar currently supports discovery. Periodic Facebook account exports preserve **whole historical posts**, including their texts, dates, media attachments and original media order. Local private persistence and explicitly authorized remote sources may extend discovery. Facebook photo-only API results are insufficient.
- The author confirms exactly which images and their order constitute that day's Memory Vector. The image gallery displays **only those images**, plus unobtrusive date/navigation and **Copy link**. No generated interpretations, captions, motif lists, dashboards or explanations.
- The Memory Vector belongs on the **registered WLAN staging host**, not in the public site. Facebook post texts, unreviewed original media and private archives remain in private persistence, not in the staging web root. The source gallery and its image assets must not ship to production.

## Public authorial work

- The homepage of `benedikt-eickhoff.de` leads with the latest **actually admitted** daily Teatro work instead of the current aesthetic placeholder or method demonstration.
- One daily post contains its date, genuine **Teatro Score image(s)**, and readable **Linotype-set literary prose**, normally Score first and text following, with permanent permalink, **Copy link**, credits and rights. Journals by Bee, Zork or N. retain their own literary form; no generic screenplay/template is imposed.
- Earlier real daily works form a chronological archive. Days without approved works remain unpublished, not filled with generated examples.
- Fountain Press owns Linotype composition; this personal author domain stays adjacent to the three estate editorial fronts (Fountain Coach, First Reading, Teatro) and does not establish a fourth front.

## Readings and Bookshelf

- The **literary texts** of daily posts form eligible source works, not automatically admitted Bookshelf books.
- Later authorial selection may order, revise, juxtapose and preface texts from multiple dates to form a Solstice / First Reading or another book, with a distinct edition identity preserving the contributing original works.
- Reframe / FountainStore own Bookshelf admission; Fountain Press owns book composition. Bookshelf presence and public release remain distinct editorial decisions.
- The separate private `Contexter/dailies` project (*A Life in the Making*) remains distinct and is not automatically folded into Teatro.

## Implementation boundary

This document **pins editorial intent**, not a claim that the website has changed. Site implementation, staging review, author admission, EstatePublisher release and independent public HTTPS readback are separate steps. No new CMS, generic Memory Vector Publisher, Graph API accreditation, DNS environment, CI system or invented publication prerequisite is authorized by this decision.

The rejected analysis-heavy Memory Vector Publisher proposal in [closed PR #1](https://github.com/Fountain-Coach/benedikt-eickhoff.de/pull/1) is explicitly superseded. The [22 October dailies intent](2026-10-22-dailies-pointer-intent.md) stays independent.

**Norm:** *Private daily image source → authored Teatro Score and Linotype prose → public daily post → later authored Solstice Reading / book.*
