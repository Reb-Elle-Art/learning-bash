# Quick Reference for Claude — Website Updates

**TL;DR version of WEBSITE_STYLE_GUIDE.md and WEBSITE_UPDATE_INSTRUCTIONS.md**

Use this when you're mid-task and need to quickly remember the formatting rules.

---

## Color Palette (Copy Exact)

```
Primary navy:     #4a6a8a
Card bg:          #f0ede6
Code bg:          #1a1a1a
Code text:        #c8e0a8
Text dark:        #1a1a1a / #222
Text gray:        #555 / #888
Border:           #888
```

---

## Card Template (Copy-Paste This)

### Command Card
```html
<div class="card">
  <div class="card-header" onclick="toggleCard(this.closest('.card'))">
    <span class="card-icon">⌘</span>
    <span class="card-cmd">COMMAND</span>
    <span class="card-desc">SHORT DESCRIPTION</span>
    <span class="chevron">▾</span>
  </div>
  <div class="card-detail">
    <div class="dlabel">What it does</div>
    <div class="dtext">DESCRIPTION (1–2 sentences)</div>
    <div class="dlabel">Examples</div>
    <code class="dcode">$ example1
$ example2</code>
    <div class="dlabel">Tip</div>
    <div class="dtext">OPTIONAL TIP</div>
    <div class="dlabel">Common flags</div>
    <div class="flag-row">
      <span class="flag-chip" onclick="goToFlag('-flag')">-flag</span>
    </div>
  </div>
</div>
```

### Building Block Card
```html
<div class="block-card">
  <div class="block-header" onclick="toggleCard(this.closest('.block-card'))">
    <div><div class="block-symbol">SYMBOL</div><div class="block-name">NAME</div></div>
    <span class="chevron">▾</span>
  </div>
  <div class="block-detail">
    <div class="dlabel">What it is</div>
    <div class="dtext">DESCRIPTION</div>
    <div class="dlabel">Examples</div>
    <code class="dcode">$ example1
$ example2</code>
  </div>
</div>
```

### Concept Card
```html
<div class="concept-card">
  <div class="concept-header" onclick="toggleCard(this.closest('.concept-card'))">
    <div><div class="concept-term">TERM</div><div class="concept-sub">SUBTITLE</div></div>
    <span class="chevron">▾</span>
  </div>
  <div class="concept-detail">
    <div class="dtext">EXPLANATION (2–4 sentences)</div>
  </div>
</div>
```

---

## Where to Add

```
Commands tab:
  - Files & directories → grep, sed, chmod, find, etc.
  - Remote & SSH → ssh, scp
  - System info & admin → whoami, du, chmod, systemctl

Building blocks tab:
  - Symbols & operators → ~, ., .., |, &&
  - Text Processing → awk, sed, grep, for
  - Scripting → if, for, while, function

Concepts tab:
  - (No sections; just one grid)
```

---

## Key Rules (Don't Break These)

1. **Always include:** `onclick="toggleCard(this.closest('.card'))"`  
   → Without this, cards won't expand/collapse

2. **Descriptions:** Max 60 characters  
   → "Search inside files" ✓ / "A comprehensive text pattern matching system..." ✗

3. **Examples:** Use `$ ` prompt  
   → `$ grep error log.txt` ✓ / `grep error log.txt` ✗

4. **Indentation:** 2 spaces (match the file)

5. **Font sizes:**  
   - Labels: 9px  
   - Code: 10.5px  
   - Body: 11px

6. **CSS classes:** Must match exactly  
   → `.card`, `.block-card`, `.concept-card` (not `.cards`, `.Card`, `.block_card`)

7. **Icons:** Command cards always use `⌘`

8. **Flags:** Only add chips for flags already in Flags tab  
   → Check before adding `<span class="flag-chip" onclick="goToFlag('-flag')">-flag</span>`

---

## Validation Checklist

Before pushing, verify ALL of these:

- [ ] **HTML valid** — No unclosed tags (check opening/closing pairs)
- [ ] **CSS classes exact** — No typos in `.card`, `.dlabel`, `.dcode`, etc.
- [ ] **Descriptions short** — Under 60 chars for card titles
- [ ] **Examples realistic** — Real commands with `$` prompt, not pseudocode
- [ ] **Prompts correct** — `$` for user, `#` for root, `%` for Mac
- [ ] **Indentation 2 spaces** — Match existing file
- [ ] **Colors exact** — Use hex codes from palette (not close guesses)
- [ ] **Font sizes right** — 9px, 10.5px, 11px (exact matches)
- [ ] **No hardcoded styles** — Use CSS classes, not `style=""` attributes
- [ ] **Icons correct** — Command cards use `⌘`
- [ ] **Flag chips exist** — Only for flags documented in Flags tab
- [ ] **onclick present** — Every card header has `onclick="toggleCard()"`
- [ ] **Test in browser** — Open locally and click cards; they should expand/collapse

