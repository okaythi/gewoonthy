fetch('https://sudothy.me/')
  .then(res => res.text())
  .then(text => {
    const scripts = text.match(/src="(\/_astro\/[^"]+\.js)"/g);
    console.log("Root scripts:", scripts);
  })
  .catch(console.error);
