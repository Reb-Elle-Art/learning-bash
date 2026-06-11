> **NOTE (June 2026):** The HTML card templates below are **superseded** — content
> is now added as entries in `data.js` (see WEBSITE_UPDATE_INSTRUCTIONS.md).
> This guide remains the reference for visual style, tone, and writing conventions.

# Learning Log Website — Style Guide & Formatting Rules

**Last updated:** June 9, 2026  
**Purpose:** Preserve visual consistency and HTML structure when adding new content to bash-skills.html

---

## Color Palette (System 7 / Mac OS Aesthetic)

```
Primary navy:     #4a6a8a
Light navy:       #2a4a6a
Pinstripe bg:     #4a6a8a (tiled pattern)
Card bg:          #f0ede6
Light card:       #eae7e0
Text primary:     #1a1a1a (dark)
Text secondary:   #555 (medium gray)
Text hint:        #888 (light gray)
Code bg:          #1a1a1a
Code text:        #c8e0a8 (pale green)
Border:           #888
Shadow:           #aaa
```

---

## Typography

- **Body font:** `DM Mono` (monospace)
- **Heading font:** `DM Serif Display` (serif)
- **Body size:** 11px
- **Label size:** 9px (uppercase, letter-spacing: 0.18em)
- **Command name:** 12–15px bold
- **Code blocks:** 10.5px, monospace

---

## Card Templates

### 1. Command Card (e.g., `grep`, `sed`, `chmod`)

**Location in HTML:** Inside `.card-grid` within Commands tab  
**CSS classes:** `.card`, `.card-header`, `.card-detail`

```html
<div class="card">
  <div class="card-header" onclick="toggleCard(this.closest('.card'))">
    <span class="card-icon">⌘</span>
    <span class="card-cmd">COMMAND_NAME</span>
    <span class="card-desc">ONE-LINE DESCRIPTION</span>
    <span class="chevron">▾</span>
  </div>
  <div class="card-detail">
    <div class="dlabel">What it does</div>
    <div class="dtext">DESCRIPTION (1–2 sentences, max 280 chars)</div>
    
    <div class="dlabel">Examples</div>
    <code class="dcode">$ example1
$ example2
$ example3</code>
    
    <div class="dlabel">Tip</div>
    <div class="dtext">HELPFUL NOTE (optional; omit if not needed)</div>
    
    <div class="dlabel">Common flags</div>
    <div class="flag-row">
      <span class="flag-chip" onclick="goToFlag('-flag1')">-flag1</span>
      <span class="flag-chip" onclick="goToFlag('-flag2')">-flag2</span>
    </div>
  </div>
</div>
```

**Rules:**
- Icon is always `⌘` (command icon)
- Description must be short (under 60 chars)
- `What it does` should be plain language, not technical jargon
- Examples use `$` prompt (or `#` for root, `%` for Mac)
- Multiple examples should show common use cases and variants
- Tip section is optional—include only if there's a pitfall or gotcha
- Common flags link to the Flags tab via `goToFlag('-flag')`; only include if flags are already documented in Flags tab
- If no flags exist yet, omit the "Common flags" section entirely

---

### 2. Building Block Card (e.g., `~`, `.`, `..`, `awk`, `for loop`)

**Location in HTML:** Inside `.block-grid` within Building Blocks tab  
**CSS classes:** `.block-card`, `.block-header`, `.block-detail`

```html
<div class="block-card">
  <div class="block-header" onclick="toggleCard(this.closest('.block-card'))">
    <div>
      <div class="block-symbol">SYMBOL</div>
      <div class="block-name">NAME</div>
    </div>
    <span class="chevron">▾</span>
  </div>
  <div class="block-detail">
    <div class="dlabel">What it is</div>
    <div class="dtext">DESCRIPTION</div>
    
    <div class="dlabel">Examples</div>
    <code class="dcode">$ example1
$ example2</code>
    
    <div class="dlabel">Key variables / syntax</div>
    <div class="dtext">OPTIONAL detailed syntax explanation</div>
  </div>
</div>
```

**Rules:**
- `block-symbol` is 1–3 characters (e.g., `~`, `..`, `awk`, `for`)
- `block-name` is the full name or short description
- Use `What it is` (not `What it does`)
- Building blocks are patterns, operators, or language constructs—not individual commands
- Include key variables or syntax details if applicable (e.g., `BEGIN`, `END`, `NR`, `NF` for `awk`)

