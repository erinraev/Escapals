SELECT activity_type.name, *
FROM events
WHERE activity_type.id = events_activity_types.activity_type_id
JOIN events_activity_types ON events.id = events_activity_types.event_id
JOIN activity_type ON events_activity_types.activity_type_id = activity_type.id;
