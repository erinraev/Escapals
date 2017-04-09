SELECT at.*
FROM user_activity_types uat
INNER JOIN activity_type at ON at.id = uat.activity_type_id
WHERE uat.user_id = $1;
