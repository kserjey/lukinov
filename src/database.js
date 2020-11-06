import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const database = open({
  filename: ':memory:',
  driver: sqlite3.Database,
}).then((db) => db.migrate({ force: true }).then(() => db));

export { database };
