import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { dirname } from 'path';

const outputPath = process.argv[2] ?? 'screenshots/before.png';
mkdirSync(dirname(outputPath), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

// Peak state: sales page with all 5 stores rendered in the table
await page.goto('http://localhost:8080/sales.html', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);

await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();
console.log(`Screenshot saved to ${outputPath}`);
