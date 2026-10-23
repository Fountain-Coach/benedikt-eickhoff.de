# Memory Vector Publisher — source, field, selection, edition

**Decision candidate:** MVP-001 · **Date:** 23 October 2026 · **Status:** proposal; no deployment, ingestion, model operation, or public admission claimed.  
**Editorial/public source owner:** Fountain-Coach/benedikt-eickhoff.de.  
**Private creative-source and native integration owners:** existing Solstice/Reframe authorities and their current FountainStore, image-media, and execution contracts; not a new publisher, server, or Store.  
**Applies to:** historical Koken/SlideShowPro recovery, existing writer-owned Solstice sources, individual Facebook export posts, independent image/video sources, Memory Vectors, Teatro Scores, writing and possible Satzfunk work.  
**Does not supersede:** Reframe Scenarios 010/011 and X08/X09, ADR-006, published FCIS, the private Contexter/dailies project, EstatePublisher, or the three-front estate policy.

## 1. Decision

**A gallery is an author-admitted public projection of a selected field of works. It does not have to reproduce a historical Koken album or match a calendar day.**

A **Day** is a useful chronological view, **not a provenance relation**. A photograph, essay, post or Score from the same day remains independent until an explicit source witness or an author-declared artistic association relates it.

Preserve two distinct authorities:

1. **Historical publication:** Koken sets, album containment, captions, essays, individual media, order, publication timestamps, categories, pages and the older SlideShowPro antecedents remain independently addressable source records. Missing media are still missing. A Koken album is never automatically replaced by a Day Field.
2. **New work:** the writer can derive a Memory Vector from specified source identities, review a staged Field, select images/writing/Score candidates and admit a particular public edition. Every step records its own version, evidence and author decision. A Teatro Score is not automatically a representation of the photographs from its date.

A gallery is an **Edition**, not an ingestion folder. A Memory Vector is neither an embedding alone nor automatic permission to share, interpret or publish archival material.

## 2. Named entities and ownership

| Entity | Identity and source of authority | Immutable/variable |
| --- | --- | --- |
| SourceObject | Source system + opaque source identifier + exact media/text byte digest, when available; Koken album/content identifiers and original membership where applicable | Source facts immutable; independent recoveries append witnesses |
| SourceRelation | Explicit historical join, post-to-media relation, writer-authored relation or unknown; evidence/relation authority recorded | Original joins never inferred from coincident date |
| DailySourceBundle | Dated index of **specific independent** source objects/posts; source timezone, exact source timestamps and provenance | Snapshot immutable; another import creates a new revision |
| CreativeSourceSelection | Writer-selected specific source IDs, media ordinals, exact text ranges, and any author-declared relations | Versioned editorial revision; no model call upon selection |
| MemoryVector | Evidence-anchored observations, revisable interpretations, counterreadings and clearly invented artistic proposals | Versioned derivative; original sources unaffected |
| Field | Author-private, read-only working projection of selected materials, images/films and vector propositions | Rebuilt from pinned revisions; no source mutation |
| EditorialSelection | Author's exact candidate items/order, destination intent and any exclusions | Versioned; selection is not release admission |
| PublicationAdmission | Writer's exact destination/edition/material/rights/disclosure approval, bound to digests and decision identity | Append-only receipt; no blanket future authority |
| Edition | Prebuilt immutable public projection (gallery, article, Teatro edition, hearing) with canonical route and lineage | Once released immutable; successor is a new edition |
| ReleaseReceipt | Existing EstatePublisher proof plus independent host/browser read-back | Terminal witness; Git commit is never its substitute |

**Separate private series:** `Contexter/dailies` currently owns the private *A Life in the Making* reflections; this Memory Vector proposal must not ingest or publish it automatically. Neither an old Koken image nor an ordinary Facebook post becomes a Memory Vector merely by being indexed.

## 3. Typed records

Contracts use JSON-compatible records, UTC event times and a source-local calendar `date` with declared timezone. Calendar grouping and source/post identities must not be collapsed. The companion schema is `docs/contracts/memory-vector-publisher-v1.schema.json`.

### Source bundle

