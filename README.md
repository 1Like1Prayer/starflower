# StarFlowers

React + TypeScript + Vite site for the StarFlowers floral atelier.

```
src/
  theme/       design tokens (colour, type, motion…) → CSS custom properties
  styles/      global reset + shared keyframes
  copies/      all user-facing text, one file per feature (en/), typed via i18next
  i18n/        i18next setup
  config/      routes, social links
  data/        bouquet catalogue (ids, category, tone — text lives in copies/)
  hooks/       useInView, useParallax, useAutoRotate, useAnimatedFilter
  components/  ui/ (reusable building blocks) and layout/ (header, footer, shell)
  features/    home, about, gallery, contact, quick-order — page + components + data
```

Add a language by creating `src/copies/<lng>/` with the same shape as `en/` and registering it in `src/copies/index.ts`.
