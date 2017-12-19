DROP TABLE if EXISTS Seminars CASCADE;
DROP TABLE if EXISTS Class CASCADE;
DROP TABLE if EXISTS Attendees CASCADE;

CREATE TABLE Seminars (
  id SERIAL PRIMARY KEY UNIQUE,
  seminar_name VARCHAR(500)
);

CREATE TABLE Class (
  id SERIAL PRIMARY KEY UNIQUE,
  class_category VARCHAR(500),
  class_type VARCHAR(500),
  class_date VARCHAR(500),
  class_attendee INTEGER,
  class_completed BOOLEAN
);

CREATE TABLE Attendees (
  id SERIAL PRIMARY KEY UNIQUE,
  class_id INTEGER REFERENCES Class (id) ON DELETE CASCADE,
  first_name VARCHAR(500),
  last_name VARCHAR(500),
  email VARCHAR(500),
  phone VARCHAR(500),
  total VARCHAR(500),
  deposit VARCHAR(500),
  balance VARCHAR(500),
  full_payment BOOLEAN
);
