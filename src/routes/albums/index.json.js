import Prismic from 'prismic-javascript';
import { client } from '../../utils/client';

export async function get(req, res, next) {
  const { next_page: nextPage, results } = await client.query(
    Prismic.Predicates.at('document.type', 'album'),
    {
      orderings: '[my.album.date desc]',
      pageSize: 100,
      page: req.query.page,
    }
  );

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ albums: results, hasMore: nextPage !== null }));
}
