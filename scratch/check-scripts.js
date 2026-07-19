const fetch = require('node-fetch');
fetch('https://sudothy.me/songs')
  .then(res => res.text())
  .then(text => {
    const scripts = text.match(/src="(\/_astro\/[^"]+\.js)"/g);
    console.log(scripts);
  })
  .catch(console.error);
