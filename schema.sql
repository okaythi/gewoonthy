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
