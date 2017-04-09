INSERT INTO users (email, password, first_name, last_name, age, city, state, zipcode, bio, image_url)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING id;