- `kind=DailySourceBundle`, `version=1`, unique `bundleId`, `date`, `timezone`, `sourceIndexDigest` and `revision`.
- `entries[]`: unique `entryId`, exact source-system/record identity, source timestamp if recorded, media ordinal (when a post has multiple media), `mediaKind`, source file digest/bytes (if actually verified), availability `verified | reference-only | missing`, rights `unknown | private | review-required | admitted`, and optional provenance evidence IDs.
- Optional explicit `relations[]` distinguish `historical-join`, `co-post`, and `author-declared`. The default relation is **not established**. The bundle retains text-only posts and multiple posts per day. Album membership and order from Koken are retained separately and remain queryable.
- A thumbnail, Wayback derivative or image visually similar to an absent master may be separately catalogued with its own digest but **must not** be silently substituted for the original.

### Vector

- `kind=MemoryVector`, `version=1`, `vectorId`, `bundleId`, `selectionId`, `sourceDigest` and `revision`.
- Each `claim` has `claimId`, `lane=observed | interpreted | invented`, prose, exact source anchors, uncertainty and attribution. Interpretations include an alternative/counterreading. Invented situations do not assert a historical event or relation.
- Formal measures (color, contrast, composition) identify the measuring method and parent asset digest; estimated emotions/motifs are **interpretation**, never objective measurement or newly discovered provenance.
- External model runs require a separate, explicit `ModelEgressGrant` identifying exact outbound images/text ranges, recipient/model, scope and operation. A denial or missing grant yields **no outbound request**. A granted operation is not a publication grant.
- Source hashes are computed at read and checked at projection. An inaccessible original is displayed as **unavailable**, never synthesized as historical evidence.

### Field, selection and edition

- `kind=Field`: private projection referencing exact bundle, selected source entries, vector revision and permitted viewer identity. It contains ordinary image/video controls, accessible captions, missing-source slots, provenance and **Copy link** for both the field and each source. A private link is visibly labeled private and does not imply Internet availability.
- `kind=EditorialSelection`: `selectionId`, immutable list of item/source IDs and order, target intent `gallery | teatro | reading | satzfunk`, writer revision and review state. This is a proposed composition, **not** production authorization.
- `kind=PublicationAdmission`: exact selection and artifact digests, named destination, human writer decision, rights/consent check, AI contribution and disclosure requirement, caption/credit/alt-text acceptance, time and refusal reasons. Missing evidence must fail closed.
- `kind=Edition`: source revision, selected source/derivative digests, `admissionId`, stable destination and route, renderer version and artifact digest. Public web pages contain only admitted assets and text. A hearing is not declared produced merely because a candidate cue exists.

All IDs are opaque and versionable. Never leak private absolute filesystem paths, post contents, model prompts, personal data, credentials or private Store records into this public source repository.

## 4. Operations: the day is not the work

1. **Inspect / ingest:** read a pinned, already admitted private archive index or manually selected source(s) without rewriting them; verify source path containment, symlinks, file signatures, order and digests. Persist a new source snapshot in the existing private source/Store authority. An index entry without readable bytes remains `reference-only`.
2. **Select sources:** the writer explicitly chooses post/media/text identities; preserving date for navigation does not create an artistic lineage claim.
3. **Vector:** form grounded observed claims, uncertain interpretations/counterreadings and distinct inventions. This may be manual. A model is optional and allowed only after bounded author consent using the existing elected client.
4. **Stage Field:** materialize a **private author-facing projection**, not a publicly accessible WLAN archive by assumption. Exact source images or their labeled authorized derivatives appear before machine commentary. No generic queried images. Video players expose native playback and posters from verified footage. Each page/item has a functioning Copy link control.
5. **Editorial selection:** author orders/omits particular media and decides whether the result is gallery, writing, Teatro or Satzfunk material. Rejecting a suggestion must leave original source and unrelated decisions untouched.
6. **Preflight and admit:** present the **exact** candidate, source hashes, caption/credits, AI transformation/disclosure, rights/third-party/personality review, destination, accessibility, and proposed canonical route. Owner approval binds that exact artifact only; changes invalidate the admission.
7. **Build:** the canonical destination owner composes a deterministic static artifact locally or on an admitted builder. Source and artifact hashes must agree; only reviewed/public text and media cross the public boundary. Persistence and publication remain decoupled.
8. **Staging, release and read-back:** stage from the current production baseline plus the selected reviewed delta, verify original estate shell and unrelated domains, inspect Safari/iPad portrait/landscape including browser refresh/cache state, and perform a separately authorized EstatePublisher release. Production machines activate prebuilt immutable artifacts and do not compile them. Final publication exists only after exact-host HTTPS read-back and durable receipt; rollback retains prior release.

