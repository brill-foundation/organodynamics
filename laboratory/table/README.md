# The Laboratory — how to run it

One folder. No build, no npm, no git, no server, no cloud. The laboratory is
**sovereign**: if Claude, Gemini, ChatGPT, GitHub, and the Internet all vanish,
it still opens and still works.

## Run it — double-click

Open **`index.html`** in a browser. That's the laboratory. The Table, the
Journey Journal, the Shelf, and the Cabinet all work offline, with no server and
no AI.

## The memory travels with the folder (this is the whole point)

The laboratory's memory lives in a file **`laboratory.data.js`** that sits next
to `index.html`.

- Click **💾 שמור לתיקייה / Save to folder** → your browser downloads
  `laboratory.data.js`. **Put it in this folder, beside `index.html`.**
- Next time you open `index.html` — on this computer or any other — that file
  **loads automatically**. The Place comes back.

So the Definition of Done holds literally: **copy this folder to a USB, move it
to another computer, double-click `index.html` — the laboratory opens, with its
memory.** (Also use **📂 פתח / Open** to load a `laboratory.data.js` by hand.)

> Why a *file* and not the browser's storage: `localStorage` lives in the
> browser (the *camera*), not the folder (the *Place*). It does not travel and
> Safari drops it on `file://`. The folder file is the sovereign memory; browser
> storage is only a convenience cache. One honest limit of a double-clicked
> page: it cannot *silently* write to the folder (browser sandbox), so saving is
> one click. Loading is automatic.

## The Cabinet

Everything that enters the laboratory — seat conversations, journal moments,
shelved ideas, printed pages, and files you attach — is kept in the **🗄 Cabinet**,
exactly as it was. Nothing is interpreted, summarized, or auto-organized. It
simply remembers. Open it, search it, select material, and **take it to the
press** to make a new journal page from it. The press only ever builds pages
from material **explicitly retrieved from the Cabinet** — never from hidden AI
memory.

## The craftspeople (AI) are optional

The three model-seats and the AI-assisted press are **invited librarians**, never
the furniture. The laboratory is complete without them.

To invite them, open **⚙** and paste your own API keys (stored only in this
browser):

- **צמצום / Reduction** → Anthropic (Claude)
- **מערכות / Systems** → Google (Gemini)
- **תרגום / Translation** → OpenAI (ChatGPT)

One caveat: a browser may block these API calls from a `file://` page (its origin
is `null`, which CORS refuses). If a seat won't answer, serve the folder locally
so the page has a real origin —

```bash
cd laboratory/table && python3 -m http.server 8000   # then open http://localhost:8000/
```

— but this is **only** needed to invite the AI. The laboratory itself needs
nothing: double-click, and it lives.
