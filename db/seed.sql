"INSERT INTO Hairstrokes (class_type, class_date) VALUES ($1, $2);", [ class_type, class_date]

SELECT * FROM class, attendees WHERE class.id = attendees.class_id;
