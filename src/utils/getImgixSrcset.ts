export function getImgixSrcset(url: string, width?: number, height?: number) {
  const urls = [];
  const widthQuery = width ? `&w=${width}` : '';
  const heightQuery = height ? `&h=${height}` : '';

  for (let i = 0; i < 3; i += 1) {
    urls.push(`${url}${widthQuery}${heightQuery}&dpr=${i + 1} ${i + 1}x`);
  }

  return urls.join(', ');
}
