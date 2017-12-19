DROP TABLE if EXISTS Seminars CASCADE;
DROP TABLE if EXISTS Hairstrokes CASCADE;

CREATE TABLE Seminars (
  seminar_id SERIAL PRIMARY KEY UNIQUE,
  seminar_name VARCHAR(500)
);

CREATE TABLE Hairstrokes (
  class_id SERIAL PRIMARY KEY UNIQUE,
  class_type VARCHAR(500),
  class_date VARCHAR(500),
  class_attendee INTEGER,
  class_completed BOOLEAN
);
