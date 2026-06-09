# Git Configuration for Learning Bash Repo

**For pushing to https://github.com/Reb-Elle-Art/learning-bash**

## Configure Locally

Run these commands once on any machine where you'll push changes:

```bash
git config --global user.email "265860153+Reb-Elle-Art@users.noreply.github.com"
git config --global user.name "Reb-Elle-Art"
```

This uses GitHub's noreply email address, which respects email privacy settings.

## GitHub Token

Generate a fresh Personal Access Token for each push:

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: `learning-bash-update-[date]` (e.g., `learning-bash-update-2026-06-09`)
4. Expiration: **1 hour** (single-use for security)
5. Scopes: `repo` (full control)
6. Generate and copy token

## Push Command

```bash
git push https://x-access-token:[TOKEN]@github.com/Reb-Elle-Art/learning-bash.git main
```

Replace `[TOKEN]` with the actual token value.

## After Each Push

Revoke the token at https://github.com/settings/tokens to ensure it can't be reused.

## Notes

- Email: `265860153+Reb-Elle-Art@users.noreply.github.com` (noreply format, GitHub-generated)
- Username: `Reb-Elle-Art`
- Repo: `learning-bash`
- Branch: `main`
- GitHub Pages: Enabled (automatic publishing on push to main)
