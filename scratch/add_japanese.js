import fs from 'fs/promises';
import path from 'path';

const translations = {
  'nl-BE': 'Japans',
  'fr-BE': 'Japonais',
  'pt-BR': 'Japonês',
  'es-AR': 'Japonés',
  'sv-SE': 'Japanska',
  'ja-JP': '日本語',
  'en-US': 'Japanese',
  'en-GB': 'Japanese',
  'de-DE': 'Japanisch',
  'zh-CN': '日语'
};

async function addJapanese() {
  const localesDir = path.join(process.cwd(), 'locales');
  const locales = await fs.readdir(localesDir);
  
  for (const locale of locales) {
    const uiJsonPath = path.join(localesDir, locale, 'windows', 'about', 'ui.json');
    try {
      const data = await fs.readFile(uiJsonPath, 'utf-8');
      const json = JSON.parse(data);
      if (!json.lang_japanese) {
        json.lang_japanese = translations[locale] || 'Japanese';
        await fs.writeFile(uiJsonPath, JSON.stringify(json, null, 2));
        console.log(`Updated ${locale}`);
      }
    } catch (e) {
      console.error(`Error updating ${locale}:`, e.message);
    }
  }
}

addJapanese();
