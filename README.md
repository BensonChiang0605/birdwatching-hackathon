# Birdwatching

A Strava-inspired social birdwatching app for a Codex hackathon.

Turn a bird encounter into a collectible, shareable Sighting in seconds: upload a photo, identify the species with AI, remove the background to create a sticker-style cutout, preserve the observation time and location, optionally nickname the bird, and share it with the community.

## Current prototype

The repository currently contains the product plan, data-contract prototype, and three switchable mobile UI directions. The recommended direction is **A — Field journal**.

```bash
node .scratch/birdwatching-hackathon/prototypes/two-screen-story/server.mjs
```

Open [http://127.0.0.1:4173/?variant=A&screen=feed](http://127.0.0.1:4173/?variant=A&screen=feed).

Use the floating arrows or the keyboard arrow keys to compare all three directions. Tap the Taiwan Blue Magpie card to open its Sighting Detail screen.

## Planned hackathon stack

- Vite + React frontend
- Minimal Express API server
- OpenAI Responses API for structured species identification
- Replicate `851-labs/background-remover` for sticker cutouts
- React Leaflet with OpenStreetMap tiles
- Static fixtures plus an in-memory Sighting for a reliable one-minute demo

## Local setup

Copy `.env.example` to `.env` and add your own credentials:

```dotenv
OPENAI_API_KEY=
REPLICATE_API_TOKEN=
```

Never commit `.env`. API calls must go through the server so credentials are not exposed in browser code.

## Project notes

- [Shared domain language](./CONTEXT.md)
- [Hackathon decision map](./.scratch/birdwatching-hackathon/map.md)
- [UI prototype notes](./.scratch/birdwatching-hackathon/prototypes/two-screen-story/README.md)

