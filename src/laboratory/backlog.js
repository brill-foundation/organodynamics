// The engineering backlog — a VIEW over the record, not a new concept.
//
// A backlog item is an ordinary entity (kind "backlog-item") carrying three
// assertions: title, priority (1 = highest), status (open|done|dropped).
// Reprioritizing or closing an item supersedes the relevant assertion, so the
// record automatically preserves every priority the item ever had, who changed
// it, and why (Axiom 3 + obligation 3). The backlog belongs to the Laboratory:
// it lives in the same log as everything else and obeys the same obligations.
//
// Dependencies: none beyond the laboratory shell passed in.

const FIELDS = ["title", "priority", "status"];
const STATUSES = new Set(["open", "done", "dropped"]);

export function deriveBacklog(lab) {
  const s = lab.state();
  const items = [];
  for (const e of s.entities.values()) {
    if (e.kind !== "backlog-item") continue;
    const item = { id: e.id, title: null, priority: null, status: "open", assertionIds: {} };
    for (const a of s.assertions.values()) {
      if (a.about !== e.id || !FIELDS.includes(a.predicate)) continue;
      item[a.predicate] = a.versions.at(-1).value;
      item.assertionIds[a.predicate] = a.id;
    }
    items.push(item);
  }
  items.sort(
    (x, y) =>
      (x.status === "open" ? 0 : 1) - (y.status === "open" ? 0 : 1) ||
      (x.priority ?? 99) - (y.priority ?? 99)
  );
  return items;
}

export function addItem(lab, { title, priority, grounding, provenance }) {
  if (!title) throw new Error("backlog item requires a title");
  if (!Number.isInteger(priority) || priority < 1) throw new Error("priority must be an integer ≥ 1");
  const id = lab.createEntity({ kind: "backlog-item", provenance });
  // the title may be grounded in the observation/judgment that justified the
  // item; priority and status are always conjectures — that is what they are
  lab.assert({ about: id, predicate: "title", value: title, grounding: grounding ?? { kind: "conjecture" }, provenance });
  lab.assert({ about: id, predicate: "priority", value: priority, grounding: { kind: "conjecture" }, provenance });
  lab.assert({ about: id, predicate: "status", value: "open", grounding: { kind: "conjecture" }, provenance });
  return id;
}

function itemOrThrow(lab, id) {
  const item = deriveBacklog(lab).find((i) => i.id === id);
  if (!item) throw new Error(`no backlog item ${id}`);
  return item;
}

export function setPriority(lab, id, priority, provenance) {
  if (!Number.isInteger(priority) || priority < 1) throw new Error("priority must be an integer ≥ 1");
  const item = itemOrThrow(lab, id);
  lab.supersedeAssertion(item.assertionIds.priority, { value: priority, provenance });
}

export function setStatus(lab, id, status, provenance) {
  if (!STATUSES.has(status)) throw new Error(`status must be one of: ${[...STATUSES].join("|")}`);
  const item = itemOrThrow(lab, id);
  lab.supersedeAssertion(item.assertionIds.status, { value: status, provenance });
}
