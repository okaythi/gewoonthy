DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id TEXT PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT,
  display_name TEXT,
  profile_picture_url TEXT DEFAULT 'https://media.thiago.qzz.io/media/vanity/fallback.png',
  last_login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  account_creation_location TEXT,
  current_login_location TEXT,
  current_ip TEXT,
  active_devices TEXT
);
