-- Tracks which organizer (by email, from Cloudflare Access) added each venue.
ALTER TABLE locations ADD COLUMN added_by TEXT;