---

### 3. Concept Card (e.g., `CLI`, `Shell`, `Helix`)

**Location in HTML:** Inside `.concept-grid` within Concepts tab  
**CSS classes:** `.concept-card`, `.concept-header`, `.concept-detail`

```html
<div class="concept-card">
  <div class="concept-header" onclick="toggleCard(this.closest('.concept-card'))">
    <div>
      <div class="concept-term">PRIMARY_TERM</div>
      <div class="concept-sub">Subtitle or context</div>
    </div>
    <span class="chevron">▾</span>
  </div>
  <div class="concept-detail">
    <div class="dtext">EXPLANATION (2–4 sentences, plain English)</div>
    <code class="dcode" style="margin-top:8px;">$ example command
output here</code>
  </div>
</div>
```

**Rules:**
- `concept-term` is bold primary term (e.g., "Helix", "CLI")
- `concept-sub` is subtitle (e.g., "Modern modal text editor", "Command Line Interface")
- Use `dtext` for explanation (no special label needed)
- Code examples are optional; include only if they clarify the concept
- Keep explanations conversational, not encyclopedic

---

## Section Headers

Sections within a tab use this HTML:

```html
<div class="section-title">SECTION_NAME</div>
```

**Current sections:**
- Commands tab: "Files & directories", "Remote & SSH", "System info & admin"
- Building blocks tab: "Symbols & operators", "Text Processing", "Scripting"
- Concepts tab: (no section headers; just a grid)

**Rules:**
- Use title case: "Remote & SSH", not "remote & ssh"
- Place section headers **before** the grid they organize
- Keep section names concise (2–4 words max)

---

## CSS Class Hierarchy

```
Cards:
  .card-grid
    .card
      .card-header (onclick toggleCard)
        .card-icon
        .card-cmd
        .card-desc
        .chevron
      .card-detail (display:none by default; shows when .open)
        .dlabel
        .dtext
        .dcode
        .flag-row
          .flag-chip

Blocks:
  .block-grid
    .block-card
      .block-header
        .block-symbol
        .block-name
        .chevron
      .block-detail
        .dlabel
        .dtext
        .dcode

Concepts:
  .concept-grid
    .concept-card
      .concept-header
        .concept-term
        .concept-sub
        .chevron
      .concept-detail
        .dtext
        .dcode (optional)
```

---

## Important CSS Rules

### Collapsible behavior
- Cards, blocks, and concepts are collapsible via `toggleCard()` JavaScript function
- When open, the parent element (`.card`, `.block-card`, `.concept-card`) gets class `.open`
- `.open .card-detail { display: block; }` — this rule must never be removed
- Default state: `display: none` on detail sections (collapsed)

### Spacing rules
- `.dlabel` has `margin-top: 10px` (except `:first-child` which has `margin-top: 0`)
- `.dlabel` is always uppercase and gray (`#888`)
- `.dtext` is `font-size: 11px`, `color: #222`, `line-height: 1.75`
- `.dcode` has `white-space: pre-wrap` (preserves line breaks)

### Interactive elements
- `.flag-chip` and `.cmd-chip` change color on hover (→ `#4a6a8a` with white text)
- `.concept-card` has left border: `border-left: 4px solid #4a6a8a;`
- All cards have drop shadow: `box-shadow: 2px 2px 0 #aaa;`

---

## Formatting Best Practices

### Examples in code blocks
- Use realistic paths (e.g., `~/documents/`, `/home/user/`, `~/research/`)
- Show both the command and the output when helpful
- Separate multiple commands with blank lines
- Use `$ ` prompt for user commands, `# ` for root, `% ` for Mac
- Show flags in use: `$ grep -r "pattern" ~/docs` (not just `grep -r`)

### Descriptions
- Use present tense: "Searches for text" (not "Search" or "will search")
- Avoid jargon; explain in terms of what the user sees/does
- Keep to 1–2 sentences unless genuinely necessary
- Analogies help: "find looks for files, grep looks inside them"

### Tips and gotchas
- Highlight common mistakes: "Without -n, matched lines print twice"
- Explain non-obvious behavior: "Current directory not included in $PATH by default for security"
- Point to related commands: "Use this with pipes to filter output"

---

## Validation Checklist

Before pushing changes, verify:

- [ ] All opening tags have closing tags (validate HTML)
- [ ] No `<div>` or `<span>` are missing closing tags
- [ ] All `onclick="toggleCard(this.closest('.card'))"` are present and correct
- [ ] All flag chips reference existing flags: `onclick="goToFlag('-flagname')"`
- [ ] No CSS classes are misspelled (check against this guide)
- [ ] Color values match the palette exactly
- [ ] Font sizes are correct (9px labels, 10.5px code, 11px body)
- [ ] Example code has correct prompts (`$`, `#`, `%`)
- [ ] Indentation is consistent (2 or 4 spaces; current file uses 2)
- [ ] No hardcoded styling in cards (use CSS classes instead)
- [ ] Card descriptions are under 60 characters
- [ ] No extra line breaks inside `.dcode` blocks (breaks formatting)
- [ ] Icon is always `⌘` for commands (not other Unicode)
- [ ] Section headers use consistent title case

---

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Forgetting `onclick="toggleCard()"` | Every card header needs this |
| Mismatched CSS classes | Copy from template; don't invent new names |
| Too much text in descriptions | Keep "What it does" under 60 chars |
| Code examples without context | Show both command and typical output |
| Inconsistent prompts (`$` vs `#` vs `%`) | Use correct prompt for platform |
| Extra spaces in `.dcode` | Can break pre-formatted text layout |
| Flag chips without existing flags | Only add chips if flag is in Flags tab |
| Concepts without subtitles | Every concept needs both term and sub |

---

## File Structure Reference

**Location of grids in bash-skills.html:**

```
<body>
  <div id="app">
    <div class="titlebar">...</div>
    <div class="tabs">
      <button class="tab-btn active" data-tab="commands">Commands</button>
      <button class="tab-btn" data-tab="blocks">Building blocks</button>
      <button class="tab-btn" data-tab="flags">Flags</button>
      <button class="tab-btn" data-tab="concepts">Concepts</button>
    </div>
    
    <div id="commands" class="tab-content active">
      <div class="search-bar">...</div>
      <div class="section-title">Files & directories</div>
      <div class="card-grid">
        <!-- pwd, ls, cd, find, grep, mv, cp, rm, ... -->
      </div>
      <div class="section-title">Remote & SSH</div>
      <div class="card-grid">
        <!-- ssh, scp, ... -->
      </div>
      <div class="section-title">System info & admin</div>
      <div class="card-grid">
        <!-- whoami, du, df, chmod, systemctl, ... -->
      </div>
    </div>
    
    <div id="blocks" class="tab-content">
      <div class="section-title">Symbols & operators</div>
      <div class="block-grid">
        <!-- ~, ., .., |, $, \, && -->
      </div>
      <div class="section-title">Text Processing</div>
      <div class="block-grid">
        <!-- awk, sed, grep, for, while, ... -->
      </div>
      <div class="section-title">Scripting</div>
      <div class="block-grid">
        <!-- if, for, function, ... -->
      </div>
    </div>
    
    <div id="flags" class="tab-content">
      <!-- Flag reference grid -->
    </div>
    
    <div id="concepts" class="tab-content">
      <div class="concept-grid">
        <!-- CLI, Shell, Helix, git, nginx, ... -->
      </div>
    </div>
  </div>
</body>
```

**Where to add new content:**
- **Command:** Insert new `<div class="card">` in the appropriate section (Files & directories, Remote & SSH, System info & admin)
- **Building block:** Insert new `<div class="block-card">` in the appropriate section (Symbols & operators, Text Processing, Scripting)
- **Concept:** Insert new `<div class="concept-card">` in the `.concept-grid` (no sections)
- **Section:** Create new `<div class="section-title">...</div>` above a new grid if needed

---

## Next Steps

When adding new content:
1. **Identify the type:** Is it a command, building block, or concept?
2. **Find the right location:** Which tab? Which section?
3. **Copy the template** from this guide (don't write from scratch)
4. **Fill in the blanks:** Command name, description, examples, etc.
5. **Check against validation checklist** before committing
6. **Test in browser** locally before pushing to GitHub

For automated weekly updates, the prompt should:
- Scan project conversation context for new technical concepts learned
- Match against existing entries to avoid duplicates
- Use this guide to structure HTML additions
- Run the validation checklist before pushing
- Create a git commit with a clear message listing what was added
