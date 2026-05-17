# cookie-stand
Salmon Cookies Project

---

## Revamp Tracking (2026-05-17)

### Deep Refactors
- ✅ DEEP-12: Convert cookieStore to ES6 class (`revamp/deep-12-es6-class`) — rewritten as class CookieStore with constructor and methods; consistent camelCase naming
- ✅ DEEP-13: Extract store config data to data.js (`revamp/deep-13-store-data`) — store locations/ranges in js/data.js storeData array; app.js loops over it

### Moderate
- ✅ MOD-7: Fix broken HTML structure in index.html (`revamp/mod-7-fix-html-structure`) — added missing &lt;main&gt; tag, wrapped bare &lt;img&gt; in &lt;li&gt;
- ✅ MOD-8: Extract color palette to CSS custom properties (`revamp/mod-8-css-variables`) — 5 brand colors in :root, all hex values replaced with var()
- ✅ MOD-9: Replace float layout with Flexbox in nav and footer (`revamp/mod-9-flexbox-nav-footer`) — nav icon + links aligned with flex; footer locations evenly spaced with flex
- ✅ MOD-10: Fix table footer not updating after form submission (`revamp/mod-10-fix-table-footer-update`) — recompute totals and re-render footer row on each new store addition
- ✅ MOD-11: Change numeric form inputs to type="number" (`revamp/mod-11-number-inputs`) — minCust, maxCust, AvgCookiesPerSale now use number inputs with min=0 and required

### Quick Wins
- ✅ QW-1: Add meta tags and lang to index.html and sales.html (`revamp/qw-1-meta-tags`) — added charset, viewport, lang="en" to both pages
- ✅ QW-2: Fix duplicate id="foot-p" → class (`revamp/qw-2-fix-duplicate-ids`) — replaced 5 duplicate IDs with class="foot-p", updated CSS selector
- ✅ QW-3: Fix form label mismatch in sales.html (`revamp/qw-3-fix-form-label`) — corrected label for="city" → for="location" to match input id
- ✅ QW-4: Remove console.log from app.js (`revamp/qw-4-remove-consolelog`) — removed stray console.log(grandTotal) left from development
- ✅ QW-5: Delete scratch files (`revamp/qw-5-remove-scratch-files`) — removed whiteboard.html and whiteboard.js from project root
- ✅ QW-6: Add loading="lazy" to all images (`revamp/qw-6-lazy-loading`) — defers off-screen image loading across all pages