---

## Common Mistakes

| ✗ Wrong | ✓ Right |
|---------|---------|
| `<div class="card-detail">` without `onclick` | Always include `onclick="toggleCard()"` |
| Description with 100+ characters | Max 60 chars; "Search inside files" not "A tool for..." |
| `grep example.txt` | `$ grep example.txt` |
| `#4a6a8a` (close color) | `#4a6a8a` (exact from palette) |
| 2 spaces on one line, 4 on another | Consistent 2 spaces throughout |
| `class="Card"` or `class="card_detail"` | Match exactly: `class="card"`, `class="dlabel"` |
| Flag chip with no `onclick` | `onclick="goToFlag('-flag')"` always |
| Concept card with only term, no subtitle | Both term and subtitle required |

---

## Quick Workflow

1. **Identify type:** Command? Building block? Concept?
2. **Find location:** Which tab? Which section?
3. **Copy template:** From above ↑
4. **Fill blanks:** Command name, description, examples
5. **Check rules:** Descriptions under 60 chars? Prompts correct? CSS exact?
6. **Validate:** Run checklist above ↑
7. **Test:** Open in browser; click to expand/collapse
8. **Commit:** `git commit -m "Add X, Y, Z entries"`
9. **Push:** `git push https://x-access-token:[TOKEN]@github.com/Reb-Elle-Art/learning-bash.git main`

---

## Code Block Format

Inside `<code class="dcode">`:

```
$ grep "error" log.txt
error: line 42
error: line 107

$ grep -c "error" log.txt
2
```

**Rules:**
- Start with `$ ` (not just `grep`)
- Include expected output if helpful
- Use actual file names/paths
- Separate examples with blank line
- Use `pre-wrap` CSS (already in template)

---

## CSS Classes Reference

| Class | Where | Meaning |
|-------|-------|---------|
| `.card` | Command card wrapper | Collapsible command |
| `.block-card` | Building block wrapper | Collapsible pattern |
| `.concept-card` | Concept wrapper | Collapsible concept |
| `.dlabel` | Label line | "What it does", "Examples", etc. |
| `.dtext` | Content line | Description text |
| `.dcode` | Code block | Examples with `$` prompt |
| `.card-cmd` | Command name | The actual command (sed, grep, etc.) |
| `.block-symbol` | Building block symbol | 1–3 chars (awk, ~, for, etc.) |
| `.concept-term` | Concept name | Primary term |

---

## When in Doubt

1. **Copy the template exactly** — Don't invent new structures
2. **Check WEBSITE_STYLE_GUIDE.md** — The full reference
3. **Look at existing entries** — grep card, awk building block, CLI concept
4. **Test in browser** — Does it look right? Does it expand/collapse?
5. **Run the validation checklist** — Catches 90% of issues

---

## GitHub Push Command

```bash
git push https://x-access-token:[TOKEN]@github.com/Reb-Elle-Art/learning-bash.git main
```

**Remember:**
- Replace `[TOKEN]` with actual token
- Generate fresh token for each push (https://github.com/settings/tokens)
- Revoke old tokens after use
- Never commit token to git

---

## File Locations (in Your Working Directory)

```
bash-skills.html (1,727 lines)
  ├── Commands tab (card-grid)
  │   ├── Files & directories (grep, sed, etc.)
  │   ├── Remote & SSH
  │   └── System info & admin
  ├── Building blocks tab (block-grid)
  │   ├── Symbols & operators
  │   ├── Text Processing (awk)
  │   └── Scripting
  ├── Flags tab (flag-grid) — don't edit, just reference
  └── Concepts tab (concept-grid)
```

---

## Quick Sanity Checks

**Before you commit, verify:**

✓ Can click new card and it expands  
✓ Can click again and it collapses  
✓ Text color is readable (`#222` on `#f0ede6`)  
✓ No CSS is missing (cards not floating away, text not tiny)  
✓ Indentation matches the file (2 spaces)  
✓ No typos in command names or descriptions  
✓ Examples use `$` prompt  
✓ Flag chips have `onclick="goToFlag()"`  
✓ HTML is valid (matching open/close tags)  

**If any of these fail, don't push. Fix first.**

---

## One More Thing

**This file is fast reference, not complete documentation.**  
For full details, read:
- WEBSITE_STYLE_GUIDE.md (comprehensive; read once, bookmark)
- WEBSITE_UPDATE_INSTRUCTIONS.md (step-by-step; read before each update)
- This file (quick lookup; use during task)
