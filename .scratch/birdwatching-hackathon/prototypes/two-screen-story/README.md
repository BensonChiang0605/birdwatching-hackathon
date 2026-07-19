# PROTOTYPE — Two-screen story

## Question

What should the Community Feed and Sighting Detail screens contain, and in what hierarchy, so a judge understands “turn a bird encounter into a collectible, shareable Sighting in seconds” without explanation?

This is a throwaway, read-only UI prototype. It compares three structurally different mobile directions on one route:

- **A — Field journal:** a warm scrapbook feed with the sticker cutout as the reveal.
- **B — Split specimen:** original and cutout shown together as the primary comparison.
- **C — Activity first:** a denser, Strava-like social activity feed with location and engagement emphasized.

## Run

```bash
node .scratch/birdwatching-hackathon/prototypes/two-screen-story/server.mjs
```

Then open:

```text
http://127.0.0.1:4173/?variant=A&screen=feed
```

Use the floating arrows or keyboard left/right arrows to change variants. Tap Blueberry’s card to move from Community Feed to Sighting Detail.

## Assets

The prototype’s canonical Taiwan Blue Magpie original and sticker images were generated with the built-in image-generation tool for this project. They are deterministic visual fixtures, not claims of a real wildlife observation.
