CREATE TABLE IF NOT EXISTS song_votes (
    file_name TEXT PRIMARY KEY,
    likes INTEGER DEFAULT 0,
    dislikes INTEGER DEFAULT 0
);
