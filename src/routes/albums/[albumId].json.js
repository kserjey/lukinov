import Prismic from 'prismic-javascript';
import { client } from '../../utils/client';

export async function get(req, res, next) {
  const { albumId } = req.params;
  const album = await client.getByID(albumId);
  const afterAlbum = await client.query(
    Prismic.Predicates.at('document.type', 'album'),
    {
      orderings: '[my.album.date desc]',
      after: albumId,
    }
  );

  if (album) {
    const nextAlbum = afterAlbum.results[0];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ album, nextAlbum }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
}
