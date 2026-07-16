CREATE TABLE IF NOT EXISTS recent_projects (
    username TEXT,
    project_id INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (username, project_id)
);

CREATE TABLE IF NOT EXISTS user_song_votes (
    username TEXT,
    file_name TEXT,
    action TEXT, -- 'like' or 'dislike'
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (username, file_name)
);
