# The Table — how to run it

One self-contained page. No build, no compile, no backend. But **use a local
server**, not a double-click — here is why, and the one line that does it.

## Run it (recommended)

```bash
cd laboratory/table
python3 -m http.server 8000
```

Open **http://localhost:8000/** . That's it.

- Windows: `py -m http.server 8000`
- Node instead of Python: `npx serve` (then open the URL it prints)
- VS Code: the "Live Server" extension → *Open with Live Server*

## Can I just double-click `index.html`?

You can, and the interface will appear — idea, shared state, shelf, rotating
seats, private seat notes. But opened directly the page has the origin `file://`
(the browser calls it `null`), and two things break:

1. **The model-seats won't answer.** Calls to Claude / Gemini / ChatGPT are
   gated by CORS, which keys on origin; a `null` origin is refused. (This is the
   providers' gate, not something the page can override.)
2. **Memory is unreliable.** `localStorage` is disabled on `file://` in Safari
   (works in Chrome/Firefox). On `http://localhost` it is reliable everywhere.

A local static server gives the page a normal `http://localhost` origin, which
fixes both. It serves the same file unchanged — it is not a build and not a
server-side app. It exists only to give the page a real origin.

## The seats answering (optional)

Without any keys the table is still one window: every seat is a private
workspace and nothing is lost. To make the three model-seats answer, open
**⚙ הגדרות / Settings** and paste your own API keys:

- **צמצום / Reduction** → Anthropic (Claude)
- **מערכות / Systems** → Google (Gemini)
- **תרגום / Translation** → OpenAI (ChatGPT)

Keys are stored **only in this browser** (`localStorage`), never in the file and
never sent anywhere except directly to the provider you configured. The
**מציאות / Reality** seat is yours — it has no model; it is where you think and
judge.
