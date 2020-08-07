import { albums } from "./_albums";

export function get(req, res, next) {
  const { albumId } = req.params;
  const album = albums.find((item) => item.id == albumId);

  if (album) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(album));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
