CREATE TABLE IF NOT EXISTS video_votes (
    ip TEXT NOT NULL,
    file_name TEXT NOT NULL,
    date TEXT NOT NULL,
    liked BOOLEAN DEFAULT 0,
    desliked BOOLEAN DEFAULT 0,
    PRIMARY KEY (ip, file_name)
);
