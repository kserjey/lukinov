import { client } from '../utils/client';

export async function get(req, res, next) {
  const { data } = await client.getSingle('homepage');

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(
    JSON.stringify({
      landscapePhoto: data.landscape_photo,
      portraitPhoto: data.portrait_photo,
    })
  );
}
