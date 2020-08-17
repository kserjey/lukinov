import sql from "sql-template-strings";
import { database } from "../../database";

export async function get(req, res, next) {
  const { albumId } = req.params;
  const db = await database;
  const album = await db.get(sql`SELECT * FROM album WHERE id = ${albumId}`);

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
