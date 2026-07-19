#!/usr/bin/env node

/**
 * PROTOTYPE — tiny static server. No production hardening intended.
 */

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = 4173;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
};

createServer(async (request, response) => {
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
  const requested = pathname === "/" ? "index.html" : pathname.slice(1);
  const safePath = normalize(requested).replace(/^(\.\.(\/|\\|$))+/, "");

  try {
    const body = await readFile(join(root, safePath));
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(safePath)] ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Prototype asset not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(
    `Two-screen prototype: http://127.0.0.1:${port}/?variant=A&screen=feed`,
  );
});
