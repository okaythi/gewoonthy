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
