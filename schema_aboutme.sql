CREATE TABLE IF NOT EXISTS about_blocks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL,
  content TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  edited_by_ip TEXT,
  updated_at TEXT
);
