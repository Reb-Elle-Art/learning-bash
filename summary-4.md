# Summary 4 -- Bash Learning, Website Build-Out, and Database Curriculum

**Date:** June 9, 2026
**Session type:** Ongoing learning + web development + curriculum design

---

## Session Overview

A long, wide-ranging session covering three parallel threads:

1. **Bash / CLI learning** -- continued hands-on learning on Ubuntu VM (Enid) accessed via Tailscale SSH from macOS Tahoe
2. **learning .log website** -- significant build-out of the GitHub Pages site, now serving multiple interactive reference modules
3. **Database curriculum** -- designed and built a structured learning path for databases, from scratch to evaluation-ready

---

## Part 1 -- Bash & CLI Learning

### Topics Covered

- SSH recap -- confirmed ssh user@hostname pattern with Tailscale, using either IP or MagicDNS hostname
- Shell identification -- confirmed zsh on Mac, bash on Ubuntu VM
- Ubuntu version -- Ubuntu 24.04.4 LTS (Noble Numbat)
- Navigation fundamentals -- pwd, ls, cd, hostname, whoami
- File viewing -- cat, less, head, tail
- File info -- wc -lw, file, ls -lh, ls -lah, du -sh
- File operations -- mv, cp, rm -r, mkdir
- Search -- find with -name and -exec, grep with flags
- Remote operations -- scp patterns (with and without -r, using * for contents vs directory)
- System admin -- sudo, sudo su, passwd, exit, sudo reboot
- Software install -- brew install (Mac), apt install (Ubuntu)
- Services -- systemctl status/start/stop/restart
- Text processing -- pandoc for file conversion, for loops for batch conversion
- Operators -- ; vs &&, pipe |, $() command substitution, > and >> redirection, \ for escaping spaces
- awk -- introduced at big-picture level with caveat that it's a deep topic
- nginx -- installed and configured on Ubuntu VM

### Key Commands Introduced

```bash
# Check shell
echo $SHELL

# Navigation
pwd && ls -lah && cd /var/www/html

# File size
du -sh myfolder/
du -sh *

# Find and execute
find . -name "*.rtf" -exec pandoc {} -o {}.md \;

# Batch convert with loop
for f in $(find . -name "*.txt"); do
  pandoc "$f" -o ~/destination/"${f%.txt}.md"
done

# SCP patterns
scp user@host:~/folder/* ~/Desktop/        # contents only
scp -r user@host:~/folder/ ~/Desktop/      # whole directory

# Change root password
sudo passwd root

# Restart machine
sudo reboot

# Nginx
sudo apt install nginx
sudo systemctl status nginx

# Go back to regular user after sudo su
exit
whoami
```

### Decisions Made

- **Helix** is the preferred editor on both Mac and Ubuntu. Install via `brew install helix` (Mac) or `sudo snap install helix --classic` (Ubuntu). Launch with `hx` or `hx filename`.
- **Pandoc** installed on both machines for document conversion.
- **nginx** installed on Ubuntu VM (Enid) to serve static HTML files.

---

## Part 2 -- learning .log Website

### Site Overview

A System 7 / Mac OS aesthetic static site hosted on GitHub Pages.

**URL:** https://reb-elle-art.github.io/learning-bash/
**Repo:** https://github.com/Reb-Elle-Art/learning-bash

### File Structure

```
learning-bash/
├── index.html                      # Landing page (System 7 desktop aesthetic)
├── bash-skills.html                # Interactive bash reference (4 tabs)
├── databases.html                  # Database reference (4 tabs)
├── databases-learning-path.html    # Database learning path (4 tabs)
├── README.md
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-32.gif
├── favicon-48.gif
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

### Design System

- **Background:** `#4a6a8a` pinstripe desktop (repeating-linear-gradient)
- **Window chrome:** gradient titlebar, close box, `#d4d0c8` background
- **Tab nav:** `#bab7b0` bar, `#eae7e0` active tab
- **Content area:** `#eae7e0`
- **Cards:** `#f0ede6` with `border: 1.5px solid #888` and `box-shadow: 2px 2px 0 #aaa`
- **Code blocks:** `background: #1a1a1a; color: #c8e0a8`
- **Font:** DM Mono (monospace) + DM Serif Display (headings)
- **Apple menu:** hover dropdown from &#63743; in menubar -- "Return to learning .log" is always first item
- **Window footer:** gradient `#c8c5be` to `#b8b5ae`, "enid & anazial" left, date right

### Navigation Pattern

