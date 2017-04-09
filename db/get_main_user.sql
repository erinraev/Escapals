SELECT *
FROM users
WHERE users.email = $1 AND users.password = $2;
