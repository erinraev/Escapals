SELECT at.*
FROM events_activity_types eat
INNER JOIN activity_type at ON at.id = eat.activity_type_id
WHERE eat.event_id = $1;
