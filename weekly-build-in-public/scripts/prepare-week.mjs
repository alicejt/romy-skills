#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log('Usage: node scripts/prepare-week.mjs [--week YYYY-Www] [--output DIR]');
  process.exit(0);
}
const valueAfter = (flag) => {
  const index = args.indexOf(flag);
  return index === -1 ? undefined : args[index + 1];
};
const suppliedWeek = valueAfter('--week');
const isoWeek = (date) => {
  const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  utc.setUTCDate(utc.getUTCDate() + 4 - (utc.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  return `${utc.getUTCFullYear()}-W${String(Math.ceil((((utc - yearStart) / 86400000) + 1) / 7)).padStart(2, '0')}`;
};
const week = suppliedWeek || isoWeek(new Date(Date.now() - 7 * 86400000));
if (!/^\d{4}-W\d{2}$/.test(week)) throw new Error('Week must look like 2026-W32.');
const outputDir = valueAfter('--output') || path.join(process.env.BUILD_IN_PUBLIC_HOME || path.join(os.homedir(), '.build-in-public'), 'runs', week);
fs.mkdirSync(outputDir, { recursive: true, mode: 0o700 });
const briefPath = path.join(outputDir, 'collection-brief.md');
if (!fs.existsSync(briefPath)) {
  fs.writeFileSync(briefPath, `# Weekly collection brief: ${week}\n\n## Sources\n\n- [ ] GitHub\n- [ ] Notion\n- [ ] Agent-chat export\n- [ ] PostHog\n- [ ] Linear\n- [ ] X\n- [ ] Reddit\n- [ ] Substack\n- [ ] Website/CMS\n\n## Evidence and limitations\n\n- \n\n## Drafting inputs\n\n- Primary goal:\n- Proof or artefact:\n- Intended reader:\n`, { mode: 0o600 });
}
console.log(`Prepared ${briefPath}`);
