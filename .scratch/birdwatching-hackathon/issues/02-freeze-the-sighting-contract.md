# Freeze the Sighting contract and demo fixture

Type: prototype
Status: resolved
Blocked by:

## Question

What is the smallest exact Sighting data contract, including source image, cutout, species result, optional nickname, contributor, observed place/time, confidence or uncertainty, and fallback fields, and what single fixture will exercise every demo state?

## Comments

- Prototype asset: [Sighting contract state explorer](../prototypes/sighting-contract/README.md).
- Team confirmation: expose identification confidence only as `high`, `medium`, or `low`; do not present an AI-generated percentage.
- Team confirmation: use a Taiwan Blue Magpie nicknamed “Blueberry” at Yangmingshan National Park as the canonical demo fixture.
- Team confirmation: keep `observedAt` and `postedAt` separate; Detail uses the photo observation time while the Community Feed uses the sharing time.
- Team confirmation: keep media URLs separate from one `provenance` object that records whether identification and cutout results are live or fixture-backed.

## Answer

Use one Sighting record as the source for both the Community Feed card and Sighting Detail:

```js
{
  id,
  contributor: { id, name, avatarUrl },
  observedAt,
  postedAt,
  nickname,
  species: {
    commonName,
    scientificName,
    description,
    confidence: "high" | "medium" | "low"
  },
  media: { originalUrl, cutoutUrl },
  location: {
    source: "exif" | "demo" | "unavailable",
    latitude,
    longitude,
    label
  },
  provenance: {
    mode: "live" | "fixture",
    identification: "openai" | "fixture",
    cutout: "replicate" | "fixture"
  },
  engagement: { likedByViewer, likeCount, commentCount }
}
```

`nickname` is nullable. `latitude` and `longitude` are nullable only when location is unavailable. Keep `observedAt` separate from `postedAt`: Detail describes the encounter time, while the Community Feed describes the sharing time. Confidence is qualitative; never invent a percentage.

The canonical fixture is a high-confidence Taiwan Blue Magpie Sighting contributed by Mei Lin, nicknamed “Blueberry,” observed at Yangmingshan National Park (`25.155744, 121.54762`). It includes a repository-owned original image and cutout, and it can switch as a unit between live OpenAI/Replicate provenance and fixture provenance. The [Sighting contract state explorer](../prototypes/sighting-contract/README.md) demonstrates nickname removal, EXIF/demo/unavailable locations, confidence levels, live/fixture provenance, and Like state.
