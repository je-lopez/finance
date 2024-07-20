DROP DATABASE IF EXISTS finance WITH (FORCE);
CREATE DATABASE finance;

\c finance

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL
);

CREATE INDEX idx_users_email ON users(email);
