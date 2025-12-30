React Performance Demo (useMemo & useCallback)

Files:
- index.html — demo app (open in browser)
- style.css — styles

How to run:
1. Install dependencies and run the dev server (Vite):

```bash
cd performance-1
npm install
npm run dev
```

2. Open the browser at the URL shown by Vite and open DevTools console.
3. Click "Increment counter" and observe console logs.

What to observe:
- "Recomputing total price" appears only once (on initial load) because `total` is computed with `useMemo` dependent on `products`.
- `ProductList` logs whether the `onSelect` reference changed — with `useCallback` it should report `false` on counter updates.

Notes:
- This demo uses React via CDN and Babel standalone for simplicity.
- No bundler required; it's a minimal educational example.
Notes:
- This demo uses Vite + React for a local dev experience.
- `useMemo` memoizes the total price calculation so it runs only when `products` changes.
- `useCallback` keeps the `onSelect` function reference stable so `ProductList` doesn't detect a changed prop when only the counter updates.
