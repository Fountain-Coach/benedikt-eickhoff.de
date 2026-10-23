# MVP-001 acceptance — Memory Vector Publisher v1

**Date:** 23 October 2026 · **Status:** test design only; no native application, staging, public release, or author review is claimed.  
**Owner:** `Fountain-Coach/benedikt-eickhoff.de`, with existing Reframe/Store and EstatePublisher owning their respective executable capabilities.  
**Source:** [MVP-001 proposal](../decisions/2026-10-23-memory-vector-publisher-v1.md) and [record schema](../contracts/memory-vector-publisher-v1.schema.json).

## Deliberately synthetic corpus

Use fictional source identities `synthetic:post-a`, `synthetic:post-b`, `synthetic:score-a` and `synthetic:koken-asset-a`; synthetic test bytes only. Never substitute production Facebook/Koken content into public repository fixtures.

- `2026-10-23` in a declared source timezone: post A with image A1 and image A2 (distinct `mediaOrdinal` values), post B with video B1, and a text-only post C. Their shared date is **not** a relation.
- Same day, a visually composed `synthetic:score-a`; deliberately **no** proven source relation to A1, A2 or B1.
- One historical album `synthetic:koken-album` with original positions 1–3, where image position 2 is unverified/missing, and another media object has only a cached derivative with its own digest.
- A writer chooses A2, B1 and one exact text span for a Field; later adds a separately author-declared artistic relation, changes the order, refuses one interpretation and accepts another.
- The author selects a *gallery* candidate; Teatro and Satzfunk are **only proposed separately**, never implied by the gallery's publication.

## Executable pass/fail gates

| ID | Exercise | Required outcome |
| --- | --- | --- |
| T01 | Parse each synthetic record with JSON Schema 2020-12; reject missing required IDs/revisions/digests | Schema errors are typed and fail closed |
| T02 | Ingest two posts on the same date, multiple media ordinals and one text-only post | Three distinct post identities and all media/text ranges survive; date grouping produces zero invented edges |
| T03 | Preserve Koken album positions 1–3 with image 2 missing | Original ordering stays 1–3 and image 2 displays an unavailable state, not a substitute |
| T04 | Recovered Wayback thumbnail resembles an original | Show only as separately marked `historical cached derivative`; never reuse original master digest |
| T05 | Attempt to label same-day Score a derivative of image A1 without source evidence | Provenance relation remains `not established` |
| T06 | A measurement identifies source image digest and method | Measurement stays under `observed`; emotional inference goes under `interpreted` with alternative reading |
| T07 | Proposed dialogue/dramatic action | Classified `invented`; no historical fact, voice or relationship is asserted |
| T08 | Select image/text while model grant absent | No outbound call, no generated interpretation claimed; curation remains usable |
| T09 | Permit exact image A2 + excerpt via elected model; attempt sending B1, larger text or another provider | Only explicitly granted payload/destination allowed; expanded scope denied |
| T10 | Rewrite/withdraw model claim | Only derivative claim revision changes; originals, author text and other source relations unchanged |
| T11 | Field displays original image and MP4 poster/controls, clear digest/provenance and missing-media slots | Visual content precedes machine prose; image loads/decodes; player seeks via ranges when served over HTTP |
| T12 | Copy link on HTTP-only private staging and HTTPS publisher | User-triggered copy works with an observable success/failure state; private link is not mislabeled public |
| T13 | Author marks source for gallery but does not admit it | Persist only `EditorialSelection`; no public Edition/production artifact or implied approval |
| T14 | Rights/consent/alt/disclosure or exact-artifact digest incomplete | `PublicationAdmission` cannot be approved; explicit refused/review record remains |
| T15 | Author admits exact candidate and later changes source/order/caption | Admission for older digest cannot authorize new artifact; new author decision required |
| T16 | Build approved gallery from source-controlled owner revision | Static projection includes only admitted material, human-visible disclosures, correct alt/captions and canonical URLs |
| T17 | Compare staging current live baseline with selected delta | Unrelated estate hosts and Solstice/Teatro remain unchanged; archive UI does not silently become a fourth front |
| T18 | Release attempts build on production or Git push alone | Refuse; only existing EstatePublisher admits digest-bound prebuilt artifact and supplies release receipt |
| T19 | Cached browser serves predecessor, Safari iPad reload renders stale item, or image pixels differ | Fail acceptance until fresh/reopened readback shows expected image/video and exact revision |
| T20 | Fail deployment/readback | Atomic rollback retains predecessor and never mutates original source bundle |
| T21 | Attempt to stage private Facebook/Messenger or job-centre material publicly | Refuse; only separately reviewed/exactly admitted public copy may enter site tree |
| T22 | Simulate absent future original (the Strato/Koken photo archive is incomplete) | No claimed reconstructed original, no generated stand-in, no fabricated checksum |

## Separately witnessed evidence

1. **Integrity:** source bytes, digest and byte length; archive/path containment and symlink checks; original historical join and time order.
2. **Authorship:** versioned author source selection, exact reviewer decisions, admitted derivative manifest, and publication-rights/AI-disclosure scope. Selection != approval.
3. **Reasoning:** observed vs interpreted vs invented labels, anchors and counterreading, explicit model receipt for any granted egress; no egress otherwise.
4. **Native writer experience:** real image visibility and video playback on Mac/iPad, portrait/landscape, soft navigation, actual copy-button gesture and usable clear-margin reading. Image `200 OK` alone does not pass.
5. **Publisher:** owner Git revision, artifact digest, predecessor comparison, separate EstatePublisher admission, host HTTPS readback and rollback test.

Each receipt has a single owning authority. The test harness must read actual live state (or an expressly named synthetic fixture), not infer success from a Markdown document, Git commit, mock-only green test or model explanation.

## Non-implementation decisions

- No autonomous daily corpus analysis or model upload.
- No bulk import of all private Facebook sources by a public website.
- No automatic public staged Field or domain route.
- No fake/Koken lookalike images for source gaps.
- No silently promoted drafts and no blanket future model/rights permission.
- No new Store, media proxy, publishing server or GitHub CI.
- No claim that the older Koken/Strato photograph archive has been fully recovered.

## Milestone order

**M0:** contract/schema and synthetic test fixture are reviewed.  
**M1:** one private genuine source snapshot, exact source identities verified, one date Field visualized without egress.  
**M2:** explicit author selection and optional separately authorized vector reasoning; independent persistence and restart readback.  
**M3:** reviewed public gallery candidate compiled from exact author choice, with rights, credits, alt and disclosure.  
**M4:** independent private staging/browser acceptance, and only then separately approved EstatePublisher production release with HTTPS evidence.

The pilot stops at its current milestone until the required real witness exists. A rejected field/edition can be withdrawn without destructive source or Store changes.

**Relation to other project evidence:** Reframe Scenario 010 supplies bounded X06 private Score fixtures, X08/X09 supply distinct post/media selection and bounded multimodal proposals. Those existing experiments do not themselves prove this Publisher specification, or recover absent input photographs.
