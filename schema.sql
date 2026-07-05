DROP TABLE IF EXISTS quotes;
CREATE TABLE quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author TEXT NOT NULL,
  text_en TEXT NOT NULL,
  text_nl TEXT,
  text_fr TEXT,
  weight INTEGER DEFAULT 1,
  views INTEGER DEFAULT 0
);

DROP TABLE IF EXISTS threat_ledger;
CREATE TABLE threat_ledger (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  asn TEXT,
  country TEXT,
  event_type TEXT,
  target TEXT,
  blocked BOOLEAN
);
CREATE TABLE IF NOT EXISTS suggestions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  track TEXT NOT NULL,
  artist TEXT,
  alias TEXT,
  status TEXT DEFAULT 'pending' -- pending, approved, discarded
);

CREATE TABLE IF NOT EXISTS about_blocks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL, -- paragraph, image, timeline
  content TEXT NOT NULL, -- JSON string
  order_index INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS close_friends (
  user_id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  is_friend BOOLEAN DEFAULT 0,
  friend_since DATETIME,
  badges TEXT DEFAULT '[]'
);
