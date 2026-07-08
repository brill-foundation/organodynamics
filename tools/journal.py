#!/usr/bin/env python3
"""ods-journal — minimum viable journal for EXPERIMENT-001.

Substrate (RFC-004 §6): an append-only, hash-chained journal of events.
Each line of journal/journal.jsonl is one event:

    {"id":   sha256 over (prev + canonical body),
     "prev": id of the previous event, or null for the genesis event,
     "body": {"at":      ISO-8601 UTC timestamp,
              "process": the committing process,
              "class":   provenance class (e.g. human, llm, tool),
              "content": free text — the substrate assigns it no meaning,
              "refs":    [{"to": event-id, "label": optional string}]}}

Per RFC-004 §2 and §14 the substrate is meaning-free: labels are stored as
declared, never interpreted here. The `lineage` command is lens-0 v1 — the
first declared lens — and prints its coordinates (at-event, lens-version)
with every reading, per RFC-004 §6 item 6.

Deliberate naivety, registered as EXPERIMENT-001 H5: the chain is linear,
so two processes appending concurrently will conflict. That contradiction
is an expected experimental result, not an oversight.

This tool keeps no per-person statistics and must never grow any
(RFC-004 invariant 5).
"""

import argparse
import hashlib
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

JOURNAL = Path(__file__).resolve().parent.parent / "journal" / "journal.jsonl"
LENS0_VERSION = "lens-0 v1"


def canonical(obj):
    return json.dumps(obj, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


def event_id(prev, body):
    return hashlib.sha256(((prev or "") + canonical(body)).encode("utf-8")).hexdigest()


def read_events():
    if not JOURNAL.exists():
        return []
    events = []
    with JOURNAL.open() as f:
        for n, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            try:
                events.append(json.loads(line))
            except json.JSONDecodeError as e:
                sys.exit(f"corrupt journal at line {n}: {e}")
    return events


def verify(events, quiet=False):
    prev = None
    for n, ev in enumerate(events, 1):
        if ev.get("prev") != prev:
            sys.exit(f"chain break at event {n}: prev {ev.get('prev')!r} != {prev!r}")
        expect = event_id(ev.get("prev"), ev["body"])
        if ev.get("id") != expect:
            sys.exit(f"hash mismatch at event {n}: id {ev.get('id')} != {expect}")
        for ref in ev["body"].get("refs", []):
            if not any(e["id"] == ref["to"] for e in events[: n - 1]):
                sys.exit(f"event {n} references unknown/future event {ref['to'][:12]}")
        prev = ev["id"]
    if not quiet:
        print(f"ok: {len(events)} events, chain intact, tip {prev[:12] if prev else '(empty)'}")
    return prev


def resolve(events, prefix):
    hits = [e for e in events if e["id"].startswith(prefix)]
    if not hits:
        sys.exit(f"no event matches {prefix!r}")
    if len(hits) > 1:
        sys.exit(f"ambiguous prefix {prefix!r} ({len(hits)} matches)")
    return hits[0]


def cmd_append(args):
    events = read_events()
    prev = verify(events, quiet=True)
    refs = []
    for r in args.ref or []:
        to, _, label = r.partition(":")
        target = resolve(events, to)
        ref = {"to": target["id"]}
        if label:
            ref["label"] = label
        refs.append(ref)
    body = {
        "at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "process": args.process,
        "class": args.cls,
        "content": args.content,
        "refs": refs,
    }
    ev = {"id": event_id(prev, body), "prev": prev, "body": body}
    JOURNAL.parent.mkdir(parents=True, exist_ok=True)
    with JOURNAL.open("a") as f:
        f.write(canonical(ev) + "\n")
    print(ev["id"])


def cmd_verify(_args):
    verify(read_events())


def cmd_show(args):
    ev = resolve(read_events(), args.id)
    print(json.dumps(ev, indent=2, ensure_ascii=False))


def cmd_lineage(args):
    events = read_events()
    verify(events, quiet=True)
    by_id = {e["id"]: e for e in events}
    root = resolve(events, args.id)
    print(f"# reading: lineage of {root['id'][:12]}")
    print(f"# coordinates: at-event={events[-1]['id'][:12]} {LENS0_VERSION}")

    def walk(ev, label, depth, seen):
        head = ev["body"]["content"].splitlines()[0]
        edge = f"--{label}--> " if label else ""
        mark = " (…)" if ev["id"] in seen else ""
        print(f"{'  ' * depth}{edge}[{ev['id'][:12]}] {ev['body']['at']} "
              f"{ev['body']['process']}/{ev['body']['class']}: {head}{mark}")
        if ev["id"] in seen:
            return
        seen.add(ev["id"])
        for ref in ev["body"].get("refs", []):
            walk(by_id[ref["to"]], ref.get("label", ""), depth + 1, seen)

    walk(root, "", 0, set())


def main():
    p = argparse.ArgumentParser(prog="journal", description=__doc__.splitlines()[0])
    sub = p.add_subparsers(dest="cmd", required=True)

    a = sub.add_parser("append", help="commit an event")
    a.add_argument("--process", required=True)
    a.add_argument("--class", dest="cls", required=True)
    a.add_argument("--content", required=True)
    a.add_argument("--ref", action="append", metavar="EVENT[:LABEL]",
                   help="declared reference; label semantics belong to lenses")
    a.set_defaults(fn=cmd_append)

    sub.add_parser("verify", help="verify the hash chain").set_defaults(fn=cmd_verify)

    s = sub.add_parser("show", help="print one event")
    s.add_argument("id")
    s.set_defaults(fn=cmd_show)

    l = sub.add_parser("lineage", help="lens-0 v1: render declared lineage")
    l.add_argument("id")
    l.set_defaults(fn=cmd_lineage)

    args = p.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
