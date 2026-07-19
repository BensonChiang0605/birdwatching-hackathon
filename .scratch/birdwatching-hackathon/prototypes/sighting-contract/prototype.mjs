#!/usr/bin/env node

/**
 * PROTOTYPE — throwaway terminal shell for the portable Sighting reducer.
 */

import {
  createDemoSighting,
  updateSighting,
} from "./sighting.mjs";

const bold = "\u001b[1m";
const dim = "\u001b[2m";
const reset = "\u001b[0m";

let sighting = createDemoSighting();

function render() {
  console.clear();
  console.log(`${bold}PROTOTYPE — Sighting contract${reset}`);
  console.log(
    `${dim}One object feeds both the Community Feed and Sighting Detail.${reset}\n`,
  );
  console.log(JSON.stringify(sighting, null, 2));
  console.log(
    `\n${bold}[n]${reset} nickname  ${bold}[m]${reset} metadata location  ${bold}[c]${reset} confidence`,
  );
  console.log(
    `${bold}[f]${reset} live/fixture  ${bold}[l]${reset} like  ${bold}[r]${reset} reset  ${bold}[q]${reset} quit`,
  );
}

function dispatch(type) {
  sighting = updateSighting(sighting, { type });
  render();
}

if (!process.stdin.isTTY) {
  console.error("Run this prototype in an interactive terminal.");
  process.exit(1);
}

process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");
process.stdin.resume();

process.stdin.on("data", (key) => {
  if (key === "q" || key === "\u0003") {
    process.stdin.setRawMode(false);
    process.stdin.pause();
    console.clear();
    process.exit(0);
  }

  const actionByKey = {
    n: "toggle-nickname",
    m: "cycle-location",
    c: "cycle-confidence",
    f: "toggle-processing-mode",
    l: "toggle-like",
    r: "reset",
  };

  if (actionByKey[key]) {
    dispatch(actionByKey[key]);
  }
});

render();