- All module pages have an Apple menu (&#63743;) in the menubar that drops down on hover
- Dropdown always includes "Return to learning .log" as first item, then links to other modules
- Tab toggles fire only on the header row -- links inside expanded cards use `event.stopPropagation()` to prevent collapse

### bash-skills.html Structure

Four tabs:
- **Commands** -- filterable by category (Navigation, Files, Remote & SSH, System). Each card expands with description, examples, common flags.
- **Building blocks** -- path symbols, wildcards, operators, scripting. Includes expanded pipe and grep entries, big-picture awk with caveat.
- **Flags** -- index of common flags (-r, -a, -h, -l, -f, -i, -s, -n, -w, -o, -exec, -name) with which commands use them
- **Concepts** -- CLI, Shell, Absolute vs relative paths, sudo, Hidden files, Package managers, Git, nginx, LTS, .bak convention, Tailscale & SSH, Markdown

### databases.html Structure

Four tabs:
- **Categories** -- 6 database types (Relational, Document, Key-value, Graph, Time-series, Columnar), each expandable with how it works, good for, example, key idea
- **Concepts** -- Schema, SQL, NoSQL, Primary key, Foreign key, Index, CRUD, Transaction, ACID, ORM
- **Applications** -- Real world examples (Instagram/PostgreSQL, Airbnb/MongoDB, Twitter/Redis, LinkedIn/Neo4j, Cloudflare/InfluxDB, Spotify/BigQuery) with why that database was chosen and tradeoffs. Also a Brand Name Directory.
- **Queries** -- placeholder, coming soon

### databases-learning-path.html Structure

Four tabs:
- **Overview** -- Concentric circle model (Core → Middle ring → Outer ring → Resource hub), expandable. Note on time.
- **The path** -- Phase cards for each stage: SQL concepts, then Relational, Vector, Document, Key-value, Graph, then Evaluating. Each card has: why, what to internalize, deep dive instructions, watch for / key question, what done looks like, working links to resources.
- **Evaluating** -- Questions about the data (structure, relationships, query type, write patterns). Questions about the recommendation (why this specifically, tradeoffs, scale, layered vs single, default vs right). Worked example using knowledge base system pattern.
- **Resources** -- All links organized by ring: Core (SQL gamified + interactive), Middle ring (sandboxes), Reading (comparisons and concepts).

### Deployment

- GitHub Pages, branch: main, folder: / (root)
- Rebuilds automatically on push
- Favicon: animated .gif (48px, 32px) with .png and .ico fallbacks. Terminal prompt `>_` design.

---

## Part 3 -- Database Curriculum Design

### Goal

To be a smart decision-maker and evaluator of database choices -- not a database engineer. Able to scope out the right database for a project and intelligently evaluate recommendations from developers or agents.

### Learning Style

- Prefers structured outlines and reading
- Hands-on SQL via gamified resources (SQL Murder Mystery, SQL Noir)
- Video least preferred
- No fixed deadline -- "a couple hours a week, no stopping until I understand it"

### The Concentric Circle Model

**Core (~10 hours):** SQL as a mental model. Tables, rows, columns, keys, JOINs, schema, ACID. Marker: can read a SQL query and explain it.

**Middle ring (~15 hours):** One deep-dive per category in this order:
1. Relational / PostgreSQL (~3 hrs)
2. Vector databases (~3 hrs) -- prioritized because modern AI systems almost always involve a semantic search layer
3. Document / MongoDB (~3 hrs)
4. Key-value / Redis (~2 hrs)
5. Graph / Neo4j (~3 hrs)

**Outer ring (ongoing):** Decision making and evaluation. No fixed endpoint -- this is the goal.

### Source Documents (uploaded this session)

- `database-learning-path.md` -- draft learning path, basis for the curriculum
- `database-research-sources.md` -- curated research sources organized by type

---

## Artifacts Created / Modified This Session

| File | Action | Notes |
|------|--------|-------|
| `bash-skills.html` | Updated | Expanded grep, pipe, awk entries. Apple menu navigation. |
| `databases.html` | Updated | Added Applications tab. Apple menu. Restyled to System 7. |
| `databases-learning-path.html` | Created | Full 4-tab learning path page |
| `index.html` | Updated | Added databases and learning path links |
| `summary-4.md` | Created | This document |

---

## Open Items / Next Steps

### Website
- [ ] Add more entries to bash-skills as new commands are learned
- [ ] Build out the Queries tab on databases.html (SQL queries, JOINs, etc.)
- [ ] awk deserves its own expanded entry as it gets used in practice
- [ ] grep and pipe entries flagged for further expansion
- [ ] Consider adding a vector databases section to databases.html categories

### Learning
- [ ] Start SQL Murder Mystery (https://mystery.knightlab.com) -- first hands-on SQL
- [ ] Work through Select Star SQL or SQLBolt for syntax grounding
- [ ] Phase 1 of middle ring: PostgreSQL deep dive via Applications tab + SQLBolt JOINs
- [ ] Phase 2: Vector -- Coursera explainer then Weaviate sandbox

### Infrastructure
- [ ] **Regenerate GitHub PAT** -- the token was exposed in chat twice this session. Go to https://github.com/settings/tokens and regenerate immediately.
- [ ] Confirm `.profile` persistence in a-Shell mini for `LLM_API_KEY` (open from previous session)
- [ ] Confirm `agent.py` runs end-to-end in a-Shell mini (open from previous session)

---

## Context for Continuing in a New Environment

### Machines
- **Mac:** macOS Tahoe 26.3.1, Apple Silicon, zsh. Username confirmed in Tailscale.
- **Ubuntu VM (Enid):** Ubuntu 24.04.4 LTS (Noble Numbat), bash. Accessed via `ssh user@enid` over Tailscale. nginx running and serving from `/var/www/html/`.
- **iPad:** a-Shell mini, Python stdlib only, Obsidian vault (EMAI) with agent.py at vault root.

### GitHub Workflow
- Repo: https://github.com/Reb-Elle-Art/learning-bash
- GitHub username: Reb-Elle-Art
- Pages URL: https://reb-elle-art.github.io/learning-bash/
- To push changes: clone repo, make edits, git add / commit / push with PAT as password
- PAT needs to be regenerated (see open items)

### Website Tech Notes
- Pure HTML/CSS/JS -- no build tools, no frameworks
- All pages self-contained single files
- Cards toggle open/close via `toggleCard(el)` -- `el.classList.toggle('open')`
- Tab switching via `switchTab(name, el)` 
- Links inside cards need `onclick="event.stopPropagation()"` to prevent card collapse
- System 7 aesthetic must be maintained on all new pages -- follow the design system above

### Tone / Approach Notes
- Explanations should include the "why" behind commands, not just the syntax
- New terms should be defined when first used
- Learning is iterative -- she experiments independently and asks follow-up questions
- References to "Enid & Anazial" in page footers -- these are just names, no specific attribution needed
