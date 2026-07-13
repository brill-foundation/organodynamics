# Publishing a Laboratory version

Publication is a **constitutional act, not a Git operation**: it makes the
public Door — the default branch and whatever Vercel serves from it — become
*exactly* the reviewed Record. Because Cohort 1 and every future Participant
evaluate the *published* Laboratory, a divergence between the working Record
and the published Record makes "the Record is the source of truth" false for
the people the Record exists to serve.

This runbook is written so a future steward can publish **without any hidden
knowledge**. Everything mechanical is in `node tools/publish-check.js`;
everything human is below.

---

## Invariants (what "published" must mean, every time)

1. The default branch (`main`), the Vercel production deployment, and the
   canonical Record all point to the same commit.
2. That commit passed the full test suite and constitutional conformance.
3. The publication is reviewed by a human before it becomes public.
4. The published version is identifiable — its commit and its Record tip hash
   are written down (below and in the Record itself).

## The process

### 1. Prepare on the engineering branch

Land all work on the engineering branch and record the session
(`node tools/lab.js seal …`). Then fetch and run the gate:

```
git fetch origin main
node tools/publish-check.js
```

It must print **READY TO PUBLISH**. It verifies: clean working tree, tests
pass, the Record conforms (C1–C8), and that the branch brings its work cleanly
onto `main` (the branch is ahead and `main` carries no content the branch
lacks — true whether the last publish was a fast-forward or a merge-commit PR).
It also prints the **publication identity** — commit, event count, Record tip
hash — which you will confirm after the merge.

If any check is ✗, fix it and re-run. Do not publish past a ✗.

### 2. Open a Pull Request into `main`

A PR is the review mechanism; do not skip it.

- Base: `main` · Compare: the engineering branch.
- Title: `Publish Laboratory — <short description>`.
- Body: paste the publication identity from step 1, and a one-line summary of
  what changed in the arrival experience (since that is what reality reviews).

If the GitHub connector is authorized in your session, the PR can be opened
programmatically; otherwise open it from the branch page on GitHub
(`…/pull/new/<branch>`). Either way, a human reviews it.

### 3. Human review, then merge

The steward performs the final review, then merges the PR. Either merge style
is fine — a fast-forward/rebase merge, or GitHub's standard "Merge pull
request" (a merge commit). The Record's append-only ethic is preserved on the
engineering branch regardless; the only invariant that matters here is that
**`main`'s tree ends up equal to the reviewed tree.** In practice the project
uses GitHub merge-commit PRs, which leave a merge bubble on `main` that the
branch does not carry — this is expected and `publish-check` accounts for it.

### 4. Verify the published Door

After the merge:

```
git fetch origin main
git rev-parse origin/main        # must equal the identity commit from step 1
node tools/conformance.js        # the published Record still conforms
```

Then confirm Vercel:

- The production deployment is building/serving the new `main`.
- The **Vercel production branch is `main`** (Vercel project → Settings → Git).
  This is a project setting outside the repo; it is the one piece of state
  this runbook cannot enforce mechanically, so it is written here explicitly:
  **production branch = `main`.** Verify it once per project; it rarely changes.
- Load the public Door and confirm it shows the current Laboratory (the
  entrance line — "the entrance is one file" — and the Sessions room render).

### 5. Record the publication in the Laboratory

Publication is constitutional, so it leaves a mark in the Record itself:

```
node tools/lab.js observe "Published <commit> to main; production Door serves it. Publication identity: <tip hash>, <N> events." --as <steward> --because "record the published version"
node tools/lab.js seal "Published Laboratory version <commit>." --as <steward> --because "mark the published version in the Record"
```

Now the Record knows which of its own versions is the public one.

---

## Why a tool and not just this document

A checklist in a document is still tribal knowledge — it depends on a human
remembering to run it and reading git state correctly. `publish-check` removes
that dependence: it fetches, computes, and refuses. (This runbook exists
because a publication readiness check once reported wrong numbers when a human
read a stale ref from memory instead of fetching — the exact failure the tool
prevents. That incident is in the Record.)
