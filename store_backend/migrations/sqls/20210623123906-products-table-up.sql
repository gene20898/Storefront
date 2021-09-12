CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price float(2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    url VARCHAR(300) NOT NULL,
    description VARCHAR(500) NOT NULL
);