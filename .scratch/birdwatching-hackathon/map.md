# Make the 90-minute birdwatching demo buildable

Label: wayfinder:map

## Destination

A build-ready product, technical, and presentation specification that lets the team implement and reliably demonstrate one end-to-end Sighting flow plus a convincing Community Feed within 90 minutes.

## Notes

- Use the `grilling` and `domain-modeling` skills while resolving decisions.
- Optimize for a reliable one-minute demo, not production completeness.
- The memorable promise is: “Turn a bird encounter into a collectible, shareable sighting in seconds.”
- Every upload creates a Sighting; the product does not claim to recognize an individual bird across photos.
- Attempt live AI identification and background removal, but keep a deterministic cached result for the rehearsed photo.
- Missing photo GPS must not fail the flow. The rehearsed photo may use a clearly labelled demo location.
- The Community Feed is pre-seeded. Like works locally; Comment and Share may be lightweight demo interactions.
- Use the supplied visual reference as a principle, not a screen to copy: isolate the bird as a playful sticker-like cutout with a soft white outline, generous white space, and a warm field-journal feel.

## Decisions so far

- [Lock the fastest credible build stack](./issues/01-lock-the-build-stack.md) — Use Vite + React, a minimal Express API boundary, OpenAI and Replicate for live processing, React Leaflet for maps, and fixture-backed in-memory demo state.
- [Freeze the Sighting contract and demo fixture](./issues/02-freeze-the-sighting-contract.md) — One Sighting record feeds both screens, keeps fallbacks explicit, and uses “Blueberry” the Taiwan Blue Magpie at Yangmingshan as the deterministic fixture.

## Not yet specified

- If time remains after the core path is stable, decide whether the next increment should deepen capture, community interaction, or the personal collection.

## Out of scope

- Authentication, user registration, profiles, and permissions.
- A production database, real-time multi-user updates, and production media storage.
- Persisted comments, a real share graph, notifications, follows, and moderation.
- Recognition of the same individual bird across multiple Sightings.
- Native mobile packaging, offline capture, routes, challenges, leaderboards, and Strava-style analytics.
- Perfect metadata recovery for images whose GPS or capture time has been removed.
