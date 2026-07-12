// Identity — realizes P-002 (Identity) and OIS-CORE Axiom 1 (Constitutional Identity).
//
// Constitutional responsibility: identity is the continuity of distinction, not an
// identifier. This module mints the *representation* (Axiom 1: identity survives
// representation); the Kernel guarantees the permanence: no API reassigns or
// retires an identity, ever.
//
// Dependencies: node:crypto only.

import { randomUUID } from "node:crypto";

const KINDS = new Set(["entity", "assertion", "relation", "unknown", "evidence", "participant"]);

export function mintIdentity(kind) {
  if (!KINDS.has(kind)) {
    throw new Error(`unknown constitutional kind: ${kind}`);
  }
  return `od:${kind}:${randomUUID()}`;
}

export function kindOf(identity) {
  const parts = String(identity).split(":");
  return parts.length === 3 && parts[0] === "od" && KINDS.has(parts[1]) ? parts[1] : null;
}
