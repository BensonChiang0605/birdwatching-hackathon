/**
 * PROTOTYPE — portable Sighting state.
 *
 * Question: can one object support feed and detail views while making every
 * hackathon fallback explicit?
 */

const locationStates = [
  {
    source: "exif",
    latitude: 25.155744,
    longitude: 121.54762,
    label: "Yangmingshan National Park, Taipei",
  },
  {
    source: "demo",
    latitude: 25.155744,
    longitude: 121.54762,
    label: "Demo location · Yangmingshan National Park, Taipei",
  },
  {
    source: "unavailable",
    latitude: null,
    longitude: null,
    label: "Location unavailable",
  },
];

const confidenceStates = ["high", "medium", "low"];

export function createDemoSighting() {
  return {
    id: "sighting-demo-taiwan-blue-magpie",
    contributor: {
      id: "user-demo-mei",
      name: "Mei Lin",
      avatarUrl: "/demo/mei-avatar.jpg",
    },
    observedAt: "2026-07-19T09:42:00+08:00",
    postedAt: "2026-07-19T10:03:00+08:00",
    nickname: "Blueberry",
    species: {
      commonName: "Taiwan Blue Magpie",
      scientificName: "Urocissa caerulea",
      description:
        "A striking, long-tailed corvid found only in Taiwan, often moving through wooded areas in lively family groups.",
      confidence: "high",
    },
    media: {
      originalUrl: "/demo/taiwan-blue-magpie-original.jpg",
      cutoutUrl: "/demo/taiwan-blue-magpie-cutout.png",
    },
    location: { ...locationStates[0] },
    provenance: {
      mode: "live",
      identification: "openai",
      cutout: "replicate",
    },
    engagement: {
      likedByViewer: false,
      likeCount: 24,
      commentCount: 3,
    },
  };
}

export function updateSighting(state, action) {
  switch (action.type) {
    case "toggle-nickname":
      return {
        ...state,
        nickname: state.nickname ? null : "Blueberry",
      };

    case "cycle-location": {
      const currentIndex = locationStates.findIndex(
        ({ source }) => source === state.location.source,
      );
      const next = locationStates[(currentIndex + 1) % locationStates.length];
      return { ...state, location: { ...next } };
    }

    case "cycle-confidence": {
      const currentIndex = confidenceStates.indexOf(state.species.confidence);
      const confidence =
        confidenceStates[(currentIndex + 1) % confidenceStates.length];
      return {
        ...state,
        species: { ...state.species, confidence },
      };
    }

    case "toggle-processing-mode": {
      const useFixture = state.provenance.mode === "live";
      return {
        ...state,
        provenance: {
          mode: useFixture ? "fixture" : "live",
          identification: useFixture ? "fixture" : "openai",
          cutout: useFixture ? "fixture" : "replicate",
        },
      };
    }

    case "toggle-like": {
      const likedByViewer = !state.engagement.likedByViewer;
      return {
        ...state,
        engagement: {
          ...state.engagement,
          likedByViewer,
          likeCount:
            state.engagement.likeCount + (likedByViewer ? 1 : -1),
        },
      };
    }

    case "reset":
      return createDemoSighting();

    default:
      return state;
  }
}
