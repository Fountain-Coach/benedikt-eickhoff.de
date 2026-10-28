# Homepage now leads to Works — 28 October 2026

**Author decision:** `https://benedikt-eickhoff.de/` should land at `https://works.benedikt-eickhoff.de/` instead of the existing Personal Pointer demonstration.

This decision **supersedes the homepage placement only** in the 23 October daily Teatro editorial identity. The Memory Vector and daily Teatro Score and Linotype prose retain their artistic/editorial worth and existing deep links; they are not overwritten or copied to Works merely to implement the homepage transition.

## Live observation on 28 October 2026

- `https://benedikt-eickhoff.de/`: HTTPS 200; current Personal Pointer page, 23,644 bytes, served by Caddy.
- `https://www.benedikt-eickhoff.de/`: HTTPS 401 through Caddy (different observed host behavior); do not silently assert it is aliased or already working.
- `https://works.benedikt-eickhoff.de/`: HTTPS 200, existing Works site, 9,855 bytes.
- All three names resolve to the existing hosting IP `65.109.14.71` (Works is CNAME to the apex). No DNS or mail MX record needs alteration for a path-level homepage redirect.

## Minimal requested deployment

The exact public effect is a **server-side homepage-only permanent redirect** from `https://benedikt-eickhoff.de/` to `https://works.benedikt-eickhoff.de/`, without an HTML/JavaScript/meta-refresh intermediary and without redirecting unrelated paths. Retain the current TLS identity, existing Caddy host configuration, all deep links (including any daily-post and historical content), and email/other virtual hosts. Do not replace the entire apex site root or move source media.

**Do not apply by hand on production.** Inspect the currently committed/native EstatePublisher resolver, choose its supported exact-host redirect or server release operation, require plan=available, preserve predecessor, and obtain a typed terminal receipt. If no native operation supports this precise effect, record that concrete missing capability rather than bypassing the publisher. DNS, wildcard redirects, a new hosting service, identity providers and publisher refactors are out of scope.

## Acceptance

- A public request to `https://benedikt-eickhoff.de/` returns a permanent redirect (prefer HTTP 308 if supported, otherwise 301) with exact Location `https://works.benedikt-eickhoff.de/`.
- Following redirects ends at the actual Works site with HTTPS 200; no loop, credentials, placeholders or duplicated branding.
- Representative existing apex deep links have unchanged route behavior, and `works.benedikt-eickhoff.de` original paths still resolve.
- The `www` hostname is separately verified and requires an explicit exact-host change if needed; it is not silently included in the apex-only operation.
- No MX, SPF, DKIM, DNS, private memory images or unrelated estate deployment changes.
- Distinguish Git decision, staging, native production receipt and independent live readback. Git PR alone **does not** redirect the website.

## Related publication hierarchy

The artistic work *Outside Has No ViewBox* is introduced through Works; its original illustrated text can later have a source-admitted First Reading, and its seven-scene Hörspiel a distinct approved First Hearing via Satzfunk. Teatro is the composition instrument, not a publication shelf. The first public work announcement is a Works-owned piece, not a Fountain Coach Essays-first technical promotion. See [private Reframe editorial plan PR #8](https://github.com/Fountain-Coach/Reframe/pull/8) for the full source/take/scene map.
