#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const dataDir = process.env.BUILD_IN_PUBLIC_HOME || path.join(os.homedir(), '.build-in-public');
const configPath = path.join(dataDir, 'config.json');
const envPath = path.join(dataDir, '.env.local');
if (!fs.existsSync(configPath)) {
  console.error('Setup has not run. Run: node scripts/setup.mjs');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const values = {};
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    if (!line || line.trimStart().startsWith('#')) continue;
    const index = line.indexOf('=');
    if (index > 0) values[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
  }
}
const required = {
  github: ['GITHUB_TOKEN'], notion: ['NOTION_TOKEN'], posthog: ['POSTHOG_PERSONAL_API_KEY', 'POSTHOG_PROJECT_ID'],
  linear: ['LINEAR_API_KEY', 'LINEAR_TEAM_ID'], x: ['TWITTER_BEARER_TOKEN'],
  reddit: ['REDDIT_CLIENT_ID', 'REDDIT_CLIENT_SECRET', 'REDDIT_USER_AGENT'], substack: ['SUBSTACK_PUBLICATION_URL'],
};
let hasProblems = false;
for (const [source, enabled] of Object.entries(config.sources || {})) {
  if (!enabled) { console.log(`${source}: skipped`); continue; }
  const keys = required[source] || [];
  const missing = keys.filter((key) => !values[key] || /^\*+$|^changeme$|^placeholder$/i.test(values[key]));
  if (missing.length) { console.log(`${source}: needs ${missing.join(', ')}`); hasProblems = true; }
  else console.log(`${source}: configured${keys.length ? '' : ' (no credential check)'}`);
}
if (config.sources?.notion && !config.notion_database_id) console.log('notion destination: not selected yet');
console.log(`\nChecked ${envPath} without printing secret values.`);
process.exitCode = hasProblems ? 2 : 0;
