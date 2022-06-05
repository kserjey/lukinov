import Prismic from 'prismic-javascript';
import { client } from '../../utils/client';

export async function get({ params }) {
  const album = await client.getByID(params.albumId);
  const afterAlbum = await client.query(
    Prismic.Predicates.at('document.type', 'album'),
    {
      orderings: '[my.album.date desc]',
      after: params.albumId,
    }
  );

  if (!album) return { status: 404, body: { message: 'Not found!' } };
  return { body: { album, nextAlbum: afterAlbum.results[0] } };
}
