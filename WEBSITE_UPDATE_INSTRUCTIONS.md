# Learning Log Website — Update Instructions

**For Claude agents:** Use this guide when updating bash-skills.html with new content learned during sessions.

---

## Quick Start: Adding New Content

### Step 1: Identify What You're Adding
Is this a:
- **Command** (e.g., `sed`, `chmod`, `grep`)? → Add to **Commands tab**
- **Building block** (e.g., `awk`, `for`, `&&`)? → Add to **Building blocks tab**
- **Concept** (e.g., `Helix`, `CLI`, `shell`)? → Add to **Concepts tab**

### Step 2: Find the Right Location
Consult WEBSITE_STYLE_GUIDE.md "File Structure Reference" section to find:
- The correct tab
- The correct section within that tab
- The right place to insert (alphabetically? by category?)

### Step 3: Copy the Template
Go to WEBSITE_STYLE_GUIDE.md and copy the appropriate template:
- **Command card template** → Copy the full `<div class="card">` structure
- **Building block template** → Copy the full `<div class="block-card">` structure
- **Concept card template** → Copy the full `<div class="concept-card">` structure

### Step 4: Fill in the Blanks
Replace placeholders (in CAPS) with actual content. Examples:
- `COMMAND_NAME` → `sed`
- `ONE-LINE DESCRIPTION` → `Extract lines from files`
- `DESCRIPTION` → A 1–2 sentence explanation
- `examples1`, `example2`, etc. → Real commands with `$` prompts

### Step 5: Validate
Run through the **Validation Checklist** in WEBSITE_STYLE_GUIDE.md:
- [ ] HTML is valid (no unclosed tags)
- [ ] CSS classes match the guide exactly
- [ ] Descriptions are concise
- [ ] Examples are realistic and show different use cases
- [ ] Interactive elements (flag chips, concept links) are correct

### Step 6: Test in Browser
1. Open `bash-skills.html` locally in a browser
2. Click on the new card to verify it expands/collapses
3. Check that styling matches existing cards
4. Verify all links and interactive elements work

### Step 7: Commit and Push
```bash
cd /tmp/work/learning-bash
git add bash-skills.html
git commit -m "Add sed, chmod, Helix entries; verify grep and awk"
git push https://x-access-token:[TOKEN]@github.com/Reb-Elle-Art/learning-bash.git main
```

---

## Detailed Guidelines by Content Type

### Adding a Command Card

**When:** A new bash command should be documented  
**Where:** Commands tab, appropriate section (Files & directories, Remote & SSH, System info & admin)  
**Template to use:** See WEBSITE_STYLE_GUIDE.md → Card Templates → Command Card

**What to include:**
1. **Icon:** Always `⌘`
2. **Command name:** e.g., `sed`, `chmod`, `grep`
3. **Description:** 1 line, under 60 chars. Examples:
   - Good: "Search inside files"
   - Bad: "A utility for searching text patterns in files and directories using regular expressions"
4. **What it does:** 1–2 sentences, plain English. Avoid jargon. Compare to similar commands:
   - Good: "Searches for text inside files. find looks for files, grep looks inside them."
   - Bad: "Implements a pattern-matching algorithm on input streams"
5. **Examples:** 2–4 realistic examples showing different use cases
   - Include the `$` prompt
   - Show both simple and complex variants
   - Use realistic file names and paths
   - Example: 
     ```
     $ grep "error" log.txt
     $ grep -n "error" *.log
     $ grep -r "error" ~/logs/
     ```
6. **Tip:** Optional; only include if there's a gotcha or non-obvious behavior
   - Good tip: "Without -n, matched lines print twice"
   - Bad tip: "This is a powerful tool"
7. **Common flags:** Links to flags documented in the Flags tab
   - Only include flags that already exist in the Flags tab
   - Example: `<span class="flag-chip" onclick="goToFlag('-n')">-n</span>`

**Order within a section:**
- Commands are generally in alphabetical order within their section
- Exception: Related commands can group together (e.g., `grep`, `awk`, `sed` in Text Processing)

---

### Adding a Building Block Card

**When:** A programming construct, operator, or pattern should be documented  
**Where:** Building blocks tab, appropriate section (Symbols & operators, Text Processing, Scripting)  
**Template to use:** See WEBSITE_STYLE_GUIDE.md → Card Templates → Building Block Card

