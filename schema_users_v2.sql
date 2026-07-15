DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT,
  primary_group TEXT NOT NULL,
  secondary_groups TEXT,
  is_guest BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  creation_ip TEXT,
  command_stats TEXT DEFAULT '{}'
);

INSERT INTO groups (name) VALUES ('root'), ('sudo'), ('users'), ('guests');

INSERT INTO users (id, username, password, primary_group, secondary_groups, is_guest)
VALUES ('starter-thy-id', 'thy', 'root', 'root', '["sudo"]', 0);
