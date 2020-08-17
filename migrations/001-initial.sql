-- Up

CREATE TABLE Album (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  location TEXT NOT NULL,
  model TEXT NOT NULL
);

CREATE TABLE Photo (
  id INTEGER PRIMARY KEY,
  url TEXT NOT NULL,
  album_id INTEGER NOT NULL,
  FOREIGN KEY (album_id)
    REFERENCES Album (id)
);

INSERT INTO Album (name, description, date, location, model)
  VALUES 
    ('First', 'My first album!', '2017-06-22T00:00:00.000Z', 'ST. PETERSBURG', 'Katya')
    ('Second', 'My second album!', '2018-06-22T00:00:00.000Z', 'ST. PETERSBURG', 'Katya');

-- Down

DROP TABLE Album