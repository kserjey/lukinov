import Prismic from 'prismic-javascript';
import { client } from '../../utils/client';

export async function get(req, res, next) {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'album'),
    { orderings: '[my.album.date desc]' }
  );

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ albums: results }));
}
