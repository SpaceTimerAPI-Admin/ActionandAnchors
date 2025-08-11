# Netlify Deploy Fix Notes

1) Replace your repo's `netlify.toml` with this one (no `publish` line).
2) Add `.nvmrc` to pin Node to 20.15.1 locally and on Netlify.
3) In Netlify UI:
   - Site Settings → Build & deploy → Plugins: keep ONLY `@netlify/plugin-nextjs`.
   - Team Settings → Extensions: disable `neon` for this site if present.
   - Deploys → Retry deploy → **Clear cache and deploy site**.
4) If failure persists, add env var `NETLIFY_LOG_LEVEL=debug` and retry to get deeper logs.
