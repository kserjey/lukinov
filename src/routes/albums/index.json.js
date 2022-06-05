import Prismic from 'prismic-javascript';
import { client } from '../../utils/client';

export async function get({ url }) {
  const { next_page: nextPage, results } = await client.query(
    Prismic.Predicates.at('document.type', 'album'),
    {
      orderings: '[my.album.date desc]',
      pageSize: 100,
      page: url.searchParams.get('page'),
    }
  );

  return { body: { albums: results, hasMore: nextPage !== null } };
}
