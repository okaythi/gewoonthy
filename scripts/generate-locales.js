import fs from 'fs/promises';
import path from 'path';

const locales = ['nl-BE', 'fr-BE', 'pt-BR', 'es-AR', 'sv-SE', 'ja-JP', 'en-US', 'de-DE', 'zh-CN'];

async function generate() {
  const baseDir = path.resolve(process.cwd(), 'locales', 'en-GB');
  
  async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        // Just copy over English for now, users will do human refinement
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  for (const locale of locales) {
    const destDir = path.resolve(process.cwd(), 'locales', locale);
    await copyDir(baseDir, destDir);
    console.log(`Generated boilerplate for ${locale}`);
  }
}

generate().catch(console.error);
