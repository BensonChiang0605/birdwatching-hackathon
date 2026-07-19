# PROTOTYPE — Sighting contract

## Question

Does one small Sighting data shape support both the Community Feed and Sighting Detail, while representing an optional nickname, photo-metadata fallbacks, identification uncertainty, live-versus-fixture processing, and a local Like interaction without creating separate models?

This is throwaway prototype code. Its only job is to make the proposed state visible and easy to challenge before the real app is built.

## Run

```bash
node .scratch/birdwatching-hackathon/prototypes/sighting-contract/prototype.mjs
```

Use the displayed single-key controls to push the same Taiwan Blue Magpie fixture through every demo-relevant state.

## Proposed rule

The Sighting is the single UI-facing record. The feed renders a compact projection of it and the detail screen renders the full record; neither owns a second copy. Operational provenance is retained only to distinguish a live result from the rehearsed fixture, and is not presented as bird identity.
