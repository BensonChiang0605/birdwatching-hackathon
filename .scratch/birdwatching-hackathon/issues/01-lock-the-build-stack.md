# Lock the fastest credible build stack

Type: grilling
Status: resolved
Blocked by:

## Question

Which framework, AI identification service, background-removal method, map component, and storage approach can this team use immediately with credentials already available, while still supporting the rehearsed live-and-cached happy path?

## Comments

- Team confirmation: use Vite + React for the frontend.
- Team confirmation: `OPENAI_API_KEY` and `REPLICATE_API_TOKEN` are configured in `.env`.
- Team confirmation: use Replicate’s `851-labs/background-remover` for the transparent bird cutout.
- Team confirmation: use OpenAI `gpt-5.6-terra` through the Responses API with structured JSON for species identification.
- Team confirmation: proxy both paid API calls through a minimal Express server; React calls only local `/api/identify` and `/api/remove-background` endpoints.
- Team confirmation: render the Sighting location with React Leaflet and standard OpenStreetMap tiles, retaining visible OpenStreetMap attribution.
- Security finding: `.env` is currently untracked but not ignored; it must be added to `.gitignore` before any commit.

## Answer

Use a Vite + React client and a minimal Express server. The server owns the two paid integrations: OpenAI `gpt-5.6-terra` through the Responses API with structured JSON for species identification, and Replicate’s `851-labs/background-remover` for the transparent cutout. The browser calls only the local server endpoints and never receives either provider credential.

Use React Leaflet with standard OpenStreetMap tiles and visible attribution for the Sighting map. Do not add a database: ship pre-seeded Community Feed data and fallback media as static repository fixtures, keep a newly uploaded Sighting in React memory for the current session, and make reload the deterministic demo reset.

Before the first commit, add `.env` to `.gitignore`. Keep `OPENAI_API_KEY` and `REPLICATE_API_TOKEN` server-side and never rename them with Vite’s public `VITE_` prefix.
