INSERT INTO events (user_id, name, city, state, zipcode, start_date, end_date, start_time, end_time, experience_level, gender, max_num_people, price)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING id;
