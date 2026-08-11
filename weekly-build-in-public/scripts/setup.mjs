#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const dataDir = process.env.BUILD_IN_PUBLIC_HOME || path.join(os.homedir(), '.build-in-public');
const configPath = path.join(dataDir, 'config.json');
const envPath = path.join(dataDir, '.env.local');
const sources = ['github', 'notion', 'agent_chats', 'posthog', 'linear', 'x', 'reddit', 'substack', 'website_cms'];
const envTemplate = `# Keep this file private. Never commit or share it.\nGITHUB_TOKEN=\nNOTION_TOKEN=\nPOSTHOG_PERSONAL_API_KEY=\nPOSTHOG_PROJECT_ID=\nLINEAR_API_KEY=\nLINEAR_TEAM_ID=\nTWITTER_BEARER_TOKEN=\nTWITTER_USER_ID=\nREDDIT_CLIENT_ID=\nREDDIT_CLIENT_SECRET=\nREDDIT_USERNAME=\nREDDIT_PASSWORD=\nREDDIT_USER_AGENT=\nSUBSTACK_PUBLICATION_URL=\n`;

fs.mkdirSync(dataDir, { recursive: true, mode: 0o700 });
if (!fs.existsSync(envPath)) fs.writeFileSync(envPath, envTemplate, { mode: 0o600 });

const existing = fs.existsSync(configPath)
  ? JSON.parse(fs.readFileSync(configPath, 'utf8'))
  : { version: 1, sources: {}, notion_database_id: '', agent_chat_path: '', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone };

if (process.argv.includes('--non-interactive')) {
  fs.writeFileSync(configPath, JSON.stringify(existing, null, 2) + '\n', { mode: 0o600 });
  console.log(`Prepared ${configPath} and ${envPath}`);
  console.log('Run without --non-interactive to select sources, then add only needed credentials.');
  process.exit(0);
}

const rl = readline.createInterface({ input, output });
console.log('\nWeekly Build in Public setup. You can skip any source and change this later.');
console.log('Secrets stay in ' + envPath + '. This wizard will not ask you to paste them.\n');
for (const source of sources) {
  const current = existing.sources[source] === true ? 'Y/n' : 'y/N';
  const answer = (await rl.question(`Use ${source.replaceAll('_', ' ')}? (${current}) `)).trim().toLowerCase();
  existing.sources[source] = answer ? ['y', 'yes'].includes(answer) : existing.sources[source] === true;
}
if (existing.sources.notion) {
  const answer = await rl.question('Optional Notion database ID or URL for weekly metrics (Enter to skip): ');
  if (answer.trim()) existing.notion_database_id = answer.trim();
}
if (existing.sources.agent_chats) {
  const answer = await rl.question('Optional local folder containing chat exports (Enter to choose each week): ');
  if (answer.trim()) existing.agent_chat_path = answer.trim();
}
const timezone = await rl.question(`Timezone for reporting weeks (${existing.timezone}): `);
if (timezone.trim()) existing.timezone = timezone.trim();
await rl.close();

fs.writeFileSync(configPath, JSON.stringify(existing, null, 2) + '\n', { mode: 0o600 });
console.log(`\nSaved setup to ${configPath}`);
console.log(`Add only needed credentials to ${envPath}, then run: node scripts/check-config.mjs`);
