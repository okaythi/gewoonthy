import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function uploadToR2() {
  const localesDir = path.resolve(process.cwd(), 'locales');
  
  async function walk(dir) {
    let results = [];
    const list = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of list) {
      const fullPath = path.resolve(dir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(await walk(fullPath));
      } else {
        results.push(fullPath);
      }
    }
    return results;
  }

  const files = await walk(localesDir);
  
  for (const file of files) {
    const relativePath = path.relative(localesDir, file).replace(/\\/g, '/');
    const r2Path = `gewoonthy-locales/${relativePath}`;
    console.log(`Uploading ${relativePath}...`);
    try {
      // In production, an S3 sync tool is faster, but for this setup we invoke wrangler per file
      await execAsync(`npx wrangler r2 object put ${r2Path} --file="${file}"`);
      console.log(`✅ Uploaded ${relativePath}`);
    } catch (e) {
      console.error(`❌ Failed to upload ${relativePath}:`, e.message);
    }
  }
}

uploadToR2().catch(console.error);