There is **no automatic stage-to-production promotion**, GitHub CI, extra CMS, new OAuth ceremony, raw SSH production deployment, second media Store or Store-to-Store synchronization implied here.

## 5. Writer-facing Field semantics

**Page:** source identity / day date and source timezone; visually prominent source photographs and films; a compact attribution/status line; observation/interpretation/invention clearly distinguishable; optional source-anchored margin; author-selectable candidates; exact candidate preview; **Copy link** next to every real page or image/media item. Keep the quiet editorial margin and do not replace the work with forms, popups or dense metadata panels.

**Copy link:** display a copy action in the authored site, not merely in the ChatGPT answer. For HTTP-only local review where the asynchronous Clipboard API may be unavailable, use a tested user-gesture fallback; show an explicit failure state rather than falsely claiming success. Never turn a private link into a supposed public one.

**Koken history:** direct navigation into the original historical set/album/essay/timeline remains separate from the Field. Show original membership positions, even where bytes are missing. A new selected Field may cite Koken objects, but must not rewrite their album order or original public status.

**Source not found:** show `Unavailable: original not recovered`, source ID and recovery status. If a cached derivative is shown, identify it as such. A model cannot fill the empty position with a plausible picture.

## 6. Admission state machine

```text
source-indexed
   └─ source-verified (or explicitly reference-only)
        └─ writer-source-selection
             └─ vector-candidate [optional]
                  └─ private-field-review
                       └─ editorial-selection [revisable / rejectable]
                            └─ rights + exact-artifact preflight
                                 └─ human-publication-admission
                                      └─ immutable-build
                                           └─ staging-verification
                                                └─ EstatePublisher authorization
                                                     └─ public HTTPS read-back
```

Failures preserve the earlier state and original media. Neither model success nor staging visibility upgrades `editorial-selection` to `human-publication-admission`; neither a Git push nor a delivery transfer proves live publication. Expired grants, altered media digests, unresolved rights, broken image loads or missing independent witnesses fail closed.

## 7. Existing-system boundary and milestone

- **Source archives and private creative authoring:** existing Solstice/Reframe source index and FountainStore reference/receipt contracts. Do not duplicate X08/X09's source selector, provider election, model operations or X05's creative dramaturgy. Koken recovery is a distinct historical source adapter; historic album identities must survive.
- **Media:** reuse the current governed media custody or explicitly verified source-mounted offline archive for local reading. FCIS image-publication proposals are not proof that a universal Image Cloud already exists.
- **Domain:** `Fountain-Coach/benedikt-eickhoff.de` owns any future reviewed public pointer projection. The pointer remains **adjacent**, not a fourth top-level estate editorial front. `Contexter/dailies` continues as a separate private owner.
- **Publisher:** the existing EstatePublisher is the sole publication authority. This document has no deployment permission and does not create a new pipeline daemon.

**First bounded proof:** one synthetic two-post day with two different images and one video, one text-only source, an explicitly missing source, and an unrelated same-day Score. Verify that only author-declared associations enter the candidate; a private Field displays original bytes and copy buttons; a writer can reject and revise selections; an attempted unauthorized model call and an unadmitted production release both fail; the existing public pointer remains unchanged.

**Evidence required:** source digest/byte attestation; source relation receipt; separate model grant and exact payload if used; editorial event with who/what/revision; denied and admitted rights results; static build digests; private page browser inspection; stage comparison against live baseline; EstatePublisher receipt; independent HTTPS and iPad/Safari visual witness. Synthetic tests do **not** confer production readiness.

## 8. Acceptance and non-actions

See `docs/acceptance/2026-10-23-memory-vector-publisher-v1.md` for test vectors and release gates. A rejected pilot only withdraws its vector or Field; it never rewrites Koken, deletes source media, touches unrelated Reframe work, or retires previously accepted editions.

**Current state:** specification only. No private archive copied to Git; no rights automatically granted; no recovered originals asserted; no new domain route or deploy; no FCIS chapter changed. Any normative FCIS amendment requires the separately governed FCIS authoring/admission process.

## Authorities consulted

- Reframe: Scenario 010, Scenario 011, X08 and ADR-006 (source identity, selection, model consent and epistemic lanes).
- Governance/FCIS: Chapter 44 (public/private source), Chapter 66 (image publication contract, proposal status), Chapter 148 (artifact-only production), and current published edition authority.
- This repository: `AGENTS.md`, `README.md`, and `docs/decisions/2026-10-22-dailies-pointer-intent.md` (adjacent pointer and distinct dailies).
