/**
 * Fetches high-resolution album artwork from the iTunes Search API.
 */
export function fetchAlbumArt(
  artist: string,
  track: string,
  imgEl: HTMLImageElement,
  badgeEl: HTMLElement
): void {
  imgEl.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="%23111"><rect width="200" height="200"/><circle cx="100" cy="100" r="50" fill="%23222"/></svg>';
  badgeEl.textContent = 'Searching iTunes...';

  const term = encodeURIComponent(`${artist} ${track}`);
  fetch(`https://itunes.apple.com/search?term=${term}&entity=song&limit=1`)
    .then(res => res.json())
    .then(data => {
      if (data.results && data.results.length > 0 && data.results[0].artworkUrl100) {
        const highRes = data.results[0].artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg');
        imgEl.src = highRes;
        badgeEl.textContent = 'iTunes Match';
      } else {
        badgeEl.textContent = 'No Art Found';
      }
    })
    .catch(() => {
      badgeEl.textContent = 'Art Offline';
    });
}
