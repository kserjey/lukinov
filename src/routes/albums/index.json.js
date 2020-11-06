import { albums } from './_albums';

export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(albums));
}
