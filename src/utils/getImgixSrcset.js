export function getImgixSrcset(url, width) {
  const urls = [];

  for (let i = 0; i < 3; i += 1) {
    urls.push(`${url}&w=${width}&dpr=${i + 1} ${i + 1}x`);
  }

  return urls.join(', ');
}
