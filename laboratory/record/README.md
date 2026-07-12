# You have arrived at the Laboratory

This directory is the Laboratory's record: an append-only, hash-chained event
log (`log.jsonl`) from which the entire state of the place is derived. Nothing
else holds memory. If it is not in the log, it did not happen.

**Start with the Arrival Kit — it was written for you:**

- [`../arrival/WELCOME.md`](../arrival/WELCOME.md) — what this place is
- [`../arrival/QUICK_START.md`](../arrival/QUICK_START.md) — arrival to first
  contribution in five minutes
- [`../arrival/PARTICIPANT_GUIDE.md`](../arrival/PARTICIPANT_GUIDE.md) — how
  to work here well
- [`../arrival/LAB_PROTOCOL.md`](../arrival/LAB_PROTOCOL.md) — the five
  obligations, and which parts of this place are law vs. machinery
- [`../arrival/HOST_GUIDE.md`](../arrival/HOST_GUIDE.md) — inviting others
- [`../arrival/TROUBLESHOOTING.md`](../arrival/TROUBLESHOOTING.md) — recovery

To see the current state right now (from the repository root):

```
node tools/lab.js status      # participants, last handoff, open unknowns
node tools/lab.js sessions    # the work so far, partitioned by seals
node tools/lab.js verify      # mechanical integrity check
node tools/backlog.js         # the Laboratory's own engineering backlog
```

No tool is required to understand the record: read `log.jsonl` directly (one
JSON event per line), or open this directory through the Door in a browser —
the page renders the sessions and re-verifies the chain client-side.

The frozen law of the place is [`../PROTOCOL.md`](../PROTOCOL.md). The success
test is unchanged: if you can understand this Laboratory, continue its work,
and leave it better using only what you found here — it has succeeded. If you
cannot, record that failure before you leave; it is a finding.
