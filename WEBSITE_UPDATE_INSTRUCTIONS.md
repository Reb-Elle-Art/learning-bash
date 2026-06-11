# Learning Log Website — Update Instructions

**For Claude agents:** Use this guide when adding new content learned during sessions.

> **June 2026 refactor:** The site is now **data-driven**. All content lives in
> `data.js`; the HTML pages are thin shells rendered by `app.js`. You no longer
> copy-paste HTML card templates. The Flags tab and site-wide search are
> **generated automatically** from the command entries.

---

## Architecture

| File | Role |
|------|------|
| `data.js` | ALL content: commands, blocks, concepts, flag meanings, db entries. **Edit this.** |
| `app.js` | Renderer, site-wide search, deep links, menubar. Rarely needs edits. |
| `style.css` | Shared styles for all pages (incl. mobile rules). |
| `bash-skills.html`, `databases.html` | Empty shells — do not add content here. |
| `databases-learning-path.html` | Still hand-written HTML (bespoke layout). |
| `index.html` | Boot screen / home. |

## Adding a command

Append an object to `LL_DATA.bash.commands` in `data.js`:

```js
{
 "id": "cmd-sed",                  // "cmd-" + lowercase name, non-alnum -> "-"
 "cmd": "sed",
 "desc": "Stream editor",          // one line, shows in card header
 "cat": "files",                   // navigation | files | remote | system (or add a new one)
 "catTitle": "Files & directories",
 "synonyms": ["replace text", "substitute"],   // how you'd search for it when you forget the name
 "flags": ["-i", "-e"],            // chips; MUST each have an entry in flagMeta
 "detail": [                       // ordered blocks, any mix of:
  {"label": "What it does", "type": "text", "html": "..."},
  {"label": "Example", "type": "code", "text": "$ sed 's/old/new/' file.txt"},
  {"label": "Specifiers", "type": "table", "rows": [["%a", "meaning"], ...]}
 ]
}
```

**Flags:** if the flag is new, add it to `LL_DATA.bash.flagMeta`:

```js
"-e": {"meaning": "Expression -- add a script to run"}
```

If the flag means something *different* for this command than its default
meaning, add a variant instead of creating a duplicate:

```js
"-i": {"meaning": "Interactive -- ...", "variants": {"sed": "edit the file in place"}}
```

The Flags tab derives its "Used in" chips from the commands' `flags` arrays —
never edit the flag index by hand.

**Building blocks** go in `LL_DATA.bash.blocks`, **concepts** in
`LL_DATA.bash.concepts`, **database entries** in `LL_DATA.databases.*` — same
block format. Search indexes everything automatically (title + synonyms +
detail text).

## Validate

```bash
node --check data.js        # syntax
# open bash-skills.html in a browser: new card renders, expands, search finds it
```

## Commit and push

```bash
cd /tmp/work/learning-bash
git add data.js
git commit -m "Add sed entry with -i variant note"
git push https://x-access-token:[TOKEN]@github.com/Reb-Elle-Art/learning-bash.git main
```

Token setup and git identity: see GIT_CONFIG.md.

## Deep links

Every entry is linkable: `bash-skills.html#cmd-grep`, `#flag--r`,
`#block-pipe`, `#concept-cli`, `databases.html#db-relational-sql`. Use these in
session summaries.
