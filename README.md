# cookie-stand
Salmon Cookies Project

---

## Revamp Tracking (2026-05-17)

### Moderate
- ✅ MOD-7: Fix broken HTML structure in index.html (`revamp/mod-7-fix-html-structure`) — added missing &lt;main&gt; tag, wrapped bare &lt;img&gt; in &lt;li&gt;

### Quick Wins
- ✅ QW-1: Add meta tags and lang to index.html and sales.html (`revamp/qw-1-meta-tags`) — added charset, viewport, lang="en" to both pages
- ✅ QW-2: Fix duplicate id="foot-p" → class (`revamp/qw-2-fix-duplicate-ids`) — replaced 5 duplicate IDs with class="foot-p", updated CSS selector
- ✅ QW-3: Fix form label mismatch in sales.html (`revamp/qw-3-fix-form-label`) — corrected label for="city" → for="location" to match input id
- ✅ QW-4: Remove console.log from app.js (`revamp/qw-4-remove-consolelog`) — removed stray console.log(grandTotal) left from development
- ✅ QW-5: Delete scratch files (`revamp/qw-5-remove-scratch-files`) — removed whiteboard.html and whiteboard.js from project root
- ✅ QW-6: Add loading="lazy" to all images (`revamp/qw-6-lazy-loading`) — defers off-screen image loading across all pages
