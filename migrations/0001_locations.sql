-- Venues/locations shown as pins on the Events map.
-- Add a new row any time a Social Night or special event moves to a new venue.
CREATE TABLE IF NOT EXISTS locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  description TEXT,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Example row (safe to delete):
INSERT INTO locations (name, address, latitude, longitude, description)
VALUES (
  'Waterloo Rec Complex',
  '101 Father David Bauer Dr, Waterloo, ON',
  43.4823,
  -80.5253,
  'Thursday Social Nights, 7-9pm'
);
