

fetch('https://sudothy.me/')
  .then(r => r.text())
  .then(async html => {
    const scriptMatches = [...html.matchAll(/src="(\/_astro\/[^"']+)"/g)];
    for (const match of scriptMatches) {
      const url = 'https://sudothy.me' + match[1];
      const res = await fetch(url);
      const text = await res.text();
      if (text.includes('VIDEOCLUB')) {
        console.log('Found in', url);
      }
    }
  })
  .catch(console.error);