**What to include:**
1. **Symbol:** 1–3 characters (e.g., `~`, `awk`, `for`, `&&`)
2. **Name:** Full name or short description
3. **What it is:** 1–2 sentences explaining what/why
4. **Examples:** 2–4 code examples showing typical use
5. **Key variables/syntax:** Optional; include if there are important details
   - Example for `awk`: Explain `$0`, `$1`, `NR`, `NF`, `BEGIN`, `END`
   - Example for `for`: Show `for ITEM in LIST` syntax

**Order within a section:**
- Symbols: Conventional order (e.g., `~`, `.`, `..`, `|`, `$`, `\`, `&&`, `||`)
- Operators: Logical grouping (e.g., all pipes together)
- Text processing: By command (`grep`, `awk`, `sed`, `for`)
- Scripting: By construct (`if`, `for`, `while`, `function`)

---

### Adding a Concept Card

**When:** A foundational idea or tool should be explained  
**Where:** Concepts tab (no sections; just a grid)  
**Template to use:** See WEBSITE_STYLE_GUIDE.md → Card Templates → Concept Card

**What to include:**
1. **Primary term:** Main concept name (e.g., "Helix", "CLI", "Shell")
2. **Subtitle:** Context or clarification (e.g., "Modern modal text editor", "Command Line Interface")
3. **Explanation:** 2–4 sentences of plain English
   - Assume the reader is new to the topic
   - Compare to familiar concepts when possible
   - Avoid acronyms unless explaining them
4. **Code examples:** Optional; use only if the concept needs clarification
   - Example: Show a shell prompt for "Shell" concept
   - Example: Show basic Helix commands for "Helix" concept

**Order:** Concepts are not ordered; they appear in a responsive grid

---

## Structured Prompt Format for Automated Updates

When Claude runs an automated weekly update task, use this structure:

```markdown
# Weekly Learning Log Update — [Date]

## New Topics Learned This Week
List topics/commands/concepts learned in project conversations:
- [ ] sed (stream editor for line extraction)
- [ ] chmod (make files executable)
- [ ] Helix editor (modal text editor)

## Missing from Website
Check which are already documented, which are missing:
- [ ] sed → NOT FOUND (need to add)
- [ ] chmod → NOT FOUND (need to add)
- [ ] Helix → NOT FOUND (need to add)

## Content to Add
For each missing entry:

### 1. sed (Command)
- **Type:** Command card
- **Location:** Commands tab → Files & directories
- **Description:** Stream editor for extracting lines from files
- **Examples:**
  - `sed -n '10p' file.txt` — print line 10
  - `sed -n '10,20p' file.txt` — print lines 10–20
  - `sed -n '1,5p' file.txt` — print first 5 lines
- **Tip:** -n flag suppresses output; p explicitly prints. Without -n, matched lines print twice.
- **Flags:** -n

### 2. chmod (Command)
- **Type:** Command card
- **Location:** Commands tab → System info & admin (or new section)
- **Description:** Make files executable
- **Examples:**
  - `chmod +x install.sh` — make script executable
  - `./install.sh` — run from current directory
  - `../install.sh` — run from parent directory
  - `/full/path/install.sh` — run from anywhere
- **Tip:** Without ./ or full path, shell only searches $PATH. Current directory not included by default for security.
- **Flags:** +x, +r, +w

### 3. Helix (Concept)
- **Type:** Concept card
- **Location:** Concepts tab
- **Term:** Helix
- **Subtitle:** Modern modal text editor
- **Explanation:** A Vim-inspired modal editor with better defaults. No configuration needed; good for Mac and Linux.
- **Syntax:**
  - Launch: `hx` or `hx filename`
  - Normal mode: navigation and commands (press i to insert)
  - Insert mode: typing text (press Esc to return to normal)
  - Save: `:w`, Quit: `:q`, Save+quit: `:wq`
  - Tutorial: `hx --tutor`
  - Install: `brew install helix` (Mac) or `sudo snap install helix --classic` (Ubuntu)

## Implementation
1. Clone repo → `git clone https://github.com/Reb-Elle-Art/learning-bash.git`
2. Edit `bash-skills.html` with cards from WEBSITE_STYLE_GUIDE.md templates
3. Validate against validation checklist
4. Test in browser
5. Commit and push

## Validation
- [ ] HTML is valid
- [ ] All CSS classes match WEBSITE_STYLE_GUIDE.md
- [ ] No descriptions over 60 chars
- [ ] Examples use correct prompts ($, #, %)
- [ ] Indentation is consistent (2 spaces)
- [ ] Tested in browser; cards expand/collapse correctly
- [ ] Styling matches existing cards exactly
- [ ] No hard-coded styles in cards

## Push Command
```bash
git push https://x-access-token:[TOKEN]@github.com/Reb-Elle-Art/learning-bash.git main
```

## Verification
Wait 2–3 minutes for GitHub Pages rebuild. Check:
- https://reb-elle-art.github.io/learning-bash/bash-skills.html
- Verify all new entries are visible
- Click each to verify expand/collapse works
```

---

## Common Pitfalls & Solutions

| Problem | Cause | Solution |
|---------|-------|----------|
| Cards don't expand/collapse | Missing `onclick="toggleCard()"` | Copy template exactly; don't remove onclick |
| Styling looks wrong | CSS class misspelled | Compare against WEBSITE_STYLE_GUIDE.md; copy from template |
| Examples are hard to read | Extra spaces or wrong line breaks | Check `.dcode` has `white-space: pre-wrap` |
| Flag chips don't link | Flag doesn't exist in Flags tab | Only add chips for flags already documented |
| Text is too small/large | Font size wrong | Body: 11px, labels: 9px, code: 10.5px (exact) |
| Colors are off | Color values don't match palette | Use exact hex codes from WEBSITE_STYLE_GUIDE.md |
| New card is invisible | Wrong parent grid or indentation | Check it's inside the correct `.card-grid`, `.block-grid`, or `.concept-grid` |
| GitHub Pages doesn't update | Forgot to push or typo in commit | Verify with `git log`; wait 2–3 min for rebuild |

---

## When to Create New Sections

Add a new section header (`<div class="section-title">...</div>`) when:
- A new category of commands emerges (e.g., "Database tools", "Container tools")
- Commands don't fit existing sections (Files & directories, Remote & SSH, System info & admin)
- There are 5+ commands in a category that should be grouped

Don't create a new section for just 1–2 commands; add them to the closest existing section.

---

## Scheduled Task Automation

For a weekly automated update task:

1. **Trigger:** Every Monday at 2 AM UTC (or your preferred day/time)
2. **Input:** Project conversation history from the past week
3. **Process:**
   - Scan for new technical terms, commands, concepts
   - Check WEBSITE_STYLE_GUIDE.md for duplicates
   - Generate entries using structured prompt format (above)
   - Clone repo, edit bash-skills.html, validate, test
   - Push if changes exist; skip otherwise
4. **Output:** Git commit log or summary of changes made
5. **Failure handling:** If validation fails, create a task for manual review instead of pushing

---

## Template Checklist: Before You Commit

- [ ] **One type per card** — each entry is command, building block, OR concept (not mixed)
- [ ] **Correct tab** — command in Commands, block in Building blocks, concept in Concepts
- [ ] **Template structure** — all required sections present (icon, description, examples, etc.)
- [ ] **CSS classes exact** — `.card`, `.card-header`, `.card-cmd`, etc. (not custom names)
- [ ] **HTML valid** — all tags closed; no syntax errors
- [ ] **Descriptions concise** — under 60 chars for card titles; 1–2 sentences for details
- [ ] **Examples realistic** — use actual commands, file paths, and prompts
- [ ] **Prompts correct** — `$` for user, `#` for root, `%` for Mac
- [ ] **Flags exist** — flag chips only link to flags in Flags tab
- [ ] **Indentation consistent** — 2 spaces (match existing file)
- [ ] **Colors exact** — hex codes from palette, not close approximations
- [ ] **Font sizes correct** — 9px labels, 10.5px code, 11px body
- [ ] **No hardcoded styles** — use CSS classes instead of `style=""` attributes
- [ ] **Collapsible works** — tested in browser; card expands/collapses on click
- [ ] **Styling matches** — new cards look identical to existing ones
- [ ] **Commit message clear** — "Add sed, chmod, Helix entries; verify grep and awk"

---

## For Future Sessions

1. **After learning something new**, note it in the session summary with:
   - What it is
   - Why it matters
   - Key examples or use cases
2. **During the automated weekly update**, this file will guide Claude to extract that knowledge and add it to the website
3. **Review the changes** in GitHub before merging to verify nothing broke
4. **Iterate** — if styling issues arise, update WEBSITE_STYLE_GUIDE.md and try again
