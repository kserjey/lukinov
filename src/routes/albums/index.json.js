import { database } from '../../database';

export async function get(req, res) {
  const db = await database;
  const albums = await db.all('SELECT * FROM Album');

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(albums));
}
